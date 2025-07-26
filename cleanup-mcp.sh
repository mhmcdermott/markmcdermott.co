#!/bin/bash

# MCP References Cleanup Script for markmcdermott.co
# This script removes development artifacts and MCP references to maintain a professional repository

echo "🧹 Starting MCP cleanup for markmcdermott.co..."
echo "This will remove development documentation files that contain MCP references."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the markmcdermott.co repository root"
    exit 1
fi

echo "📋 Files to be removed:"
echo "  - COMPLETE_MCP_WORKFLOW.md"
echo "  - MCP_AUTHENTICATION_GUIDE.md"
echo "  - MANUAL_MCP_AUTH.md"
echo "  - RETROSPECTIVE_TASKS.md"
echo "  - NEW_CLAUDE_WINDOW_INSTRUCTIONS.md"
echo "  - PROJECT_PRD.md"
echo "  - mcp-workflow-complete.sh"
echo "  - setup-mcp-workflow.sh"
echo "  - update-notion-mcp.js"
echo "  - .claude-project-workflow.json"
echo "  - cleanup-mcp.sh (this script)"
echo "  - CLEANUP_MCP_REFERENCES.md"
echo ""

read -p "Continue with cleanup? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cleanup cancelled"
    exit 1
fi

echo "🗑️  Removing MCP-related files..."

# Remove MCP documentation files
files_removed=0

for file in \
    "COMPLETE_MCP_WORKFLOW.md" \
    "MCP_AUTHENTICATION_GUIDE.md" \
    "MANUAL_MCP_AUTH.md" \
    "RETROSPECTIVE_TASKS.md" \
    "NEW_CLAUDE_WINDOW_INSTRUCTIONS.md" \
    "PROJECT_PRD.md" \
    "mcp-workflow-complete.sh" \
    "setup-mcp-workflow.sh" \
    "update-notion-mcp.js" \
    ".claude-project-workflow.json" \
    "cleanup-mcp.sh" \
    "CLEANUP_MCP_REFERENCES.md"
do
    if [ -f "$file" ]; then
        rm "$file"
        echo "  ✅ Removed: $file"
        ((files_removed++))
    else
        echo "  ⚠️  Not found: $file"
    fi
done

echo ""
echo "🎉 Cleanup complete!"
echo "📊 Removed $files_removed files"
echo ""
echo "📝 Next steps:"
echo "  1. Review the changes: git status"
echo "  2. Commit the cleanup: git add . && git commit -m 'Clean up MCP development artifacts'"
echo "  3. Push changes: git push"
echo ""
echo "✅ Your repository now presents as a clean, professional personal website project"
echo "🌐 No functionality has been affected - your website will continue to work perfectly"