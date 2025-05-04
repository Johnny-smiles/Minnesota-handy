#!/bin/bash

# Usage: ./create-site.sh new-site-name

TEMPLATE_REPO="https://github.com/your-org/minnesota-handy-template.git"
TARGET_NAME=$1

if [ -z "$TARGET_NAME" ]; then
  echo "Usage: ./create-site.sh new-site-name"
  exit 1
fi

# Clone the base template
git clone "$TEMPLATE_REPO" "$TARGET_NAME"
cd "$TARGET_NAME" || exit

# Reset git history
rm -rf .git
git init
git add .
git commit -m "Initial commit for $TARGET_NAME"

# Prompt for custom config updates
echo "✅ Cloned project into $TARGET_NAME"
echo "👉 Now open site.config.ts and update business details."
