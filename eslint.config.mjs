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
)
