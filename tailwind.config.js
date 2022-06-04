module.exports = {
    content: ["./index.html", "./blog.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                "148px": "148px",
            },
            colors: {
                "dark": "#21243D",
                "light": "##8695A4"
            },
            fontSize: {
                '1.5xl': "22px",
            },
        },
    },
    plugins: [],
};