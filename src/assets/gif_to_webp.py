from PIL import Image


im = Image.open("emoji-canvas.gif")
im.save("emoji-canvas.webp", format="WEBP", save_all=True)
im = Image.open("esr-demo.gif")
im.save("esr-demo.webp", format="WEBP", save_all=True)
im = Image.open("rolling-gallery.gif")
im.save("rolling-gallery.webp", format="WEBP", save_all=True)
im = Image.open("tracklift.gif")
im.save("tracklift.webp", format="WEBP", save_all=True)
im = Image.open("treasure-hunt.gif")
im.save("treasure-hunt.webp", format="WEBP", save_all=True)