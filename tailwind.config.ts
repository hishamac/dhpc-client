import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c6e49",
        secondary: "#5C8374",
        tertiary:"#9EC8B9"
      },
      boxShadow: {
        '3xl': '0px 0px 100px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
