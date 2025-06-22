## 🧪 CI Status

| Job        | Status                                                                 |
|------------|------------------------------------------------------------------------|
| 🧹 Lint     | ![Lint](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=lint)         |
| 🏗️ Build    | ![Build](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=build)        |
| 🧪 Test     | ![Test](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=test)          |
| 🔒 Audit    | ![Audit](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=audit)        |
| 🔍 Slither  | ![Slither](https://github.com/GMoonNeverGiveUp/NeverGiveUp/actions/workflows/ci.yml/badge.svg?branch=main&event=push&job=slither)    |


## Repository Structure

/src # Front-end and app code
/server # Backend API and off-chain logic
/scripts # Utility scripts for automation and deployment
/.github/workflows # CI/CD pipelines

perl
Copiar
Editar

## Environment

Copy `.env.example` → `.env` and fill in credentials before local development.
=======
# NeverGiveUp
Picture this: cutting-edge AI meets the chaotic charm of meme culture in a cosmic setting. That’s NGU.

# 1. Introduction: The Cosmic Vision

## Mission Statement:
Create an interstellar, decentralized meme ecosystem where innovative AI meets blockchain magic. Our platform transforms creativity into on-chain art and cultivates a community of “Galactic Geniuses”—all while using open-source, automated agents to test, iterate, and improve continuously.

## Philosophy:
"A project is not just a collection of code—it’s a living, breathing organism where every commit, every test, and every feedback loop is an opportunity to refine our shared vision." Embrace transparency, agile iteration, and the flavorful interplay of human creativity boosted by advanced AI agents.

## 🛠 Continuous Integration

This project uses GitHub Actions to automate linting, testing, building, and auditing.

CI runs on every push and pull request to `main` or `dev`. Failures will block merges.

## 🛡 Security Static Analysis

This repo integrates **Slither** with GitHub’s native **Code Scanning Alerts**:

- Output format: SARIF (Static Analysis Results Interchange Format)
- Alerts visible in GitHub > Security > Code Scanning
- PRs flagged if new vulnerabilities appear

> 🔁 A full smart contract security scan runs **automatically every Sunday** using Slither, with results sent to GitHub Code Scanning Alerts.
