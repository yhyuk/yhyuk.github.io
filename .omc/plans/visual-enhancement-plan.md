# Portfolio Visual Enhancement Plan

**Created:** 2026-03-25
**Status:** Draft
**Scope:** Comprehensive visual upgrade maintaining monochrome aesthetic with minimal motion

---

## Context

Current portfolio is clean and minimal with Inter font, monochrome palette (black/white/grays), and simple layout. The design is professional but lacks visual hierarchy depth and engagement. User wants to maintain professionalism while adding visual interest through:

- **Timeline-style Experience section** with connecting lines
- **Enhanced visual hierarchy** across all sections
- **Subtle, accessibility-first animations** (respects prefers-reduced-motion)
- **Pure monochrome aesthetic** (no color accents)
- **Professional, minimal approach** throughout

---

## Work Objectives

### Primary Goals
1. Design and implement vertical timeline layout for Experience section with connecting lines
2. Enhance typography hierarchy and spacing across all sections
3. Add subtle, professional micro-interactions that respect accessibility
4. Improve visual separation and flow between sections
5. Modernize the overall aesthetic while preserving minimalism

### Secondary Goals
- Improve mobile responsiveness for new timeline elements
- Ensure all animations respect `prefers-reduced-motion`
- Maintain fast load times and performance
- Keep the codebase clean and maintainable

---

## Guardrails

### Must Have
- Timeline design with vertical connecting line between experiences
- Visual indicators (dots/circles) for each experience milestone
- Enhanced spacing and typography hierarchy
- Smooth, subtle transitions (fade, scale, opacity only)
- Full `prefers-reduced-motion` support
- Responsive design for mobile (320px+)
- Pure monochrome palette (black, white, grays)
- Maintain current Inter font
- No breaking changes to existing content structure

### Must NOT Have
- No color accents (must stay monochrome)
- No distracting or flashy animations
- No animation on page load (accessibility)
- No parallax or scroll-triggered complex animations
- No additional dependencies (keep it lightweight)
- No performance degradation
- No layout shifts or jank

---

## Design Specifications

### 1. Experience Timeline Design

#### Visual Structure
```
┌─────────────────────────────────────────────┐
│  [○] IMFORM                    2025.01 - 현재 │
│   │  시스템팀 · 백엔드, 프론트엔드               │
│   │  • Achievement 1                        │
│   │  • Achievement 2                        │
│   │                                         │
│  [○] INROES                   2023.09 - 2024 │
│   │  서버팀 · 백엔드                          │
│   │  • Achievement 1                        │
│   │                                         │
│  [○] Freelancer              2023.05 - 2023  │
│   │  백엔드, 프론트엔드                        │
│   │                                         │
│  [○] UNLIKE                  2021.09 - 2023  │
│      서버팀 · 백엔드, 프론트엔드                │
└─────────────────────────────────────────────┘
```

