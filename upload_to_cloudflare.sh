#!/bin/bash

# Upload images to Cloudflare Images
# Usage: ./upload_to_cloudflare.sh

# ========================================
# CONFIGURATION - FILL THESE IN:
# ========================================
ACCOUNT_ID="323c464c8747c7110b8060cae23df989"
API_TOKEN="NlI_nQUY1_zJV9hjrFNkVHF6_9bmaRG9HzRGrb5H"

# ========================================
# You can find these at:
# Account ID: https://dash.cloudflare.com/ (right sidebar)
# API Token: https://dash.cloudflare.com/profile/api-tokens
#   - Create token with "Cloudflare Images" template
# ========================================

if [ "$ACCOUNT_ID" = "YOUR_ACCOUNT_ID" ] || [ "$API_TOKEN" = "YOUR_API_TOKEN" ]; then
    echo "❌ Error: Please edit this script and add your Cloudflare credentials"
    echo ""
    echo "1. Get your Account ID from: https://dash.cloudflare.com/"
    echo "2. Create an API Token at: https://dash.cloudflare.com/profile/api-tokens"
    echo "   - Use 'Cloudflare Images' template"
    echo "3. Edit this file and replace YOUR_ACCOUNT_ID and YOUR_API_TOKEN"
    exit 1
fi

INPUT_DIR="optimized_images"
LOG_FILE="cloudflare_upload_log.txt"
MAPPING_FILE="cloudflare_url_mapping.json"

# Clear previous logs
> "$LOG_FILE"
echo "{" > "$MAPPING_FILE"

count=0
total=$(ls -1 "$INPUT_DIR"/*.jpg 2>/dev/null | wc -l)

echo "Uploading $total images to Cloudflare Images..."
echo ""

for img in "$INPUT_DIR"/*.jpg; do
    [ -e "$img" ] || continue

    filename=$(basename "$img")
    # Use filename without extension as the image ID
    image_id="${filename%.*}"

    count=$((count + 1))

    echo -n "[$count/$total] Uploading $filename... "

    # Upload to Cloudflare Images
    response=$(curl -s -X POST \
        "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/images/v1" \
        -H "Authorization: Bearer $API_TOKEN" \
        -F "file=@$img" \
        -F "id=$image_id")

    # Check if successful
    if echo "$response" | grep -q '"success":true'; then
        # Extract the image URL from variants array
        image_url=$(echo "$response" | grep -o 'https://imagedelivery.net/[^"]*' | head -1)

        echo "✓"
        echo "$filename -> $image_url" >> "$LOG_FILE"

        # Add to mapping file (JSON format)
        if [ $count -eq $total ]; then
            echo "  \"$image_id\": \"$image_url\"" >> "$MAPPING_FILE"
        else
            echo "  \"$image_id\": \"$image_url\"," >> "$MAPPING_FILE"
        fi
    else
        echo "✗ FAILED"
        echo "$filename -> ERROR: $response" >> "$LOG_FILE"
    fi
done

echo "}" >> "$MAPPING_FILE"

echo ""
echo "============================================"
echo "Upload complete!"
echo "Uploaded: $count images"
echo "Log file: $LOG_FILE"
echo "URL mapping: $MAPPING_FILE"
echo "============================================"
echo ""
echo "Next step: Run the code update script to replace SVG imports with Cloudflare URLs"
