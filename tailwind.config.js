/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    extend: {
      colors: {
        bgPrimary: '#2f3241',
        btnColor: '#5765f1',
        textColor: '#148ec2'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: []
}
