import os
from rembg import remove
from PIL import Image
import glob

input_dir = "public/images/INSTRUMENT'S IMAGES"
output_dir = "processed_images"

os.makedirs(output_dir, exist_ok=True)

for img_path in glob.glob(os.path.join(input_dir, "*.png")):
    try:
        img = Image.open(img_path)
        out = remove(img)
        base_name = os.path.basename(img_path)
        out_path = os.path.join(output_dir, f"processed_{base_name}")
        out.save(out_path)
        print(f"Processed {base_name}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

print("All images processed.")
