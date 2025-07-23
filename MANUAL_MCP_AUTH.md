# Manual MCP Authentication Setup

Since `/mcp auth` isn't working, we can configure authentication manually.

## Step 1: Locate Configuration File

The MCP servers are configured in: `/Users/markmcdermott/.claude.json`

## Step 2: Add Environment Variables

You need to add your API tokens to the `"env"` section of each server.

### Current Configuration:
```json
"notion-official": {
  "type": "stdio",
  "command": "npx",
  "args": ["@makenotion/notion-mcp-server"],
  "env": {}
}
```

### Updated Configuration:
```json
"notion-official": {
  "type": "stdio", 
  "command": "npx",
  "args": ["@makenotion/notion-mcp-server"],
  "env": {
    "NOTION_API_KEY": "ntn_i5526901923aKsgrtF0VvL7yLcD0s7Haic3ooYA7xujeVr"
  }
}
```

## Step 3: Complete Configuration

Here's what all your MCP servers should look like with authentication:

```json
"mcpServers": {
  "notion-official": {
    "type": "stdio",
    "command": "npx", 
    "args": ["@makenotion/notion-mcp-server"],
    "env": {
      "NOTION_API_KEY": "ntn_i5526901923aKsgrtF0VvL7yLcD0s7Haic3ooYA7xujeVr"
    }
  },
  "github": {
    "type": "stdio",
    "command": "npx",
    "args": ["@modelcontextprotocol/server-github"], 
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN_HERE"
    }
  },
  "linear": {
    "type": "stdio",
    "command": "npx",
    "args": ["mcp-remote", "https://mcp.linear.app/sse"],
    "env": {
      "LINEAR_API_KEY": "YOUR_LINEAR_API_KEY_HERE"
    }
  },
  "slack": {
    "type": "stdio", 
    "command": "npx",
    "args": ["@modelcontextprotocol/server-slack"],
    "env": {
      "SLACK_BOT_TOKEN": "YOUR_SLACK_BOT_TOKEN_HERE"
    }
  }
}
```

## Step 4: Get Your API Keys

1. **Notion**: ✅ You already have: `ntn_i5526901923aKsgrtF0VvL7yLcD0s7Haic3ooYA7xujeVr`
2. **GitHub**: Go to [github.com/settings/tokens](https://github.com/settings/tokens)
3. **Linear**: Go to [linear.app/settings/api](https://linear.app/settings/api) 
4. **Slack**: Go to [api.slack.com/apps](https://api.slack.com/apps)

## Step 5: Restart Claude Code

After making these changes, restart Claude Code completely to pick up the new configuration.

**WARNING**: Be very careful editing the .claude.json file as it's large and contains other important settings. Make a backup first!