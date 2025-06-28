#!/bin/bash
set -e

CID="QmXpx5wgZ8K7CBVtq51VB7Eg6znutyyHtEm3kpBn9EVfzP"
TARBALL="eslint-config-nebulae.tgz"

echo "📦 Downloading eslint-config-nebulae from IPFS..."
curl -L https://ipfs.io/ipfs/$CID -o $TARBALL

echo "📂 Extracting..."
mkdir -p ipfs-eslint && tar -xzf $TARBALL -C ipfs-eslint

echo "📥 Installing config and peers..."
pnpm add -D ./ipfs-eslint/package
pnpm add -D eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-import \
  eslint-plugin-astro \
  eslint-plugin-jsonc \
  jsonc-eslint-parser \
  eslint-config-prettier

echo "✅ Done! You can now lint with:"
echo "pnpm exec eslint . --config eslint.config.cjs"
