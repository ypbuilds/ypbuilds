from PIL import Image, ImageDraw
import sys

def round_corners(image_path, output_path, radius):
    try:
        im = Image.open(image_path).convert('RGBA')
        
        # Calculate radius based on a percentage of the image size
        w, h = im.size
        # For a standard squircle, radius is usually ~20-25% of the width. Let's do 20%
        calculated_radius = int(min(w, h) * 0.2)
        if radius > 0:
            calculated_radius = radius
            
        circle = Image.new('L', (calculated_radius * 2, calculated_radius * 2), 0)
        draw = ImageDraw.Draw(circle)
        draw.ellipse((0, 0, calculated_radius * 2 - 1, calculated_radius * 2 - 1), fill=255)
        
        alpha = Image.new('L', im.size, 255)
        
        # Upper left
        alpha.paste(circle.crop((0, 0, calculated_radius, calculated_radius)), (0, 0))
        # Lower left
        alpha.paste(circle.crop((0, calculated_radius, calculated_radius, calculated_radius * 2)), (0, h - calculated_radius))
        # Upper right
        alpha.paste(circle.crop((calculated_radius, 0, calculated_radius * 2, calculated_radius)), (w - calculated_radius, 0))
        # Lower right
        alpha.paste(circle.crop((calculated_radius, calculated_radius, calculated_radius * 2, calculated_radius * 2)), (w - calculated_radius, h - calculated_radius))
        
        im.putalpha(alpha)
        im.save(output_path)
        print('Success')
    except Exception as e:
        print('Error:', e)
        sys.exit(1)

round_corners('title-bar-logo.PNG', 'title-bar-logo-rounded.png', 0)
