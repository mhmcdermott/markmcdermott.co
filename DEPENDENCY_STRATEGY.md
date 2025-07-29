# Dependency Management Strategy

This document outlines how to safely manage dependencies and avoid breaking changes.

## 1. Critical Dependencies (Pinned to Exact Versions)

These dependencies are pinned to exact versions to prevent breaking changes:

- `react`: 19.1.1 (no ^)
- `react-dom`: 19.1.1 (no ^) 
- `tailwindcss`: 3.4.17 (no ^)
- `next`: Keep at latest stable (not pre-release)

## 2. Update Strategy

### Safe Updates (Minor/Patch Only)
```bash
# Update only patch versions
npm update --save-dev

# Check for outdated packages
npm outdated
```

### Major Updates (Test Thoroughly)
```bash
# Test major updates in a separate branch
git checkout -b dependency-updates

# Update one major dependency at a time
npm install package@latest

# Test thoroughly:
npm run build
npm run typecheck  
npm run lint
npm run dev # Test all pages

# Only merge if everything works
```

## 3. Known Problematic Dependencies

### Tailwind CSS v4
- **Status**: Beta (unstable)
- **Issue**: Complete architecture change, breaks PostCSS integration
- **Action**: Stay on v3.x until v4 is stable and migration guide available

### React 19
- **Status**: Just released 
- **Issue**: Some ecosystem packages not compatible yet
- **Action**: Monitor peer dependency warnings, pin exact version

### Next.js Major Updates
- **Issue**: Can break middleware, API routes, build process
- **Action**: Always test in staging environment first

## 4. Pre-Update Checklist

Before updating any dependency:

1. ✅ Check release notes for breaking changes
2. ✅ Backup current working state (`git commit`)
3. ✅ Test in development branch first
4. ✅ Run full test suite:
   ```bash
   npm run build
   npm run typecheck
   npm run lint
   npm run dev # Test all pages
   ```
5. ✅ Check for peer dependency warnings
6. ✅ Test on staging environment

## 5. Emergency Rollback Plan

If an update breaks the site:

```bash
# Quick rollback
git checkout HEAD~1 package.json package-lock.json
rm -rf node_modules .next
npm install
npm run dev
```

## 6. Recommended Update Schedule

- **Security patches**: Immediately
- **Patch versions**: Monthly  
- **Minor versions**: Quarterly (with testing)
- **Major versions**: Only when necessary (6+ months)

## 7. Automated Monitoring (Active)

**GitHub Dependabot** (`.github/dependabot.yml`):
- Weekly dependency updates (Mondays 3 AM)
- Daily security patches
- Ignores major/minor updates for pinned dependencies
- Auto-labels and assigns PRs

**CI/CD Pipeline** (`.github/workflows/`):
- Runs full test suite on every dependency PR
- Auto-retries with cache clearing if build fails
- Blocks critical dependency changes requiring manual review
- Tests dev server startup and bundle size impact

**Alerts configured for**:
- Security vulnerabilities (`npm audit`)
- Build failures in CI/CD
- Critical dependency changes

## 8. Package Lock Strategy

- Always commit `package-lock.json`
- Use `npm ci` in production/CI
- Only use `npm install` for development

This strategy ensures stability while staying reasonably up-to-date with security patches and improvements.