# Instructions for New Claude Code Window

## Project Context
I'm Mark McDermott, working on markmcdermott.co - a Next.js personal website with Notion CMS. We just completed a comprehensive MCP workflow setup that I want to replicate across all my coding projects for consistency and quality.

## What We Just Accomplished
1. ✅ **Complete security audit** - Fixed vulnerabilities, added security headers, secured APIs
2. ✅ **MCP workflow setup** - Installed 7 MCP servers for automated development pipeline
3. ✅ **Notion MCP authentication** - Configured with token: `ntn_i5526901923aKsgrtF0VvL7yLcD0s7Haic3ooYA7xujeVr`
4. ✅ **Documentation** - Created complete guides for replication

## Current Task Status
- **COMPLETED**: Security audit, MCP server installation, Notion authentication
- **PENDING**: Test complete MCP workflow end-to-end
- **NEXT**: Authenticate remaining MCP servers (GitHub, Linear, Slack)

## Key Files Created (Reference These)
1. `COMPLETE_MCP_WORKFLOW.md` - Full workflow demonstration
2. `MCP_AUTHENTICATION_GUIDE.md` - Step-by-step auth instructions  
3. `MANUAL_MCP_AUTH.md` - Manual configuration method
4. `mcp-workflow-complete.sh` - Complete setup script
5. `update-notion-mcp.js` - Authentication script template

## Immediate Next Steps
1. **Test Notion MCP**: Try `@notion-official:` to verify it shows Geek Projects database
2. **Authenticate remaining servers**:
   - GitHub: Personal access token with repo permissions
   - Linear: API key from linear.app/settings/api  
   - Slack: Bot token from api.slack.com/apps
3. **Test complete workflow**: Run end-to-end automation with a small feature

## MCP Workflow Pipeline (The Goal)
```
Planning → PRD (Notion) → Tasks (Taskmaster) → Enhancement (Context7) → 
Tracking (Linear) → Testing (Playwright) → Version Control (GitHub) → 
Notifications (Slack)
```

## Standards for All Projects
- **Security first**: Always audit before deployment
- **MCP automation**: Use the complete 7-server pipeline
- **Documentation**: Maintain guides for replication
- **Consistency**: Same workflow, tools, and patterns across projects

## Key Commands to Remember
```bash
# Check MCP status
claude mcp list

# Test servers in Claude Code
@notion-official:
@github:
@linear: 
@context7:

# Authentication scripts location
./update-notion-mcp.js (template for other servers)
```

## Project Files Structure
- Security documentation: `PROJECT_PRD.md`, `RETROSPECTIVE_TASKS.md`
- MCP setup: `mcp-workflow-complete.sh`, authentication guides
- Site: Fully secured Next.js with Notion CMS, ready for Vercel deployment

## My Development Philosophy
I want **automated, consistent, high-quality development workflows** that can scale across all my projects. This MCP setup is the foundation for achieving that goal.

## What I Need From You
1. **Verify** Notion MCP is working properly
2. **Complete** the remaining MCP authentications using the patterns we established
3. **Test** the full workflow with a real feature
4. **Document** any improvements or issues for future projects
5. **Maintain** the same high standards of security and automation

Remember: This isn't just about this one project - it's about creating a **replicable, scalable development workflow** for consistency and quality across all my coding work.