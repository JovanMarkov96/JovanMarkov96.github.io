# CV Generator

This folder contains tools to generate a professional PDF CV from your website's `cv.md` file using the ModernCV LaTeX template.

## How it works
1. Edit your CV in `_pages/cv.md` (Markdown format).
2. Run `generate_cv_pdf.py` to convert it to LaTeX and compile a PDF using your ModernCV style files.

## Requirements
- Python 3
- Pandoc (for Markdown to LaTeX conversion)
- A working LaTeX installation (e.g., TeX Live, MikTeX)

## Usage
```powershell
cd cv_generator
python generate_cv_pdf.py
```
The script will:
- Convert `../_pages/cv.md` to LaTeX
- Insert the content into your ModernCV template
- Compile the PDF (output: `Jovan_Markov_CV.pdf`)

## Customization
- Place your ModernCV style files in this folder or update the script to point to their location.
- Edit the template or script as needed for advanced formatting.
