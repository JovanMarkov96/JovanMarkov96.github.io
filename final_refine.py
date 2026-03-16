from PIL import Image
import os

def refine_thumbnail(path, bg_color=(255, 255, 255)):
    with Image.open(path) as img:
        img = img.convert("RGBA")
        
        # Crop away margins if they are exactly the bg_color to get the true content size
        # (This helps if the user's provided figure already has some whitespace)
        # However, for simplicity and to honor "full y length", we'll just scale the current content.
        
        # We want the content height to be 100% of the canvas height.
        # Target aspect ratio is 16:9.
        target_aspect = 16 / 9
        
        orig_w, orig_h = img.size
        
        # Canvas height will be the same as original height (or a standard one)
        # Let's keep the original height as the base.
        canvas_h = orig_h
        canvas_w = int(canvas_h * target_aspect)
        
        # If the original width is already wider than 16:9, we'd need to scale down the whole image.
        if orig_w > canvas_w:
             canvas_w = orig_w
             canvas_h = int(canvas_w / target_aspect)
        
        # Create the canvas with the background color
        # Adding a tiny bit of opacity safety
        canvas = Image.new("RGBA", (canvas_w, canvas_h), (*bg_color, 255))
        
        # Paste the original image in the center
        paste_x = (canvas_w - orig_w) // 2
        paste_y = (canvas_h - orig_h) // 2
        
        canvas.paste(img, (paste_x, paste_y), img)
        
        # Convert back to RGB and save
        final_img = canvas.convert("RGB")
        # Save as the same format (or overwrite as needed)
        ext = os.path.splitext(path)[1].lower()
        if ext == '.jpg' or ext == '.jpeg':
            final_img.save(path, quality=95)
        else:
            final_img.save(path)
        print(f"Refined {os.path.basename(path)} to {final_img.size}")

ap_path = "d:/OneDrive - weizmann.ac.il/GitHub/JovanMarkov96.github.io/images/pub_thumbnails/AP.jpg"
gs_path = "d:/OneDrive - weizmann.ac.il/GitHub/JovanMarkov96.github.io/images/pub_thumbnails/globalsym.png"

refine_thumbnail(ap_path)
refine_thumbnail(gs_path)
