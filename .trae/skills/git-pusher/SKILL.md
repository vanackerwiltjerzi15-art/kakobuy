---
name: "git-pusher"
description: "Automatically pushes code changes after every modification. MUST be invoked IMMEDIATELY after any file edit, CSS change, or config update. Translates changes to English commit messages and executes git add/commit/push."
---

# Git Pusher

This skill automatically pushes code changes after modifications.

## Auto-Trigger Rule

**CRITICAL**: After ANY file modification (CSS, config, markdown, etc.), invoke this skill IMMEDIATELY without waiting for user to ask.

## Usage

When invoked:

1. **Analyze changes**: Determine what was modified
2. **Generate English commit message**: Use format "Fix:", "Add:", "Update:", "Remove:", "Refactor:"
3. **Execute git commands**:
   ```bash
   git add .
   git commit -m "[English commit message]"
   git push origin master
   ```

## Commit Message Format

- Use present tense imperative
- Keep concise (under 50 characters)
- Examples:
  - "Fix: enlarge homepage hero image on desktop"
  - "Add: replace site icon with Kakobuy logo"
  - "Update: navigation menu styles"

## Error Handling

- If git command fails: inform user of the issue
- Default branch: `master`
- Remote: `origin`
