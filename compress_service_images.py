import os
from PIL import Image
import glob

input_dir = "product images"
output_dir = "public/optimized_images"

os.makedirs(output_dir, exist_ok=True)

def compress_image(img_path, output_path, max_width=800, quality=80):
    try:
        img = Image.open(img_path)
        # Calculate new height maintaining aspect ratio
        width_percent = (max_width / float(img.size[0]))
        height = int((float(img.size[1]) * float(width_percent)))
        img = img.resize((max_width, height), Image.Resampling.LANCZOS)

        # Convert to RGB if necessary (for JPEG)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        print(f"Compressed {os.path.basename(img_path)} to {os.path.basename(output_path)}")
    except Exception as e:
        print(f"Error compressing {img_path}: {e}")

for img_path in glob.glob(os.path.join(input_dir, "*")):
    if img_path.lower().endswith(('.png', '.jpg', '.jpeg')):
        base_name = os.path.basename(img_path)
        name, ext = os.path.splitext(base_name)
        output_path = os.path.join(output_dir, f"{name}.jpg")  # Save as JPG
        compress_image(img_path, output_path)

print("All service images compressed.")
