#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.HOME, '.claude.json');
const notionToken = 'ntn_i5526901923aKsgrtF0VvL7yLcD0s7Haic3ooYA7xujeVr';

try {
  console.log('Reading Claude configuration...');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Update Notion MCP server with API key
  if (config.mcpServers && config.mcpServers['notion-official']) {
    config.mcpServers['notion-official'].env = {
      NOTION_API_KEY: notionToken
    };
    console.log('✓ Updated Notion MCP server configuration');
  } else {
    console.log('✗ Notion MCP server not found in configuration');
    process.exit(1);
  }
  
  // Write updated configuration
  console.log('Writing updated configuration...');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('✓ Configuration updated successfully!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Restart Claude Code completely (⌘+Q then reopen)');
  console.log('2. Try: @notion-official: in Claude Code');
  console.log('3. You should see your Notion workspaces!');
  
} catch (error) {
  console.error('Error updating configuration:', error.message);
  process.exit(1);
}