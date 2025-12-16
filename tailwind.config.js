/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Dark Blue (Slate 900)
                secondary: "#334155", // Slate 700
                accent: "#38bdf8", // Sky 400
                text: "#f1f5f9", // Slate 100
                muted: "#94a3b8", // Slate 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "100%",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                }
            }
        },
    },
    plugins: [],
}
