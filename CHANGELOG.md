# 📦 Changelog

## [v0.1.0] – 2025-06-22
🎉 Initial modular CI release: Lint, Build, Test, Audit, Slither

### ✨ Added
- Modular GitHub Actions workflows:
  - `ci.yml` for lint, build, test
  - `audit.yml` for weekly + push-based `pnpm audit` scans
  - `slither.yml` for Solidity smart contract SARIF static analysis
- Slither security scan results now visible under **GitHub Code Scanning Alerts**
- Automatic GitHub Issue creation for `pnpm audit` vulnerabilities

### 🛠️ Changed
- Removed legacy `galactic-genius` ghost folder from workspace tracking
- Refined `slither.yml` structure and final commit for production-ready SARIF upload

### 🧹 Clean Up
- Removed empty commits and re-synced local state with remote `origin/main`
- Forced a clean commit graph with reset/recommit cycle

---

