# MCP (Model Context Protocol) Setup Guide

Complete setup guide for integrating MCP servers with Claude Code for enhanced development workflows.

## 🎯 Overview

This project uses 10 MCP servers to enhance development productivity:

**Core Development Stack:**
1. **Notion MCP** - Documentation and PRD management
2. **GitHub MCP** - Repository and issue management
3. **Linear MCP** - Project tracking and task management
4. **Playwright MCP** - Browser automation and testing
5. **Context7 MCP** - Technical documentation lookup
6. **Slack MCP** - Team notifications and communication
7. **Claude Task Master** - AI-powered task breakdown and project planning

**Production & Analytics Stack:**
8. **Supabase MCP** - Database management and queries
9. **Vercel MCP** - Deployment and infrastructure management
10. **PostHog MCP** - Analytics and product insights

## 🔧 Installation & Configuration

### Prerequisites

- Claude Desktop installed
- Node.js 18+ and npm
- Access to respective service accounts (Notion, GitHub, etc.)

### Step 1: Install MCP Servers

```bash
# Core Development Stack
npm install -g @suekou/mcp-notion-server
npm install -g @modelcontextprotocol/server-github  
npm install -g @zencoderai/slack-mcp-server
npm install -g @playwright/mcp
npm install -g @upstash/context7-mcp
npm install -g mcp-remote
npm install -g task-master-ai

# Production & Analytics Stack
# Supabase MCP - installed via npx (no global install needed)
# Vercel MCP - clone and install locally
mkdir -p ~/mcp-servers
cd ~/mcp-servers
git clone https://github.com/nganiet/mcp-vercel
cd mcp-vercel && npm install
# PostHog MCP - remote server (no install needed)

# Install Playwright browsers
npx playwright install
```

### Step 2: Configure Claude Desktop

Edit your Claude Desktop configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["@suekou/mcp-notion-server"],
      "env": {
        "NOTION_API_TOKEN": "your_notion_token_here"
      }
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token_here"
      }
    },
    "linear": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.linear.app/sse"],
      "env": {
        "LINEAR_API_KEY": "your_linear_token_here"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["@zencoderai/slack-mcp-server"],
      "env": {
        "SLACK_BOT_TOKEN": "your_slack_bot_token_here",
        "SLACK_TEAM_ID": "your_slack_team_id_here"
      }
    },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp"],
      "env": {}
    },
    "context7": {
      "command": "npx",
      "args": ["@upstash/context7-mcp"],
      "env": {}
    },
    "taskmaster": {
      "command": "npx",
      "args": ["task-master-ai"],
      "env": {}
    },
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--read-only",
        "--project-ref=your_supabase_project_ref_here"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "your_supabase_access_token_here"
      }
    },
    "vercel": {
      "command": "node",
      "args": ["/Users/YOUR_USERNAME/mcp-servers/mcp-vercel/index.js"],
      "env": {
        "VERCEL_API_TOKEN": "your_vercel_api_token_here"
      }
    },
    "posthog": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@latest",
        "https://mcp.posthog.com/sse",
        "--header",
        "Authorization:Bearer your_posthog_api_key_here"
      ],
      "env": {}
    }
  }
}
```

### Step 3: Obtain API Tokens

#### Notion API Token
1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "Claude MCP" and select your workspace
4. Copy the "Internal Integration Token" (starts with `ntn_`)
5. Share your database with the integration

#### GitHub Personal Access Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `read:org`, `read:user`
4. Copy the token (starts with `ghp_`)

#### Linear API Key
1. Go to [Linear Settings > API](https://linear.app/settings/api)
2. Click "Create new API key"
3. Copy the key (starts with `lin_api_`)

#### Slack Bot Token
1. Go to [Slack API](https://api.slack.com/apps) and create a new app
2. Under "OAuth & Permissions", add these Bot Token Scopes:
   - `channels:history`
   - `channels:read`
   - `chat:write`
   - `reactions:write`
   - `users:read`
   - `users.profile:read`
3. Install the app to your workspace
4. Copy the "Bot User OAuth Token" (starts with `xoxb-`)
5. Get your Team ID from workspace settings URL or browser console

#### Claude Task Master Setup
Claude Task Master works without API keys when using Claude Code CLI. To set up:
1. Initialize in your project: `task-master init` or `tm init`
2. Create a PRD at `.taskmaster/docs/prd.txt`
3. Configure project settings in `.taskmaster/config.json`
4. The MCP integration allows Task Master to work directly within Claude Desktop

#### Supabase Access Token
1. Go to [Supabase Account Settings](https://app.supabase.com/account/tokens)
2. Click "Generate new token"
3. Name it "Claude MCP Server"
4. Copy the token (starts with `sbp_`)
5. Get your project reference ID from Project Settings > General

#### Vercel API Token
1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Name it "Claude MCP Server"
4. Set expiration (recommend 1 year)
5. Copy the token (starts with `vercel_`)

#### PostHog Personal API Key (Optional)
1. Go to [PostHog Settings](https://app.posthog.com/settings/user-api-keys)
2. Click "Create personal API key"
3. Name it "Claude MCP Server"
4. Copy the key (starts with `phx_`)
5. If you don't have PostHog, remove this MCP from your config

### Step 4: Restart Claude Desktop

After configuration, completely quit and restart Claude Desktop for changes to take effect.

## 🧪 Testing Your Setup

### Verify MCP Server Health

Use Claude Code's built-in MCP management:

```bash
# List configured servers and their status
claude mcp list

