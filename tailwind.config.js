/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            'custom-white': 'hsl(0, 0%, 100%)',
            'custom-l-gray': 'hsl(212, 45%, 89%)',
            'custom-g-blue': 'hsl(220, 15%, 55%)',
            'custom-d-blue': 'hsl(218, 44%, 22%)',
        },
    },
    plugins: [],
};
