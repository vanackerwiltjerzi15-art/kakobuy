---
name: "git-pusher"
description: "Handles git push operations with English commit messages. Invoke when user wants to push code changes to the remote repository."
---

# Git Pusher

This skill handles git push operations automatically.

## Usage

When invoked:

1. **Collect change description**: Ask user what changes were made (in any language)
2. **Translate to English**: Convert the description to a concise English commit message
3. **Execute git commands**:
   ```bash
   git add .
   git commit -m "[English commit message]"
   git push origin master
   ```

## Commit Message Format

- Use present tense imperative: "Fix:", "Add:", "Update:", "Remove:", "Refactor:"
- Keep it concise (under 50 characters when possible)
- Examples:
  - "Fix: enlarge homepage hero image on desktop"
  - "Add: new platform comparison page"
  - "Update: navigation menu styles"

## Error Handling

- If `git add` fails: check for untracked files
- If `git commit` fails: check if there are staged changes
- If `git push` fails: check authentication or network issues

## Branch

Default branch: `master`
Remote: `origin`
