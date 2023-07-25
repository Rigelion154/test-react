/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'primary': 'rgba(152, 87, 211, .7)',
            'primary-light': 'rgba(152, 87, 211, .1)',
            'error': 'rgb(255,0,0)',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
        },
        extend: {
            backgroundOpacity: {
                '30': '0.3', // 30% прозрачности
            },
        },
    },
    plugins: [require('@tailwindcss/typography'),
        require('@tailwindcss/forms')],
}

