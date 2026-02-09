/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#C5A059',
                'accent-hover': '#9F7E3A',
            },
        },
    },
    plugins: [],
}
