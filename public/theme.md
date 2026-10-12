# Task: Install and Configure shadcn/ui with Fast Communication Brand Theme

You are working on **Fast Communication**, a modern Internet Service Provider (ISP) website based in Bangladesh.

Your task is to install and configure **shadcn/ui**, implement a consistent brand color system with light and dark mode support, and configure **Anek Bangla** as the global font.

## 1. Project Setup

- Inspect the existing project structure, framework, dependencies, and styling configuration before making changes.
- Install and initialize the latest compatible version of shadcn/ui using the official CLI.
- Use the existing framework, package manager, and project conventions.
- If this is a Next.js project, follow the App Router conventions where applicable.
- Configure Tailwind CSS according to the installed version.
- Use CSS variables for theme management.
- Do not overwrite existing components or configurations unnecessarily.
- Install `next-themes` if needed for theme switching.
- Ensure all configurations are compatible with TypeScript.

## 2. Brand Color Palette

Implement the following Fast Communication brand colors:

| Color Name     | HEX       | Purpose                           |
| -------------- | --------- | --------------------------------- |
| Royal Blue     | `#0756C5` | Primary brand color               |
| Deep Blue      | `#00358D` | Primary hover and active states   |
| Vibrant Orange | `#FF6500` | CTA buttons and accent            |
| Golden Yellow  | `#FFCC00` | Highlights and decorative accents |
| Midnight Navy  | `#0B1736` | Headings and dark text            |
| Slate Gray     | `#475569` | Secondary text                    |
| Off White      | `#F8FAFC` | Light background                  |
| Light Slate    | `#E2E8F0` | Borders and dividers              |

### Light Theme

- Background: `#F8FAFC`
- Foreground: `#0B1736`
- Card: `#FFFFFF`
- Primary: `#0756C5`
- Primary foreground: `#FFFFFF`
- Secondary: `#EFF6FF`
- Secondary foreground: `#00358D`
- Accent: `#FF6500`
- Accent foreground: `#FFFFFF`
- Muted: `#F1F5F9`
- Muted foreground: `#475569`
- Border: `#E2E8F0`
- Input: `#E2E8F0`
- Ring: `#0756C5`

### Dark Theme

- Background: `#07152F`
- Foreground: `#F8FAFC`
- Card: `#0C2046`
- Card foreground: `#F8FAFC`
- Primary: `#3B82F6`
- Primary foreground: `#FFFFFF`
- Secondary: `#142B51`
- Secondary foreground: `#F8FAFC`
- Accent: `#FF6500`
- Accent foreground: `#FFFFFF`
- Muted: `#142B51`
- Muted foreground: `#CBD5E1`
- Border: `#263C5E`
- Input: `#263C5E`
- Ring: `#60A5FA`

Use the appropriate shadcn/ui semantic tokens, including `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, and `ring`.

Preserve shadcn/ui component compatibility. Define any additional brand tokens separately, such as `brand-orange`, `brand-yellow`, and `primary-hover`.

**Important:** shadcn/ui's semantic `accent` color is commonly used for hover backgrounds and selected menu items. Ensure the vibrant orange brand accent does not cause readability issues in these components. Introduce a separate `brand-accent` token if necessary.

## 3. Global Font: Anek Bangla

Use **Anek Bangla** from Google Fonts as the primary font throughout the entire website.

Google Fonts:\
[https://fonts.google.com/specimen/Anek+Bangla](https://fonts.google.com/specimen/Anek+Bangla)

Requirements:

- If using Next.js, load the font through `next/font/google`.
- Support both Bengali and English text.
- Include appropriate font weights from 400 to 700.
- Apply the font globally to the HTML/body.
- Configure the Tailwind `font-sans` token to use Anek Bangla.
- Ensure all shadcn/ui components inherit the same font.
- Apply the font to headings, paragraphs, buttons, inputs, labels, navigation, dialogs, dropdowns, and tables.
- Avoid unnecessary secondary font families.
- Use appropriate font fallbacks.
- Optimize font loading and avoid layout shifts.

Typography recommendations:

- Headings: 600–700
- Body: 400
- Buttons: 500–600
- Labels: 500

Ensure Bengali text renders naturally with proper line height, spacing, and readability.

## 4. Theme Management

Implement a reusable light/dark theme system.

Requirements:

- Light mode should be the default when no theme preference exists.
- Support dark mode.
- Support system theme preference where appropriate.
- Persist the user's selected theme.
- Prevent hydration mismatches and theme flashing.
- Create a reusable theme toggle component using shadcn/ui Button and Lucide icons.
- Ensure every shadcn/ui component respects the active theme.

## 5. shadcn/ui Components

Install the essential components needed for a modern ISP website:

- Button
- Card
- Input
- Label
- Form
- Select
- Dialog
- Dropdown Menu
- Sheet
- Tabs
- Accordion
- Badge
- Separator
- Skeleton
- Tooltip
- Table
- Sonner

Use the latest compatible versions and official shadcn/ui installation conventions.

## 6. Design Guidelines

The website should have a modern, minimal, professional appearance suitable for an Internet Service Provider.

Follow these principles:

- Blue is the dominant brand color.
- Orange is primarily for important calls to action.
- Yellow should be used sparingly for highlights.
- Use white and off-white backgrounds in light mode.
- Use deep navy surfaces in dark mode.
- Maintain consistent border radii and spacing.
- Use subtle shadows and clean borders.
- Ensure accessible color contrast for text and interactive elements.
- Maintain consistent hover, focus, active, and disabled states.
- Use responsive, mobile-first styling.
- Avoid unnecessary gradients, animations, and visual clutter.

Use semantic theme tokens rather than hardcoded colors inside individual components.

## 7. Implementation Rules

1. Inspect the existing codebase before modifying anything.
2. Follow the project's existing architecture and coding standards.
3. Preserve existing functionality.
4. Use TypeScript where supported.
5. Use the latest compatible shadcn/ui and Tailwind CSS configuration.
6. Keep theme variables centralized.
7. Do not introduce unnecessary dependencies.
8. Do not create duplicate global CSS declarations.
9. Do not redesign existing pages unless required for theme compatibility.
10. Ensure the configuration works in production.

## 8. Verification

After implementation:

- Verify shadcn/ui components render correctly.
- Confirm Anek Bangla is applied globally.
- Test Bengali and English typography.
- Verify light and dark theme switching.
- Check button, input, dropdown, and dialog styling.
- Verify responsive behavior.
- Run available TypeScript, lint, and build checks.
- Fix any errors introduced by the implementation.

## Expected Result

A fully configured shadcn/ui design system for Fast Communication, including:

- Centralized brand color tokens
- Consistent light and dark themes
- Anek Bangla as the global font
- Reusable themed shadcn/ui components
- Accessible typography and interactive elements
- Clean, maintainable, production-ready configuration

**Do not build new website pages yet. Focus only on setting up the design system, typography, shadcn/ui components, and theme infrastructure.**

After completion, provide a concise summary of the files modified, packages installed, and how to use the theme tokens in future components.
