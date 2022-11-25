module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // jsx是否必须引入react
    indent: [2, 2], // 代码缩进
    'react/jsx-indent': [2, 2], // 代码缩进
    'react/jsx-indent-props': [2, 2], // 代码缩进
    'object-curly-spacing': ['error', 'never'], // 对象前后空格
    'react/jsx-curly-spacing': [ // jsx {}前后空格
      2,
      {when: 'never', attributes: {allowMultiline: false}, children: true},
    ],
    'react/state-in-constructor': [0], // state必须是否写在constructor中
    'arrow-body-style': ['error', 'as-needed'], // 单行表达式函数是否必须为同行箭头函数
    'max-len': ['error', {code: 100}], // 每行长度
    'react/destructuring-assignment': [2, 'always'], // jsx 中的变量必须解构
    'jsx-a11y/no-noninteractive-element-interactions': [0], // 非交互元素是否可以设置事件监听
    'jsx-a11y/no-static-element-interactions': [0], // 非交互元素是否可以设置事件监听
    'jsx-a11y/click-events-have-key-events': [0], // 点击事件是否必须带键盘事件
    'react/no-unknown-property': [0], // dom是否可以使用未知属性
    'no-unused-vars': [1], // 对定义了未使用的值进行警告
  },
};
