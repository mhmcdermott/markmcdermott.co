# Schema.org Person Implementation

This document describes the schema.org/Person structured data implementation for improved SEO and search result appearance.

## Implementation Details

### Component Location
- **Structured Data Component**: `src/components/StructuredData.tsx`
- **Integration**: `src/pages/_app.tsx` (renders on all pages)

### Schema Fields Implemented

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mark McDermott",
  "jobTitle": "CEO & Co-Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "ScreenCloud",
    "url": "https://screencloud.com"
  },
  "url": "https://www.markmcdermott.co",
  "image": "https://www.markmcdermott.co/api/og?title=Mark%20McDermott&description=CEO%20%26%20Co-Founder%20of%20ScreenCloud",
  "description": "CEO & Co-Founder of ScreenCloud. Building digital products that make workplace communication better.",
  "knowsAbout": [
    "Digital Signage",
    "SaaS",
    "Enterprise Software",
    "Digital Product Development",
    "Workplace Communication",
    "Team Leadership",
    "Startup Growth",
    "Web Development"
  ],
  "addressLocality": "London",
  "addressCountry": "GB",
  "sameAs": [
    "https://www.linkedin.com/in/mhmcdermott",
    "https://twitter.com/mr_mcd",
    "https://www.instagram.com/mhmcdermott"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Exeter"
  },
  "award": [
    "Co-founded ScreenCloud, empowering 10,000+ businesses worldwide",
    "Led digital agency serving Microsoft, BBC, and Nestlé"
  ]
}
```

## Customization

To update the schema data, edit the `personSchema` object in `src/components/StructuredData.tsx`:

1. **Profile Image**: Currently using `/public/images/mark-mcdermott-headshot.jpg`
2. **Social Links**: Update the `sameAs` array with your social media profiles
3. **Skills**: Modify the `knowsAbout` array with your expertise areas
4. **Awards/Achievements**: Update the `award` array with your accomplishments

## Validation

Test your implementation using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Privacy Considerations

The current implementation follows privacy best practices:
- ✅ Only professional information included
- ✅ City-level location (London, GB)
- ✅ Professional social profiles only
- ✅ No personal phone numbers or addresses
- ✅ No birth dates or family information

## Benefits

This structured data helps search engines:
- Display rich snippets with your photo and job title
- Better understand your professional identity
- Improve search result appearance
- Enable knowledge graph features