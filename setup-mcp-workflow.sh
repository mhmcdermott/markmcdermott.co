#!/bin/bash

echo "Setting up MCP Workflow for Claude Code Projects"
echo "================================================"

# Install official MCP servers
echo "1. Installing Official Notion MCP..."
claude mcp add notion-official npx @makenotion/notion-mcp-server

echo "2. Installing GitHub MCP..."
claude mcp add github npx @modelcontextprotocol/server-github

echo "3. Installing Slack MCP..."
claude mcp add slack npx @modelcontextprotocol/server-slack

# Note: The following servers may need custom installation paths
echo ""
echo "Manual setup required for:"
echo "- Taskmaster MCP (for task generation)"
echo "- Context7 MCP (for task enhancement)"
echo "- Linear MCP (for work tracking)"
echo "- Playwright MCP (for testing)"
echo "- Background agents"

echo ""
echo "After installation, authenticate each service in Claude Code:"
echo "  Use /mcp command in Claude Code to set up authentication"
echo "  You'll need:"
echo "    - Notion API key from notion.so/profile/integrations"
echo "    - GitHub personal access token"
echo "    - Slack workspace permissions"

echo ""
echo "MCP workflow setup script completed!"