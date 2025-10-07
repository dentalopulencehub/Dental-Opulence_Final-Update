#!/usr/bin/env python3
"""
Update code to replace SVG imports with Cloudflare Image URLs.
Run this AFTER uploading images to Cloudflare.
"""

import os
import re
import json
from pathlib import Path

def load_mappings():
    """Load the image mappings from files."""
    # Load SVG -> extracted image mapping
    svg_to_image = {}
    with open('image_mapping.txt', 'r') as f:
        for line in f:
            if ' -> ' in line:
                svg_path, images = line.strip().split(' -> ')
                # Get just the filename from path
                svg_file = Path(svg_path).name
                # Use first extracted image
                first_image = images.split(', ')[0]
                # Remove extension and add to mapping
                image_id = Path(first_image).stem
                svg_to_image[svg_file] = image_id

    # Load Cloudflare URLs
    with open('cloudflare_url_mapping.json', 'r') as f:
        cloudflare_urls = json.load(f)

    return svg_to_image, cloudflare_urls

def find_svg_imports(directory='src'):
    """Find all files that import SVG files."""
    files_with_imports = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                    # Look for imports of SVG files from assets/images
                    if re.search(r'from ["\'].*assets/images/.*\.svg["\']', content):
                        files_with_imports.append(filepath)

    return files_with_imports

def update_file_imports(filepath, svg_to_image, cloudflare_urls, dry_run=False):
    """Update SVG imports in a file to use Cloudflare URLs."""
    with open(filepath, 'r') as f:
        content = f.read()
        original_content = content

    changes = []

    # Find all SVG imports
    # Pattern: import varName from "../../../assets/images/filename.svg"
    pattern = r'import\s+(\w+)\s+from\s+["\']([^"\']*assets/images/([^"\']+\.svg))["\']'

    def replace_import(match):
        var_name = match.group(1)
        full_path = match.group(2)
        svg_filename = match.group(3)

        # Check if this SVG was converted
        if svg_filename in svg_to_image:
            image_id = svg_to_image[svg_filename]

            if image_id in cloudflare_urls:
                cloudflare_url = cloudflare_urls[image_id]
                changes.append(f"  - {var_name}: {svg_filename} -> Cloudflare")
                # Replace with: const varName = "https://cloudflare-url"
                return f'const {var_name} = "{cloudflare_url}"'

        # Return original if not converted
        return match.group(0)

    content = re.sub(pattern, replace_import, content)

    # Only write if content changed
    if content != original_content:
        if not dry_run:
            with open(filepath, 'w') as f:
                f.write(content)

        return changes

    return []

def main():
    print("Loading image mappings...")

    try:
        svg_to_image, cloudflare_urls = load_mappings()
    except FileNotFoundError as e:
        print(f"❌ Error: {e}")
        print("\nMake sure you have:")
        print("1. Run extract_images.py (creates image_mapping.txt)")
        print("2. Run upload_to_cloudflare.sh (creates cloudflare_url_mapping.json)")
        return

    print(f"Found {len(svg_to_image)} SVG mappings")
    print(f"Found {len(cloudflare_urls)} Cloudflare URLs\n")

    print("Finding files with SVG imports...")
    files = find_svg_imports('src')
    print(f"Found {len(files)} files to check\n")

    # First, do a dry run
    print("DRY RUN - Checking what would be changed:\n")
    total_changes = 0

    for filepath in files:
        changes = update_file_imports(filepath, svg_to_image, cloudflare_urls, dry_run=True)
        if changes:
            print(f"📝 {filepath}")
            for change in changes:
                print(change)
            total_changes += len(changes)
            print()

    if total_changes == 0:
        print("✓ No changes needed!")
        return

    print(f"\n{'='*60}")
    print(f"Total changes: {total_changes} imports in {len(files)} files")
    print(f"{'='*60}\n")

    # Ask for confirmation
    response = input("Apply these changes? (yes/no): ")

    if response.lower() in ['yes', 'y']:
        print("\nApplying changes...")
        for filepath in files:
            changes = update_file_imports(filepath, svg_to_image, cloudflare_urls, dry_run=False)
            if changes:
                print(f"✓ Updated {filepath}")

        print("\n✅ All files updated!")
        print("\nNext steps:")
        print("1. Test your application")
        print("2. If everything works, delete the old SVG files")
        print("3. Commit the changes to git")
    else:
        print("❌ Changes cancelled")

if __name__ == '__main__':
    main()
