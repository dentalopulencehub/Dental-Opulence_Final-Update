#!/bin/bash

# Optimize extracted images using sips (built-in macOS tool)
echo "Optimizing images..."

INPUT_DIR="extracted_images"
OUTPUT_DIR="optimized_images"

mkdir -p "$OUTPUT_DIR"

total=0
count=0

for img in "$INPUT_DIR"/*.{jpg,jpeg,png}; do
    [ -e "$img" ] || continue

    filename=$(basename "$img")
    ext="${filename##*.}"

    # Get original size
    orig_size=$(stat -f%z "$img")

    # Optimize based on file type
    if [[ "$ext" =~ ^(jpg|jpeg)$ ]]; then
        # Optimize JPEG - max width 1200px, 80% quality
        sips -Z 1200 -s format jpeg -s formatOptions 80 "$img" --out "$OUTPUT_DIR/$filename" >/dev/null 2>&1
    else
        # Convert PNG to JPEG for better compression - max width 1200px, 80% quality
        newname="${filename%.*}.jpg"
        sips -Z 1200 -s format jpeg -s formatOptions 80 "$img" --out "$OUTPUT_DIR/$newname" >/dev/null 2>&1
    fi

    # Get new size
    if [[ "$ext" =~ ^(jpg|jpeg)$ ]]; then
        new_file="$OUTPUT_DIR/$filename"
    else
        new_file="$OUTPUT_DIR/${filename%.*}.jpg"
    fi

    if [ -f "$new_file" ]; then
        new_size=$(stat -f%z "$new_file")
        reduction=$((100 - (new_size * 100 / orig_size)))

        total=$((total + 1))
        count=$((count + new_size))

        printf "✓ %-50s %6.1fKB -> %6.1fKB (%d%% reduction)\n" \
            "$filename" \
            "$(echo "scale=1; $orig_size/1024" | bc)" \
            "$(echo "scale=1; $new_size/1024" | bc)" \
            "$reduction"
    fi
done

echo ""
echo "============================================"
echo "Optimized $total images"
echo "Total size: $(du -sh "$OUTPUT_DIR" | awk '{print $1}')"
echo "Output: $OUTPUT_DIR/"
echo "============================================"
