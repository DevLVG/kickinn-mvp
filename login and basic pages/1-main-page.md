Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
User Role Selection Sign-up Form Interface
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Help, Privacy, Contact Us (bottom-aligned, centered)
- Logo placement: Centered at top of page
- Simple, clean navigation structure with minimal elements

2. Layout Components:
- Main container: ~600px width, centered card with rounded corners
- Form container: ~500px width with 32px padding
- Vertical spacing between elements: 24px
- Responsive white card on light background

3. Content Sections:
- Header section with logo
- Title "Join Kick Inn"
- Subtitle "Select your role to get started"
- Email input field
- Role selection radio group
- Optional wallet connection
- Continue button

4. Interactive Controls:
- Email input field with validation check mark
- Three radio button options for role selection:
  * Ideator (selected by default)
  * Contributor
  * Investor
- "Continue" button (full-width)
- "Connect Wallet (Optional)" link
- Radio buttons with labels and descriptions

5. Colors:
- Primary: #4F6F6C (continue button, selected radio)
- Text: #000000 (headers), #666666 (descriptions)
- Background: #FFFFFF (card), #FAFAFA (page)
- Accent: #2196F3 (checkmark)

6. Grid/Layout Structure:
- Single column layout
- Vertical alignment of elements
- Consistent spacing (24px between sections)
- Full-width button alignment
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Card.tsx
│   ├── features/
│   │   ├── signup/
│   │   │   ├── EmailInput.tsx
│   │   │   ├── RoleSelector.tsx
│   │   │   └── WalletConnect.tsx
│   └── shared/
│       ├── Button.tsx
│       └── RadioGroup.tsx
```

2. Key Features:
- Email validation
- Role selection persistence
- Wallet connection integration
- Form submission handling
- Responsive layout adaptation

3. State Management:
```typescript
interface SignupState {
  email: {
    value: string;
    isValid: boolean;
  };
  role: {
    selected: 'ideator' | 'contributor' | 'investor';
    walletConnected: boolean;
  };
  form: {
    isSubmitting: boolean;
    errors: string[];
  };
}
```

4. Component Architecture:
- SignupForm (parent)
  ├── EmailInput
  ├── RoleSelector
  ├── WalletConnect
  └── SubmitButton

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'card-max': 600px
);
```
</development_planning>