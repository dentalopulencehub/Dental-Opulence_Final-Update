#!/usr/bin/env python3
"""
Extract embedded base64 images from SVG files and save as optimized images.
"""

import os
import re
import base64
from pathlib import Path

def extract_images_from_svg(svg_path, output_dir):
    """Extract base64 images from an SVG file."""
    with open(svg_path, 'r') as f:
        svg_content = f.read()

    # Find all base64 image data
    pattern = r'data:image/(jpeg|jpg|png);base64,([^"\']+)'
    matches = re.findall(pattern, svg_content)

    if not matches:
        return None

    svg_name = Path(svg_path).stem
    extracted_files = []

    for idx, (image_type, base64_data) in enumerate(matches):
        try:
            # Decode base64
            image_data = base64.b64decode(base64_data)

            # Determine extension
            ext = 'jpg' if image_type in ['jpeg', 'jpg'] else image_type

            # Create output filename
            if idx == 0:
                output_filename = f"{svg_name}.{ext}"
            else:
                output_filename = f"{svg_name}_{idx}.{ext}"

            output_path = os.path.join(output_dir, output_filename)

            # Write image file
            with open(output_path, 'wb') as img_file:
                img_file.write(image_data)

            size_mb = len(image_data) / (1024 * 1024)
            print(f"✓ Extracted: {output_filename} ({size_mb:.2f} MB)")
            extracted_files.append(output_filename)

        except Exception as e:
            print(f"✗ Error extracting from {svg_name}: {e}")

    return extracted_files

def main():
    assets_dir = 'assets/images'
    output_dir = 'extracted_images'

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Find all large SVG files (>1MB)
    print("Finding large SVG files...")
    large_svgs = []

    for svg_file in Path(assets_dir).glob('*.svg'):
        size = svg_file.stat().st_size
        if size > 1024 * 1024:  # > 1MB
            large_svgs.append(svg_file)

    print(f"Found {len(large_svgs)} large SVG files\n")

    # Extract images
    total_extracted = 0
    mapping = {}

    for svg_path in sorted(large_svgs):
        print(f"Processing: {svg_path.name}")
        extracted = extract_images_from_svg(svg_path, output_dir)

        if extracted:
            mapping[str(svg_path)] = extracted
            total_extracted += len(extracted)
        print()

    print(f"\n{'='*60}")
    print(f"Total: Extracted {total_extracted} images from {len(large_svgs)} SVG files")
    print(f"Output directory: {output_dir}/")
    print(f"{'='*60}")

    # Save mapping file
    with open('image_mapping.txt', 'w') as f:
        for svg, images in mapping.items():
            f.write(f"{svg} -> {', '.join(images)}\n")

    print("\nMapping saved to: image_mapping.txt")

if __name__ == '__main__':
    main()
