const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript',
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  plugins: ['vue'],
  rules: {
    'no-console':  isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',

    // vue
    'vue/html-closing-bracket-newline':            'off',
    'vue/html-self-closing':                       'off',
    'vue/multiline-html-element-content-newline':  'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line':                 'off',
    'vue/multi-word-component-names':              'off',
  },
};
