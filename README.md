# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

install:
npm i --save-dev @types/react-slick
npm install react-icons
 npm i swiper                   
  npm install react-slick slick-carousel --save
  npm i --save-dev @types/react-router-hash-link
npm install react-hook-form
npm i --save-dev @types/google-map-react




font size on infor card or page text 
Title:
 fontSize: {
              lg: "40px",
              md: "30px",
              sm: "30px",
              xs: "28px",
            },
 
Subtitle / SubtitleLink:
 fontSize: {
              lg: "30px",
              md: "22px",
              sm: "22px",
              xs: "20px",
            },
Description:
 fontSize: {
            lg: "25px",
            md: "20px",
            sm: "20px",
            xs: "18px",
          },


Action Buttom && Links color
#337f83

Main boday: px 3
Image and Text section: maxWidth: 400 px
