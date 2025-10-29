/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",               // inclui o arquivo HTML principal
        "./src/**/*.{js,ts,jsx,tsx}", // escaneia todos os arquivos React
    ],
    theme: {
        extend: {}, // aqui você pode personalizar cores, fontes, espaçamentos etc.
    },
    plugins: [], // lista de plugins opcionais (ex: forms, typography, etc.)
}
