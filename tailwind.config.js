/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./script.js",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: "#4ade80",
                },
                darker: "#111827",
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            backgroundColor: {
                'card': '#374151',
            },
            backgroundImage: {
                'card-gradient': 'linear-gradient(145deg, #374151, #1f2937)',
                'hero-mesh': 'radial-gradient(circle at 2px 2px, rgba(74, 222, 128, 0.07) 1px, transparent 0)',
            },
            backgroundSize: {
                'hero-mesh': '40px 40px',
            },
        },
    },
    plugins: [],
};
