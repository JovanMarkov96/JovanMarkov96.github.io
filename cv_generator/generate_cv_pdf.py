import os
import shutil
import subprocess
import sys

# Paths
ROOT = os.path.dirname(os.path.abspath(__file__))
md_path = os.path.join(ROOT, '..', '_pages', 'cv.md')
template_path = os.path.join(ROOT, 'main_template.tex')
output_tex = os.path.join(ROOT, 'Jovan_Markov_CV.tex')
output_pdf = os.path.join(ROOT, 'Jovan_Markov_CV.pdf')
pandoc_latex = os.path.join(ROOT, 'cv_content.tex')


def which(cmd: str) -> bool:
    return shutil.which(cmd) is not None


def fail(msg: str):
    print(f"ERROR: {msg}")
    sys.exit(1)


def check_prerequisites():
    if not which('pandoc'):
        fail('Pandoc not found. Please install Pandoc and ensure it is in your PATH: https://pandoc.org/installing.html')
    if not which('pdflatex'):
        fail('pdflatex not found. Please install a LaTeX distribution (MiKTeX or TeX Live) and ensure it is in your PATH.')


def ensure_inputs():
    if not os.path.exists(md_path):
        fail(f"Markdown CV not found at: {md_path}")
    if not os.path.exists(template_path):
        fail(
            "LaTeX template not found at main_template.tex. Please copy your LaTeX template (e.g., main.tex) here and name it 'main_template.tex' with a marker '% INSERT_CV_CONTENT_HERE'."
        )


def run(cmd):
    print('> ' + ' '.join(cmd))
    subprocess.run(cmd, check=True)


def main():
    check_prerequisites()
    ensure_inputs()

    # Step 1: Convert Markdown to LaTeX using Pandoc
    print('Running Pandoc to convert cv.md to LaTeX...')
    run(['pandoc', md_path, '-o', pandoc_latex, '--from', 'markdown', '--to', 'latex'])

    # Step 2: Insert LaTeX content into ModernCV template
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    with open(pandoc_latex, 'r', encoding='utf-8') as f:
        cv_content = f.read()

    if '% INSERT_CV_CONTENT_HERE' not in template:
        fail("Template missing marker '% INSERT_CV_CONTENT_HERE'. Add this line where Markdown-derived LaTeX should be inserted.")

    final_tex = template.replace('% INSERT_CV_CONTENT_HERE', cv_content)
    with open(output_tex, 'w', encoding='utf-8') as f:
        f.write(final_tex)

    # Step 3: Compile PDF using pdflatex (twice for stable refs)
    print('Compiling PDF with pdflatex...')
    run(['pdflatex', '-interaction=nonstopmode', output_tex])
    run(['pdflatex', '-interaction=nonstopmode', output_tex])

    if os.path.exists(output_pdf):
        print(f'PDF generated: {output_pdf}')
        # Also copy to site files/ for a nice public URL
        site_files_dir = os.path.join(ROOT, '..', 'files')
        try:
            os.makedirs(site_files_dir, exist_ok=True)
            dest = os.path.join(site_files_dir, 'Jovan_Markov_CV.pdf')
            shutil.copy2(output_pdf, dest)
            print(f'PDF copied to: {dest}')
        except Exception as e:
            print(f'Warning: could not copy PDF to files/: {e}')
    else:
        fail('pdflatex finished without creating the expected PDF. Check LaTeX log for errors.')


if __name__ == '__main__':
    main()