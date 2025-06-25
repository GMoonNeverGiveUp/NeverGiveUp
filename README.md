# galactic-genius

[![Coverage (Node 18.x)](https://codecov.io/gh/GMoonNeverGiveUp/galactic-genius/branch/main/graph/badge.svg?flag=unit-18.x)](https://app.codecov.io/gh/GMoonNeverGiveUp/galactic-genius)


## 🧪 CI Status

| Job         | Status                                                                 |
|-------------|------------------------------------------------------------------------|
| 🧹 Lint      | ![Lint](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=lint)         |
| 🏗️ Build     | ![Build](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=build)        |
| 🧪 Unit Test | ![Test](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=test)          |
| 🔐 Audit     | ![Audit](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=audit)        |
| 🔍 Slither   | ![Slither](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=slither)    |

---

## 🛠 Continuous Integration

> This project uses GitHub Actions to automate linting, testing, building, auditing, and contract static analysis.

CI runs on every push and pull request to `main` or `dev`. Failures will block merges.

All coverage is isolated from test matrix runs and available as artifacts or visual HTML reports in the CI tab.

---

## 📁 Repository Structure

| Path                   | Description                                        |
|------------------------|----------------------------------------------------|
| `/src`                | Front-end (Astro + React components)               |
| `/server`             | Reputation engine + off-chain logic                |
| `/scripts`            | Automation scripts (AI scoring, scraping, deploy)  |
| `/.github/workflows/` | CI/CD + security + static analysis workflows       |
| `package.json`        | Project-wide scripts + dependency coordination     |
| `tsconfig.json`       | Shared TypeScript config for all tools             |
| `pnpm-workspace.yaml` | Monorepo package layout                            |

---

## 🌌 Project Overview

Create, mint, and interact with memes using:

- 🤖 **AI Prompt-to-Meme Generation**
- 🖼 **Web-Scraping Template Fetcher**
- 🧠 **Computer Vision Embedding Matching**
- 🌐 **Hosted on IPFS via Fleek**
- 🔐 **Mint + Vote Smart Contract (`MemeContest`)**
- 📊 **Off-chain Prompt Complexity Evaluation**
- 🧬 **Reputation Engine + Voting + SBT-ready**

---

## 🎯 Mission Statement

Create an interstellar, decentralized meme ecosystem where innovative AI meets blockchain magic. The platform transforms creativity into on-chain art and cultivates a community of “Galactic Geniuses,” supported by open-source agents that test, iterate, and improve everything.

> "A project is not just a collection of code—it’s a living, breathing organism where every commit, every test, and every feedback loop is an opportunity to refine our shared vision."

---

## 📦 Environment Setup

```bash
cp .env.example .env
# Then fill in your keys:
# GROQ_API_KEY=...
# HUGGING_FACE_API_KEY=...
# MEME_CONTEST_ADDRESS=...