#### Technical Implementation
- **Timeline line:** 2px solid gray (#ddd), absolute positioned on left
- **Timeline dots:** 12px circle, white bg, 2px border, positioned on timeline
- **Current position indicator:** Filled dot (black) for most recent role
- **Content offset:** Left padding to accommodate timeline (40-50px)
- **Hover state:** Dot scales to 14px, subtle shadow appears
- **Responsive:** Timeline moves to minimal width on mobile, or collapses entirely

#### Spacing & Layout
- Timeline line starts below section title
- 50px vertical gap between experiences
- Timeline dot vertically centered with company name
- Left margin: 24px for timeline container
- Content area: 16px left padding from timeline

---

### 2. Typography Enhancements

#### Hierarchy Improvements
- **Section titles:** Add subtle letter-spacing (-0.5px), increase weight to 800
- **Company names:** Maintain current size but add slight tracking
- **Period dates:** Reduce opacity to 60% instead of gray color
- **Achievement bullets:** Increase line-height to 1.75 for better readability
- **Code highlights:** Add subtle box-shadow for depth

#### Font Adjustments
- Enable font-feature-settings: 'tnum' for tabular numbers in dates
- Add font-variant-numeric: lining-nums for consistent number heights
- Maintain Inter font throughout (no new fonts)

---

### 3. Spacing & Rhythm Enhancements

#### Vertical Rhythm
- Increase section padding from 48px to 60px (desktop)
- Add 24px gap between project items (up from 20px)
- Consistent 16px gap between related content blocks
- 8px micro-spacing for inline elements

#### Visual Separation
- Replace solid section borders with gradient fade borders
- Add subtle background tint (#fafafa) to alternating sections
- Increase border radius on tech tags from 3px to 4px
- Add 1px subtle border to project cards

---

### 4. Micro-Interactions (Minimal Motion)

#### Hover States
- **Links:** Underline slides in from left (150ms ease-out)
- **Tech tags:** Subtle scale (1.02) and shadow on hover
- **Project cards:** 1px border color shift on hover
- **Contact icons:** Gentle scale (1.1) on hover
- **Timeline dots:** Scale to 1.15, add subtle shadow

#### Focus States
- 2px solid outline with 4px offset
- High contrast focus ring for accessibility
- Visible on all interactive elements

#### Transition Timing
- Default: 200ms cubic-bezier(0.4, 0, 0.2, 1)
- Hover effects: 150ms ease-out
- All transitions respect `prefers-reduced-motion: reduce`

#### Reduced Motion Fallback
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 5. Enhanced Visual Elements

#### Profile Section
- Add subtle fade-in background gradient behind name
- Increase h1 weight from 700 to 800
- Add fine 1px bottom border with fade effect
- Contact icons: Add circular hover background (#f5f5f5)

#### Projects Section
- Add card-style container with subtle border
- Hover state: Lift effect with shadow (respecting motion preference)
- Badge pills: Increase padding, add subtle border
- Project links: Underline animation on hover

#### Skills Section
- Convert to grid layout (2 columns on desktop)
- Add separator lines between skill categories
- Tech items in pill format matching project badges

#### Education Section
- Align with Experience timeline if space permits
- Otherwise maintain current clean layout
- Enhance visual hierarchy with weight adjustments

---

### 6. Color Palette (Monochrome)

#### Expanded Gray Scale
```css
--gray-50:  #fafafa;   /* Background tint */
--gray-100: #f5f5f5;   /* Tech tags, hover backgrounds */
--gray-200: #e5e5e5;   /* Borders */
--gray-300: #d4d4d4;   /* Timeline line */
--gray-400: #a3a3a3;   /* Secondary text */
--gray-500: #737373;   /* Tertiary text */
--gray-600: #525252;   /* Body text alternative */
--gray-900: #171717;   /* Primary text */
--black:    #000000;   /* Emphasis */
--white:    #ffffff;   /* Background */
```

#### Usage Guidelines
- Primary text: #222 (current) or --gray-900
- Secondary text: --gray-600
- Borders: --gray-200 to --gray-300
- Backgrounds: --white or --gray-50
- Hover states: --gray-100
- Timeline active dot: --black

---

### 7. Shadow System (Subtle)

```css
--shadow-xs:  0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm:  0 1px 3px 0 rgb(0 0 0 / 0.1);
--shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1);
```

**Usage:**
- Tech tags hover: --shadow-xs
- Project cards hover: --shadow-sm
- Timeline dots hover: --shadow-xs
- Raised elements: --shadow-md (sparingly)

---

## Task Flow

### Phase 1: Foundation Setup
1. Create CSS custom properties for spacing, shadows, and colors
2. Update global.css with new design tokens
3. Implement `prefers-reduced-motion` media query
4. Test baseline responsive behavior

**Acceptance Criteria:**
- CSS variables defined and documented
- Reduced motion fallbacks in place
- No visual regression on existing layout

---

### Phase 2: Timeline Implementation
1. Create timeline markup structure in Experience.jsx
2. Add vertical line with absolute positioning
3. Implement timeline dots with proper spacing
4. Add current position indicator (filled dot)
5. Offset experience content to accommodate timeline
6. Test responsive behavior on mobile

**Acceptance Criteria:**
- Timeline line connects all experiences
- Dots align vertically with company names
- Most recent position has filled dot indicator
- Mobile layout handles timeline gracefully (collapses or minimal)
- No layout shifts or overflow issues

---

### Phase 3: Typography & Spacing
1. Update section title styling (weight, spacing)
2. Enhance company name and period styling
3. Improve achievement list line-height and spacing
4. Add font-feature-settings for numbers
5. Increase vertical rhythm spacing
6. Update responsive typography

**Acceptance Criteria:**
- Clear visual hierarchy across all sections
- Improved readability on all screen sizes
- Consistent spacing rhythm throughout
- Tabular numbers in dates align properly

---

### Phase 4: Micro-Interactions
1. Add hover states to all interactive elements
2. Implement focus states with high contrast
3. Add link underline animations
4. Add tech tag hover effects
5. Implement timeline dot hover scaling
6. Test all interactions with keyboard navigation

**Acceptance Criteria:**
- All hover states respect `prefers-reduced-motion`
- Focus indicators visible and high contrast
- Smooth transitions (200ms or less)
- Keyboard navigation works perfectly
- No jarring or distracting movements

---

### Phase 5: Section Enhancements
1. Add subtle background tints to alternating sections
2. Enhance project cards with borders and hover states
3. Convert Skills to grid layout
4. Update Profile section with refined styling
5. Polish Education section alignment

**Acceptance Criteria:**
- Each section has clear visual identity
- Projects have card-like appearance
- Skills grid works responsively
- Profile section has strong presence
- All sections maintain monochrome palette

---

### Phase 6: Polish & Testing
1. Test all animations with `prefers-reduced-motion: reduce`
2. Verify responsive design on all breakpoints (320px, 600px, 760px+)
3. Check keyboard navigation and focus states
4. Verify color contrast meets WCAG AA standards
5. Test performance (Lighthouse score)
6. Cross-browser testing (Chrome, Firefox, Safari)

**Acceptance Criteria:**
- Lighthouse Performance score > 95
- Lighthouse Accessibility score 100
- No layout shifts (CLS = 0)
- All animations respect accessibility preferences
- Works on all modern browsers
- Mobile experience is polished

---

## Detailed Implementation Guide

### Experience Timeline CSS Structure

```css
/* Timeline container */
.experience-timeline {
  position: relative;
  padding-left: 40px;
}

/* Vertical connecting line */
.experience-timeline::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 12px;
  bottom: 40px;
  width: 2px;
  background: var(--gray-300);
}

/* Individual experience item */
.exp-item {
  position: relative;
  margin-bottom: 50px;
}

/* Timeline dot */
.exp-item::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 6px;
  width: 12px;
  height: 12px;
  background: white;
  border: 2px solid var(--gray-900);
  border-radius: 50%;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
}

/* Current position (filled dot) */
.exp-item:first-child::before {
  background: var(--gray-900);
}

/* Hover effect on timeline dot */
.exp-item:hover::before {
  transform: scale(1.15);
  box-shadow: var(--shadow-xs);
}

/* Reduced motion fallback */
@media (prefers-reduced-motion: reduce) {
  .exp-item::before {
    transition: none;
  }
  .exp-item:hover::before {
    transform: none;
  }
}
```

---

### Typography Enhancement Examples

```css
/* Section titles */
.section-title {
  font-size: 26px;
  font-weight: 800; /* was 700 */
  letter-spacing: -0.5px;
  margin-bottom: 40px;
}

/* Company names with better tracking */
.exp-company {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.3px;
}

/* Dates with tabular numbers */
.exp-period {
  font-size: 16px;
  color: var(--gray-400);
  font-variant-numeric: tabular-nums lining-nums;
  opacity: 0.6;
}

/* Achievement lists */
.exp-list li {
  line-height: 1.75; /* was 1.65 */
  margin-bottom: 10px; /* was 8px */
}
```

---

### Micro-Interaction Examples

```css
/* Link underline animation */
a {
  position: relative;
  text-decoration: none;
}

a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 1px;
  background: currentColor;
  transition: right 0.15s ease-out;
}

a:hover::after {
  right: 0;
}

/* Tech tag hover */
.exp-tech span,
.project-tech span {
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
}

.exp-tech span:hover,
.project-tech span:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-xs);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  a::after {
    transition: none;
  }
  .exp-tech span,
  .project-tech span {
    transition: none;
  }
  .exp-tech span:hover,
  .project-tech span:hover {
    transform: none;
  }
}
```

---

## Visual Examples & References

### Timeline Inspiration
- **GitHub contribution graph timeline** - Clean, minimal, informative
- **Apple job listings timeline** - Professional, subtle
- **Linear's roadmap view** - Modern, monochrome, excellent spacing

### Typography References
- **Stripe's documentation** - Excellent hierarchy
- **Vercel's design system** - Clean Inter usage
- **GitHub's redesign** - Professional monochrome

### Interaction References
- **Linear app** - Subtle, purposeful animations
- **Notion** - Accessibility-first hover states
- **Stripe docs** - Professional micro-interactions

---

## Success Criteria

### Visual Quality
- [ ] Timeline clearly shows career progression
- [ ] Visual hierarchy immediately guides the eye
- [ ] Spacing feels consistent and rhythmic
- [ ] Design feels modern yet timeless
- [ ] Monochrome palette has depth and variety

### Technical Quality
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility = 100
- [ ] CLS (Cumulative Layout Shift) = 0
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Responsive on all screen sizes (320px+)
- [ ] Cross-browser compatible (Chrome, Firefox, Safari)

### User Experience
- [ ] Content is more scannable and readable
- [ ] Timeline makes career progression intuitive
- [ ] Hover states feel responsive but subtle
- [ ] Keyboard navigation works flawlessly
- [ ] Mobile experience is excellent
- [ ] No performance degradation

### Code Quality
- [ ] CSS is organized and maintainable
- [ ] No new dependencies added
- [ ] Follows existing code conventions
- [ ] Well-commented and documented
- [ ] No breaking changes to content structure

---

## Risks & Mitigation

### Risk: Timeline complexity on mobile
**Mitigation:** Create simplified mobile timeline (thin line, smaller dots) or collapse entirely to clean list view

### Risk: Over-engineering animations
**Mitigation:** Start minimal, add only where it enhances UX, always respect `prefers-reduced-motion`

### Risk: Accessibility regression
**Mitigation:** Test with keyboard navigation, screen readers, and automated tools at each phase

### Risk: Performance degradation
**Mitigation:** Use CSS-only animations (no JS), test with Lighthouse after each phase

### Risk: Browser compatibility
**Mitigation:** Use progressive enhancement, test in all modern browsers, avoid cutting-edge CSS features

---

## Open Questions
(None - user preferences captured)

---

## References

- Current codebase: `/src/components/Experience.jsx`, `/src/styles/global.css`
- Design constraints: Monochrome, minimal motion, accessibility-first
- Font: Inter (already in use)
- Framework: React + Vite (no new dependencies)

---

## Next Steps

Once this plan is approved:
1. Begin Phase 1: Foundation setup
2. Implement timeline structure in Phase 2
3. Progressive enhancement through Phases 3-6
4. Testing and polish

Estimated effort: 3-4 focused work sessions
Timeline: Can be implemented incrementally, allowing for feedback at each phase

---

**Plan prepared by:** Claude Code
**Date:** 2026-03-25
**Version:** 1.0
