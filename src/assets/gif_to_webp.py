from PIL import Image
import sys

gif_file = sys.argv[1].split(".")[0]


print(gif_file)
im = Image.open(f"{gif_file}.gif")
im.save(f"{gif_file}.webp", format="WEBP", save_all=True)
