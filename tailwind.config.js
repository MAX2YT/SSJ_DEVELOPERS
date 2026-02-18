/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1C1917',
                'primary-light': '#44403C',
                accent: '#C5A059',
                'accent-hover': '#9F7E3A',
                'text-main': '#292524',
                'text-muted': '#57534E',
                'text-inverse': '#FFFFFF',
                'bg-body': '#FFFFFF',
                'bg-card': '#F5F5F4',
                'bg-section': '#FAFAF9',
            },
        },
    },
    plugins: [],
}
