# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Video-lessons:
Евгений Паромов
RTK Query, Thunk, createAsyncThunk | Продвинутый полный курс | Часть 2
https://www.youtube.com/watch?v=9NVDzMW6b1k&t=483s

## зміст:
Это вторая часть моего фундаментального курса по Redux. 
В ней мы рассмотрим основные способы работы в API в Redux.

Начнём от самых основ и проследим эволюцию работы с API в Redux. 

00:00:00 - Начало
00:04:51 - Куда девать запросы
00:07:34 - Добавляем server
00:14:55 - Подход 1: Запросы в компоненте
00:23:47 - Выносим запрос в функцию
00:28:05 - Подход 2: Thunk
00:37:37 - Используем Thunk + typescript
00:44:33 - Практика Thunk интеграция с react-router
01:16:44 - Небольшой рефакторинг
01:20:42 - Подход 3: createAsynkThunk
01:33:34 - определяем asynkThunk внутри createSlice
01:39:32 - Подход 4: RTK Query
01:45:23 - Концепция RTK Query
01:53:47 - Практика базовая практика RTK Query
02:14:47 - Инвалидация и система тэгов 
02:23:02 - Валидация ответа сервера
02:25:12 - Работа с RTK Query без хуков
02:31:48 - RTK Query + Thunk для сложных мутаций
02:41:27 - Как RTK Query понимает что инвалидировать

## Нотатки
1. zod - це пакет потрібен для валідаціі тіпізації. (Дивись на 12:20 відео приклад)
2. робимо команди запуска клієнта та сервера та разом, но у мене по іншому з сервером ніж у лектора
3. 
