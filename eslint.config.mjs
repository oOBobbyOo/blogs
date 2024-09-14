import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,

    typescript: true,
    vue: true,

    jsonc: false,
    yaml: false,
  },
  {
    rules: {
      'vue/no-v-text-v-html-on-component': 'off',
      'no-extend-native': 'off',
      'no-prototype-builtins': 'off',
      'prefer-const': 'off',
      '@typescript-eslint/no-this-alias': 'off',
    },
  },
)
