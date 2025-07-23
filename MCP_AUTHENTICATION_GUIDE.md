# MCP Authentication Guide

## Current Status

✅ **Connected Servers:**
- GitHub MCP - Ready to use
- Linear MCP - Official server connected
- Context7 MCP - Connected

⚠️ **Need Authentication:**
- Notion MCP - Requires API key
- Slack MCP - Needs workspace token
- Taskmaster Todoist MCP - Requires Todoist token
- Playwright MCP - May need browser setup

## Step-by-Step Authentication

### 1. 📝 Notion MCP Authentication

**Steps:**
1. Go to [notion.so/profile/integrations](https://notion.so/profile/integrations)
2. Click "New integration"
3. Give it a name: "Claude Code MCP"
4. Select your workspace
5. Copy the "Internal Integration Secret"
6. In Claude Code, use: `/mcp auth notion-official`
7. Paste your token when prompted

**Required for:**
- Creating PRDs in your Geek Projects database
- Reading existing pages and databases
- Managing project documentation

### 2. 📊 Linear MCP Authentication

**Steps:**
1. Go to [linear.app/settings/api](https://linear.app/settings/api)
2. Click "Create API key"
3. Name: "Claude Code MCP"
4. Copy the API key
5. In Claude Code, use: `/mcp auth linear`
6. Paste your API key when prompted

**Required for:**
- Creating and tracking issues
- Managing project workflows
- Automated task creation from PRDs

### 3. 🎯 Taskmaster Todoist MCP Authentication

**Steps:**
1. Go to [todoist.com/prefs/integrations](https://todoist.com/prefs/integrations)
2. Scroll to "API token"
3. Copy your token
4. In Claude Code, use: `/mcp auth taskmaster-todoist`
5. Paste your token when prompted

**Required for:**
- Task breakdown and management
- Personal task tracking
- Integration with project workflows

### 4. 🐙 GitHub MCP Authentication

**Steps:**
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `workflow`, `write:packages`
4. Copy the token
5. In Claude Code, use: `/mcp auth github`
6. Paste your token when prompted

**Required for:**
- Repository operations
- Branch creation and management
- Automated commits and PRs

### 5. 💬 Slack MCP Authentication

**Steps:**
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Name: "Claude Code MCP", select workspace
4. Go to "OAuth & Permissions"
5. Add Bot Token Scopes:
   - `chat:write`
   - `channels:read`
   - `users:read`
6. Install app to workspace
7. Copy "Bot User OAuth Token"
8. In Claude Code, use: `/mcp auth slack`
9. Paste your token when prompted

**Required for:**
- Progress notifications
- Team updates
- Error alerts

### 6. 🔍 Context7 MCP

**No authentication required** - Uses Upstash backend
- Provides up-to-date documentation
- Enhances tasks with current info
- Works out of the box

### 7. 🎭 Playwright MCP

**May require browser setup:**
- Should work out of the box
- If issues occur, may need to install browsers:
  ```bash
  npx playwright install
  ```

## Testing Authentication

After authentication, test each server:

```bash
# Check all server status
claude mcp list

# Test individual servers (use these in Claude Code)
@notion-official: # Should show your workspaces
@linear: # Should show your teams
@taskmaster-todoist: # Should show your projects
@github: # Should show your repositories
@slack: # Should show your channels
@context7: # Ready to enhance tasks
@playwright: # Ready for browser automation
```

## Workflow Testing Commands

Once authenticated, test the complete workflow:

1. **Plan**: "I want to add a user profile feature"
2. **PRD**: `@notion-official:create-page "Geek Projects" "User Profile Feature PRD"`
3. **Tasks**: `@taskmaster-todoist:create-project "User Profile Tasks"`
4. **Enhance**: `@context7:enhance-with-docs "React user profiles"`
5. **Track**: `@linear:create-issues "User Profile" 5`
6. **Test**: `@playwright:test-user-flow "/profile"`
7. **Version**: `@github:create-branch "feature/user-profile"`
8. **Notify**: `@slack:post "#dev-updates" "Started user profile feature"`

## Troubleshooting

**Common Issues:**
- **"Failed to connect"**: Server needs authentication or installation
- **"Invalid token"**: Check token permissions and expiry
- **"Rate limited"**: API limits reached, wait before retrying

**Getting Help:**
- Use `/mcp help` in Claude Code
- Check individual server documentation
- Verify API keys haven't expired

## Security Notes

- Store API keys securely
- Use minimal required permissions
- Regularly rotate tokens
- Never commit tokens to git repositories