# Test individual servers
claude mcp get notion
claude mcp get github
# ... etc
```

### Individual Server Tests

**Notion MCP:**
```
List my Notion databases
```

**GitHub MCP:**
```
Search for React repositories on GitHub
```

**Linear MCP:**
```
Show my Linear teams
```

**Playwright MCP:**
```
Take a screenshot of github.com
```

**Context7 MCP:**
```
Get React documentation about hooks
```

**Slack MCP:**
```
List my Slack channels
```

**Claude Task Master:**
```
Generate tasks from my PRD
```

**Supabase MCP:**
```
List my Supabase tables
```

**Vercel MCP:**
```
List my Vercel projects
```

**PostHog MCP:**
```
Show my PostHog projects
```

## 🚀 Development Workflow

### Recommended Workflow Pipeline

```
Planning → PRD (Notion) → Task Breakdown (Task Master) → 
Enhancement (Context7) → Tracking (Linear) → Development (GitHub) → 
Testing (Playwright) → Deployment (Vercel) → Database (Supabase) → 
Analytics (PostHog) → Notifications (Slack)
```

### Example Usage

1. **Planning Phase**: Discuss requirements with Claude
2. **Documentation**: Create PRD in Notion database
3. **Task Generation**: Use Task Master to break down PRD into actionable tasks
4. **Technical Research**: Use Context7 for implementation details
5. **Task Tracking**: Create Linear issues for development tasks
6. **Development**: Manage code via GitHub MCP
7. **Testing**: Use Playwright for automated browser testing
8. **Deployment**: Deploy via Vercel MCP
9. **Database Management**: Query and manage data via Supabase MCP
10. **Analytics**: Monitor user behavior via PostHog MCP
11. **Communication**: Send updates via Slack MCP

## 🔧 Troubleshooting

### Common Issues

**MCP Server Not Connecting:**
- Verify API tokens are correct and have proper permissions
- Check Claude Desktop config JSON syntax
- Restart Claude Desktop after config changes
- Check server-specific logs

**Token Authentication Errors:**
- Ensure tokens haven't expired
- Verify required scopes/permissions are granted
- Check token format (some services have specific prefixes)

**Playwright Browser Issues:**
- Run `npx playwright install` to download browsers
- Ensure sufficient disk space for browser binaries

### Getting Help

1. Check Claude Desktop logs for error details
2. Verify MCP server documentation for specific requirements
3. Test servers individually before full workflow
4. Ensure all dependencies are properly installed

## 📚 Additional Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Claude Desktop MCP Guide](https://docs.anthropic.com/en/docs/build-with-claude/computer-use#model-context-protocol-mcp)
- [Official MCP Servers Repository](https://github.com/modelcontextprotocol/servers)

## 🔒 Security Notes

- Store API tokens securely (use environment variables in production)
- Regularly rotate API tokens
- Grant minimal required permissions for each service
- Never commit tokens to version control
- Consider using a dedicated workspace/organization for MCP integrations