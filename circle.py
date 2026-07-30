from PIL import Image, ImageDraw
import sys

def create_centered_circle(image_path, output_path):
    try:
        im = Image.open(image_path).convert('RGBA')
        
        # Create a mask of the dark pixels (assuming black design on white bg)
        gray = im.convert('L')
        # Threshold: pixels darker than 240 are considered part of the design
        dark_mask = gray.point(lambda p: 255 if p < 240 else 0)
        bbox = dark_mask.getbbox()
        
        if not bbox:
            print("No design found, using whole image.")
            bbox = (0, 0, im.width, im.height)
            
        left, upper, right, lower = bbox
        
        # Calculate center of the design
        cx = (left + right) / 2
        cy = (upper + lower) / 2
        
        # Calculate radius of the design
        design_w = right - left
        design_h = lower - upper
        design_radius = max(design_w, design_h) / 2
        
        # Add padding to create equal distance (e.g. 40% of design radius)
        padding = design_radius * 0.40
        circle_radius = int(design_radius + padding)
        
        # Crop square around the center
        crop_box = (
            int(cx - circle_radius),
            int(cy - circle_radius),
            int(cx + circle_radius),
            int(cy + circle_radius)
        )
        cropped = im.crop(crop_box)
        
        # Create a white square
        final_size = circle_radius * 2
        final_img = Image.new('RGBA', (final_size, final_size), (255, 255, 255, 255))
        # Composite cropped image over white bg
        final_img.paste(cropped, (0, 0), cropped)
        
        # Create circular mask
        mask = Image.new('L', (final_size, final_size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, final_size, final_size), fill=255)
        
        # Apply mask
        final_img.putalpha(mask)
        
        final_img.save(output_path)
        print('Success')
    except Exception as e:
        print('Error:', e)
        sys.exit(1)

create_centered_circle('title-bar-logo.PNG', 'title-bar-logo-rounded.png')
