import { Config } from 'tailwindcss';

const TailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

export default TailwindConfig;
