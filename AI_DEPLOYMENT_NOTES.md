# AI Deployment Notes & Secrets

**WARNING: This file contains secrets. Ensure it is added to .gitignore before committing.**

## Vercel Token
**Token:** `PvFJaCVjjqOiShWwKiY0egx9`
**User Status:** User confirms this token is 100% correct.

## Known Issues
1. **Environment Variable Failure**: Previous attempts to use `VERCEL_TOKEN` environment variable in PowerShell and CMD failed with "The specified token is not valid".
2. **CLI Authentication**: `vercel login` interactive mode is difficult for AI agents.
3. **Goal**: Establishing a reliable CLI-only deployment method using the token.

## Troubleshooting Log
- **Date:** 2025-12-08
- **Attempt 1:** `export VERCEL_TOKEN` (Bash) - Failed.
- **Attempt 2:** `set VERCEL_TOKEN` (CMD) - Failed.
- **Attempt 3:** `$env:VERCEL_TOKEN` (PowerShell) - Failed.
- **Hypothesis:** The environment variable might not be picked up correctly by the Vercel CLI in this specific shell environment, or the token scope is restricted.
- **Next Step:** Try passing the token directly via the `--token` flag.
