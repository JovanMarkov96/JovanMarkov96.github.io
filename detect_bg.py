from PIL import Image
import collections

def get_bg_color(path):
    with Image.open(path) as img:
        img = img.convert("RGB")
        # Sample the corners for background color
        width, height = img.size
        samples = [
            img.getpixel((0, 0)),
            img.getpixel((width-1, 0)),
            img.getpixel((0, height-1)),
            img.getpixel((width-1, height-1)),
            img.getpixel((width//2, 0)),
            img.getpixel((width//2, height-1)),
            img.getpixel((0, height//2)),
            img.getpixel((width-1, height//2))
        ]
        counter = collections.Counter(samples)
        return counter.most_common(1)[0][0]

ap_path = "d:/OneDrive - weizmann.ac.il/GitHub/JovanMarkov96.github.io/images/pub_thumbnails/AP.jpg"
gs_path = "d:/OneDrive - weizmann.ac.il/GitHub/JovanMarkov96.github.io/images/pub_thumbnails/globalsym.png"

try:
    ap_bg = get_bg_color(ap_path)
    gs_bg = get_bg_color(gs_path)
    print(f"AP Background Color: {ap_bg}")
    print(f"GS Background Color: {gs_bg}")
except Exception as e:
    print(f"Error: {e}")
