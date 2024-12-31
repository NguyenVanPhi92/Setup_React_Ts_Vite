**Setup ESLint & Prettier Vite Typescript**

1. npm i prettier eslint-config-prettier eslint-plugin-prettier -D
   Đây là những thứ chúng ta cài

   - prettier: code formatter chính
   - eslint-config-prettier: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.
   - eslint-plugin-prettier: Dùng thêm 1 số rule Prettier cho ESLint

2. Mở file eslint.config.js lên
   Thêm đoạn giá trị này vào mảng ignores, mục đích là mình không muốn ESLint check file vite.config.ts
   // 'vite.config.ts'
3. Các bạn import cái này vào đầu file eslint.config.js
   import eslintPluginPrettier from 'eslint-plugin-prettier'
4. Thêm đoạn code sau vào object plugins
   prettier: eslintPluginPrettier
5. Thêm đoạn code sau vào object rules để thêm các rule của Prettier
   'prettier/prettier': [
   'warn',
   {
   arrowParens: 'always',
   semi: false,
   trailingComma: 'none',
   tabWidth: 2,
   endOfLine: 'auto',
   useTabs: false,
   singleQuote: true,
   printWidth: 120,
   jsxSingleQuote: true
   }
   ]
6.
