#!/bin/bash

echo "Setting up MCP Workflow for Claude Code Projects"
echo "================================================"

# Install official MCP servers
echo "1. Installing Notion MCP..."
claude mcp add notion npx -y @modelcontextprotocol/server-notion

echo "2. Installing GitHub MCP..."
claude mcp add github npx -y @modelcontextprotocol/server-github

echo "3. Installing Slack MCP..."
claude mcp add slack npx -y @modelcontextprotocol/server-slack

# Note: The following servers may need custom installation paths
echo ""
echo "Manual setup required for:"
echo "- Taskmaster MCP (for task generation)"
echo "- Context7 MCP (for task enhancement)"
echo "- Linear MCP (for work tracking)"
echo "- Playwright MCP (for testing)"
echo "- Background agents"

echo ""
echo "After installation, authenticate each service:"
echo "  /mcp auth notion"
echo "  /mcp auth github"
echo "  /mcp auth slack"

echo ""
echo "MCP workflow setup script completed!"