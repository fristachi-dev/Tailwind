// tailwind.config.js
module.exports = {

  purge: { 
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'] 
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          accent: "var(--color-text-accent)"
        }
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "primary": "var(--color-bg-primary)",
          "secondary": "var(--color-bg-secondary)",
          "accent": "var(--color-bg-accent)"
        }
      },
      borderColor: {
        skin: {
          primary: "var(--color-border-primary)",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}