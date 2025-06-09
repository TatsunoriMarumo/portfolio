import type { Config } from "tailwindcss";

/* ----------------------------------------------------------------
   Tailwind CSS v4 configuration
   ---------------------------------------------------------------- */
export default {
  /* Enable dark mode via .dark class */
  darkMode: "class",

  /* No `content` array needed — v4 auto-detects all template files */

  theme: {
    extend: {
      /* ───── Custom color palette ───── */
      colors: {
        /* Nature-inspired extras */
        "dark-navy": "#1B2631",
        "dark-teal": "#3F4E4F",
        "soft-blue": "#A5C8D6",
        "light-gray": "#F0F4F8",
        "sage-green": "#D9E4E0",

        /* Semantic colors based on CSS variables */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /* ───── CSS-variable-driven border-radius ───── */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  /* ----------------------------------------------------------------
     Plugins
     ----------------------------------------------------------------
     `tailwindcss-animate` is not yet officially v4-compatible.
     Uncomment the next line *after* installing a compatible version:
     ---------------------------------------------------------------- */
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;
