# Personal Website - Dependency Management Strategy

## Project: Mark McDermott Personal Website
**Type**: Tier 1 Simple Site
**Last Updated**: January 2025
**Strategy Version**: 1.0

## Core Principles

### Conservative Dependency Approach
- **Pin critical dependencies** to stable versions
- **Avoid beta/pre-release** versions in production
- **Security patches only** for automated updates
- **Manual review required** for framework updates

## Current Dependency Pinning

### Critical Dependencies (Pinned)
```json
{
  "react": "19.1.1",
  "react-dom": "19.1.1", 
  "tailwindcss": "3.4.17",
  "next": "15.3.2",
  "typescript": "^5.2.2"
}
```

**Reasoning**: These versions are tested and stable. This is the exact configuration that resolved the Tailwind CSS v4 beta issues discovered in July 2025.

### Personal Website Specific Dependencies
```json
{
  "@notionhq/client": "^4.0.1",
  "resend": "^4.5.1",
  "next-themes": "^0.2.0"
}
```

**Reasoning**: Blog functionality (Notion), contact form (Resend), and theme switching are core features.

## Known Problematic Dependencies

### Tailwind CSS v4 - CRITICAL LESSON LEARNED
- **Status**: Currently in beta
- **Issue**: Breaking changes caused complete build failures in July 2025
- **Symptoms**: Module resolution errors, compilation failures
- **Action**: MUST stay on v3.x until v4 reaches stable release
- **Monitor**: Track v4 stable release announcements
- **Never Again**: This exact issue led to the creation of this dependency strategy

### Historical Issues Resolved
- **July 2025**: Tailwind CSS v4 beta update caused:
  - Build failures with module resolution errors
  - Required emergency rollback to v3.4.17
  - Led to systematic dependency management implementation
  - Result: Conservative pinning strategy now prevents this entirely

## Update Testing Procedures

### Before Any Update
1. **Create feature branch** for dependency updates
2. **Clear caches**: `rm -rf .next && rm -rf node_modules`
3. **Fresh install**: `npm install`
4. **Test core functionality**:
   - All pages load correctly
   - Blog posts display properly
   - Contact form works
   - Theme switching functions
   - SEO elements render
5. **Run build process** and verify success
6. **Check TypeScript compilation**
7. **Run Lighthouse audit** for performance impact

### Personal Website Testing Checklist
- [ ] Homepage loads without errors
- [ ] Blog posts display correctly with pagination
- [ ] Contact form submits successfully
- [ ] Dark/light mode toggle works
- [ ] All navigation links function
- [ ] SEO meta tags render properly
- [ ] Build completes successfully
- [ ] TypeScript compiles without errors
- [ ] Lighthouse scores remain 90+
- [ ] No console errors or warnings

## Automation Configuration

### Dependabot Setup
- **Schedule**: Weekly security updates only
- **Ignores**: Major/minor updates for critical dependencies
- **Special attention**: Notion API client and blog-related deps
- **Auto-merge**: Only patch-level security fixes

### CI/CD Pipeline
- **Automated testing** of all dependency updates
- **Cache clearing** built into build process
- **Personal website functionality tests**
- **Performance regression** detection
- **Automatic rollback** on failure

## Rollback Procedures

### If Update Causes Issues
1. **Revert package.json** to last known good state
2. **Clear all caches**: `.next`, `node_modules`
3. **Fresh install** with reverted versions
4. **Test core functionality** to ensure stability
5. **Document issue** in this file
6. **Update ignore list** in Dependabot config

### Emergency Rollback (Tailwind CSS v4 Experience)
```bash
# Commands that saved the day in July 2025
git checkout HEAD~1 -- package.json package-lock.json
rm -rf .next node_modules
npm install
npm run build
# Test that blog and contact form work
```

## Lessons Learned

### Build Cache Issues
- **Problem**: Module resolution errors after updates
- **Solution**: Always clear `.next` cache first
- **Prevention**: Automated cache clearing in CI/CD

### Tailwind CSS v4 Beta Disaster (July 2025)
- **Problem**: Auto-update to v4 beta broke entire build process
- **Root Cause**: Beta version had breaking changes incompatible with Next.js
- **Solution**: Emergency rollback to v3.4.17 + conservative pinning
- **Prevention**: Explicit ignore rules for major Tailwind updates
- **Impact**: Led to creation of this entire dependency management system

### Performance Regression
- **Problem**: Some updates impacted Lighthouse scores
- **Solution**: Performance testing in CI/CD pipeline
- **Prevention**: Automated performance regression detection

## Personal Website Monitoring

### Weekly Reviews
- [ ] Check Dependabot PRs for security updates
- [ ] Review any failed CI/CD builds
- [ ] Monitor blog functionality (Notion API)
- [ ] Test contact form (Resend integration)
- [ ] Update this document with any new learnings

### Monthly Audits
- [ ] Run comprehensive security audit: `npm audit`
- [ ] Review and update dependency strategy
- [ ] Test full website functionality end-to-end
- [ ] Evaluate pinned dependencies for potential updates
- [ ] Check Lighthouse scores for performance

## Emergency Contacts

### For Critical Issues
- **Primary**: Mark McDermott
- **Secondary**: Claude Code / AI assistant for troubleshooting
- **Documentation**: This file + CLAUDE.md + project README

### Escalation Process
1. **Check this document** for known issues (especially Tailwind CSS v4!)
2. **Review recent commits** for related changes
3. **Test in clean environment** to isolate issue
4. **Test core website features** (blog, contact, themes)
5. **Document problem** and solution for future reference

---

## Quick Reference Commands

```bash
# Clear caches (saved us in July 2025!)
rm -rf .next
rm -rf node_modules && npm install

# Check dependency tree
npm ls

# Audit security issues
npm audit

# Test build process
npm run build

# Check for outdated packages
npm outdated

# Test personal website functionality
npm run dev
# Test: navigate to blog, submit contact form, toggle theme
```

---

## Personal Website Feature Impact Assessment

### High Impact Dependencies (Test Thoroughly)
- **React/Next.js**: Core framework, affects everything
- **Tailwind CSS**: Critical for styling (v4 beta broke everything!)
- **Notion Client**: Blog functionality depends on this
- **Resend**: Contact form integration

### Medium Impact Dependencies (Monitor)
- **TypeScript**: Type safety, compilation issues
- **Next-themes**: Theme switching functionality
- **SEO packages**: Meta tag generation

### Low Impact Dependencies (Flexible)
- **Development tools**: ESLint, Prettier
- **Build tools**: Webpack, bundling optimizations

## Success Metrics

### Site Performance
- **Lighthouse Scores**: Maintain 90+ across all categories
- **Build Time**: Keep under 2 minutes
- **Page Load Speed**: Under 3 seconds

### Functionality
- **Blog Updates**: Notion CMS integration working
- **Contact Form**: Resend email delivery functioning
- **Theme Toggle**: Dark/light mode switching
- **SEO**: Meta tags and structured data rendering

**Note**: This document captures the exact lessons learned from the July 2025 Tailwind CSS v4 beta crisis that broke the personal website build. This dependency strategy was created specifically to prevent that from ever happening again.