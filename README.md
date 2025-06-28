# 🌌 Galactic Genius — Interstellar Meme Platform

[![Coverage (Node 18.x)](https://codecov.io/gh/GMoonNeverGiveUp/galactic-genius/branch/main/graph/badge.svg?flag=unit-18.x)](https://app.codecov.io/gh/GMoonNeverGiveUp/galactic-genius)

> Create. Mint. Vote. Earn Reputation. Powered by AI. Secured by Chain. Designed for Galactic Geniuses.

---

## 🧪 CI Status

| Job         | Status                                                                 |
|-------------|------------------------------------------------------------------------|
| 🧹 Lint      | ![Lint](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=lint)         |
| 🏗️ Build     | ![Build](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=build)        |
| 🧪 Unit Test | ![Test](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=test)          |
| 🔐 Audit     | ![Audit](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=audit)        |
| 🔍 Slither   | ![Slither](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=slither)    |

---

## 🚀 Project Overview

Galactic Genius is a decentralized meme engine blending AI, computer vision, web3 contracts, and reputation scoring into a seamless creative experience:

- 🤖 **AI Prompt-to-Meme Generator**
- 🖼️ **Meme Template Scraper + Matcher**
- 🧠 **Vision Embedding Search**
- 🗳 **Smart Contract for Submissions + Voting**
- 📊 **Prompt Complexity → Reputation Engine**
- 🧬 **Minted NFTs + SBT-based Achievements**
- 🌐 **Hosted on IPFS (via Fleek)**
- 🔧 **Open-Source Agents to Automate + Score**

---

## 🛠️ Monorepo Layout

| Path                   | Description                                        |
|------------------------|----------------------------------------------------|
| `/src`                | Frontend (Astro + React)                           |
| `/server`             | Reputation + off-chain logic (JSON storage, APIs) |
| `/scripts`            | Workers, scoring engines, AI/scraping pipelines   |
| `/.github/workflows/` | CI/CD, audit, security, and type enforcement      |
| `pnpm-workspace.yaml` | Monorepo package layout                            |

---

## 📦 Environment Setup

```bash
pnpm install
cp .env.example .env
# Then fill in:
# GROQ_API_KEY=...
# HUGGING_FACE_API_KEY=...
# MEME_CONTEST_ADDRESS=...
```

Run locally:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

---

## 🔐 Smart Contract Deployment

Use the existing `scripts/deploy.js` to deploy `MemeContest.sol`.

Update `.env` with the deployed address:

```env
MEME_CONTEST_ADDRESS=0x...
```

---

## 🧹 Linting with IPFS (No Registry Required)

You can consume the ESLint config via IPFS **without any npm/registry dependency**:

```bash
curl -L https://ipfs.io/ipfs/QmUDASMgjNobfGELY1NaDTyrQ1U8FZvxsE4EBHPyDNBiCY -o eslint-config-nebulae.tgz
mkdir -p ipfs-eslint && tar -xzf eslint-config-nebulae.tgz -C ipfs-eslint
pnpm add -D ./ipfs-eslint/package
```

Then in `eslint.config.cjs`:

```js
const config = require('./ipfs-eslint/package/index.cjs');
module.exports = config;
```

Run:

```bash
pnpm exec eslint . --config eslint.config.cjs
```


---

### ✅ 2. Update `install-eslint-ipfs.sh`

```bash
#!/bin/bash
set -e

CID="QmUDASMgjNobfGELY1NaDTyrQ1U8FZvxsE4EBHPyDNBiCY"
TARBALL="eslint-config-nebulae-1.0.2.tgz"

echo "📦 Downloading eslint-config-nebulae@1.0.2 from IPFS..."
curl -L "https://ipfs.io/ipfs/$CID" -o $TARBALL

echo "📂 Extracting..."
mkdir -p ipfs-eslint && tar -xzf $TARBALL -C ipfs-eslint

echo "📥 Installing config + peer dependencies..."
pnpm add -D ./ipfs-eslint/package
pnpm add -D eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-import \
  eslint-plugin-astro \
  eslint-plugin-jsonc \
  jsonc-eslint-parser \
  eslint-config-prettier

echo "✅ ESLint IPFS setup complete!"
```


---

## 🌍 Decentralized Tech Stack

| Component       | Technology                  |
| --------------- | --------------------------- |
| Frontend        | Astro + React               |
| AI Captioning   | Groq + Hugging Face APIs    |
| Image Embedding | TensorFlow\.js + BLIP       |
| Smart Contracts | Solidity (MemeContest)      |
| IPFS Hosting    | Fleek + Pinata              |
| Storage         | IPFS JSON blobs + Ethereum  |
| Automation      | Scripts with scoring agents |
| CI/CD           | GitHub Actions              |

---

## 🌌 Vision

> A meme isn’t just content — it’s proof of creativity.
> Galactic Genius turns every meme into a token of skill, letting AI-backed creators submit, mint, and vote inside a decentralized cultural engine.

---

## 🤝 Contributing

Want to contribute AI models, new meme processors, or governance modules?
Fork the repo, open a pull request, or DM [@GMoonNeverGiveUp](https://github.com/GMoonNeverGiveUp) on GitHub.

---

## 📜 License

MIT © 2025 Galactic Genius Core Team

```

---

Would you like me to auto-commit this as a new `README.md` in your monorepo or deliver it via file export?
```
