#!/bin/bash

echo "🚀 Complete MCP Workflow Setup for Claude Code Projects"
echo "======================================================="

# Install all MCP servers for the workflow
echo ""
echo "📝 1. Installing Notion MCP (PRD Management)..."
claude mcp add notion-official npx @makenotion/notion-mcp-server

echo "🎯 2. Installing Taskmaster MCP (Task Generation)..."
claude mcp add taskmaster-todoist npx @mingolladaniele/todoist-taskmaster-mcp

echo "🔍 3. Installing Context7 MCP (Task Enhancement)..."
claude mcp add context7 npx @upstash/context7-mcp@latest

echo "📊 4. Installing Linear MCP (Work Tracking)..."
claude mcp add linear npx mcp-remote https://mcp.linear.app/sse

echo "🎭 5. Installing Playwright MCP (Testing)..."
claude mcp add playwright npx @executeautomation/mcp-playwright

echo "🐙 6. Installing GitHub MCP (Version Control)..."
claude mcp add github npx @modelcontextprotocol/server-github

echo "💬 7. Installing Slack MCP (Notifications)..."
claude mcp add slack npx @modelcontextprotocol/server-slack

echo ""
echo "✅ INSTALLATION COMPLETE"
echo ""
echo "📋 Status Check:"
claude mcp list

echo ""
echo "🔑 AUTHENTICATION REQUIRED:"
echo "Use '/mcp' command in Claude Code to authenticate:"
echo ""
echo "1. 📝 Notion: Get API key from notion.so/profile/integrations"
echo "2. 🎯 Todoist: Get API token from todoist.com/prefs/integrations"
echo "3. 🔍 Context7: No auth needed (uses Upstash)"
echo "4. 📊 Linear: Get API key from linear.app/settings/api"
echo "5. 🎭 Playwright: No auth needed"
echo "6. 🐙 GitHub: Personal access token with repo permissions"
echo "7. 💬 Slack: Workspace bot token"

echo ""
echo "🔄 WORKFLOW READY:"
echo "1. Plan with Claude → 2. Generate PRD (Notion) → 3. Generate Tasks (Taskmaster)"
echo "4. Enhance Tasks (Context7) → 5. Track Work (Linear) → 6. Test (Playwright)"
echo "7. Version Control (GitHub) → 8. Notify (Slack)"

echo ""
echo "🎉 MCP Workflow Setup Complete!"