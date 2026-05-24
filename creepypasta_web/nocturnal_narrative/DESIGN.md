---
name: Nocturnal Narrative
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e6bdb6'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ad8882'
  outline-variant: '#5d3f3b'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#bc0000'
  on-primary-container: '#ffc8bf'
  inverse-primary: '#c00502'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#b9c3ff'
  on-tertiary: '#002389'
  tertiary-container: '#0045f3'
  on-tertiary-container: '#ccd3ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#001356'
  on-tertiary-fixed-variant: '#0034bf'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 40px
---

## Brand & Style

The design system is engineered to evoke a sense of digital folklore and urban legend. It draws heavily from **Minimalism** and **Brutalism**, utilizing high-contrast typography and a restricted palette to create an atmosphere of dread and focused storytelling. The UI should feel like a redacted document or a flickering terminal in an abandoned space. 

The aesthetic is "Eldritch Digital"—it is sharp, intentional, and prioritizes the written word. We use heavy whitespace (negative space) not for breathing room, but to isolate content, making every story feel like a lonely signal in the dark.

**Emotional Response:** Unease, curiosity, focused immersion, and clinical detachment.

## Colors

The color strategy is strictly monochromatic with a singular, aggressive accent. 

- **Background (#0a0a0a):** A near-pure black that provides an infinite canvas, ensuring that the screen disappears in low-light environments.
- **Bone White (#f0f0f0):** Used for primary text. It is slightly off-white to prevent harsh ocular strain while maintaining high legibility.
- **Blood Red (#bc0000):** Reserved exclusively for high-priority actions, errors, or critical story highlights. It should be used sparingly to maintain its psychological impact.
- **Surface (#1a1a1a):** A subtle elevation color for cards and containers to separate them from the void of the background.

## Typography

Typography is the cornerstone of this design system. We contrast a literary, authoritative serif with a cold, functional sans-serif.

- **Headlines (Newsreader):** Choose a serif that feels editorial and slightly aged. For display sizes, use tighter letter spacing to create a sense of density.
- **Body (Hanken Grotesk):** A clean, contemporary sans-serif ensures that long-form creepypastas are easily consumable. Use generous line heights (1.6x) to allow the text to "bleed" across the page.
- **Labels/Data (JetBrains Mono):** For metadata, timestamps, or system logs, use a monospaced font to reinforce the "found footage" or "digital artifact" theme.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a narrow, readable column for storytelling, while transitioning to a fluid model for mobile devices.

- **Atmospheric Spacing:** Use vertical spacing (stack-lg) excessively between major sections to create a sense of isolation. 
- **The Column:** Content should be centered with wide margins. Avoid filling the full width of the screen; density is the enemy of suspense.
- **Breakpoints:**
  - Mobile: < 600px (Single column, 20px margins).
  - Tablet: 600px - 1024px (Centered column, 40px margins).
  - Desktop: > 1024px (Fixed 1120px container).

## Elevation & Depth

In a world of deep black, depth is achieved through **Tonal Layers** rather than traditional lighting.

- **The Void:** The base layer is always `#0a0a0a`.
- **Surfaces:** Floating cards or sections use `#141414` (a shade lighter than the background).
- **Subtle Shadows:** Instead of soft ambient light, use sharp, low-opacity black shadows (`rgba(0,0,0,0.8)`) with a 10px-20px blur to suggest the element is hovering slightly above an abyss.
- **Outlines:** Use 1px borders of `#2a2a2a` for interactive elements to define their boundaries without breaking the dark aesthetic.

## Shapes

The design system utilizes **Sharp (0)** edges across all components. Rounded corners are too friendly and organic for this theme. Hard angles communicate a sense of clinical precision, digital harshness, and architectural rigidity. This applies to buttons, cards, input fields, and images.

## Components

- **Buttons:** Rectangular with no radius. Primary buttons are Blood Red with White text. Secondary buttons are Ghost style (1px White border, no fill).
- **Cards:** Use the Surface color (`#1a1a1a`) with a 1px border (`#2a2a2a`). Shadows should be deep and concentrated. No padding on image-header cards to maintain a brutalist look.
- **Inputs:** Simple bottom-border only (`#f0f0f0`), or a full-box outline. When focused, the border changes to Blood Red. Label text should use the Monospaced font.
- **Chips/Tags:** Small, sharp rectangles with `#1a1a1a` backgrounds and `#f0f0f0` text in the Monospaced font.
- **Lists:** Separated by thin, low-opacity lines (`rgba(240, 240, 240, 0.1)`). 
- **Special Component (The "Redactor"):** A custom text-highlight component that appears as a Blood Red block over text until hovered, revealing "classified" information.