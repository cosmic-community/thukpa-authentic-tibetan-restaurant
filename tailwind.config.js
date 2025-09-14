import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#8B2635',
          50: '#FDF2F4',
          100: '#F9DDE1',
          200: '#F2B8C1',
          300: '#E7879A',
          400: '#D95171',
          500: '#C53E5C',
          600: '#B02B48',
          700: '#8B2635',
          800: '#761F2E',
          900: '#5E1A26',
          950: '#3F1017'
        },
        secondary: {
          DEFAULT: '#6B5B73',
          50: '#F7F5F8',
          100: '#EFEBF1',
          200: '#DCCFE4',
          300: '#C4B0D0',
          400: '#A88FB8',
          500: '#92749E',
          600: '#7D5E85',
          700: '#6B5B73',
          800: '#594C60',
          900: '#4A404F',
          950: '#2E252F'
        },
        accent: {
          DEFAULT: '#D4AF37',
          50: '#FEFBF0',
          100: '#FDF6DB',
          200: '#FAEAB8',
          300: '#F6DA8A',
          400: '#F1C85A',
          500: '#EDB935',
          600: '#D4AF37',
          700: '#B4932A',
          800: '#927526',
          900: '#786024',
          950: '#453512'
        },
        warm: {
          50: '#FEFCFB',
          100: '#FDF8F6',
          200: '#FAF0EC',
          300: '#F6E7E0',
          400: '#F0D6CB',
          500: '#E8C1B0',
          600: '#DDA78F',
          700: '#CE8A6B',
          800: '#B56B47',
          900: '#8B4513',
          950: '#5D2F0C'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
      gradientColorStops: {
        'gradient-primary': '#8B2635',
        'gradient-secondary': '#D4AF37',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'container': '1200px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}

export default config