# 📦 11ty Starter Kit

Стартовый репозиторий для разработки статичных сайтов на [Eleventy](https://www.11ty.dev/).

## Используемый стек
[![Eleventy](https://img.shields.io/badge/Eleventy-100000?style=for-the-badge&logo=Eleventy&logoColor=white&labelColor=222222&color=222222)](https://www.11ty.dev/docs/)
[![Nunjucks](https://img.shields.io/badge/Nunjucks-100000?style=for-the-badge&logo=Nunjucks&logoColor=white&labelColor=5CB85C&color=5CB85C)](https://mozilla.github.io/nunjucks/)
[![PostCSS](https://img.shields.io/badge/PostCSS-100000?style=for-the-badge&logo=PostCSS&logoColor=white&labelColor=DD3A0A&color=DD3A0A)](https://postcss.org/)
[![Webpack](https://img.shields.io/badge/Webpack-100000?style=for-the-badge&logo=Webpack&logoColor=white&labelColor=75AFCC&color=75AFCC)](https://webpack.js.org/)
[![Babel](https://img.shields.io/badge/Babel-100000?style=for-the-badge&logo=Babel&logoColor=000000&labelColor=F5DA55&color=F5DA55)](https://babeljs.io/)

## Установка
Убедитесь, что у вас установленны [NPM](https://www.npmjs.com/) и [Node.js](https://nodejs.org/en/)
1. Этот репозиторий настроен как [Template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). Нажмите на кнопку *«Use this template»*, чтобы создать новый проект на основе этого репозитория.
2. Клонируйте созданный репозиторий себе на компьютер и перейдите в папку с проектом.
3. Установите необходимые зависимости, используя команду ```npm install```

> ⚠️ Для работы [node-w3c-validator](https://www.npmjs.com/package/node-w3c-validator) вы должны установить «Java»

## Разработка
1. Для запуска локального сервера, используйте команду ```npm start```, сайт будет доступен по адресу ```http://localhost:8080```
2. Cборка сайта для деплоя, осуществляется командой ```npm run build```

## Структура
```
.
├── _site                     # Папка сборки
├── src                       # Исходные файлы
│   ├── _data                 # Глобальные файлы данных
│   ├── _includes             # Переиспользуемые куски кода
│   ├── _layouts              # Шаблоны страниц
│   ├── assets                # Стили, JS, шрифты и изображения
│   ├── pages                 # Страницы сайта
```
