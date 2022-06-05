module.exports = {
    content: ["./index.html","blog.html", "work.html", "workDetail.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                "screen": "1152px",
            },
            spacing: {
                "148px": "148px",
            },
            colors: {
                dark: "#21243D",
                light: "#8695A4",
            },
            fontSize: {
                "1.5xl": "22px",
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-80%)" },
                    "100%": { transform: "translateY(0)" },
                },
            },
            animation: {
                slideDown: "slideDown 0.3s linear ",
            },
        },
    },
    plugins: [],
};
