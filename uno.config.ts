import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-black',
      'color-base': 'text-black dark:text-white',
      'border-base': 'border-[#8884]',
    },
    [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: ['i-logos-vue', 'i-logos-pinia', 'i-logos-vueuse', 'i-logos-nuxt-icon', 'i-logos-react', 'i-logos-react-router', 'i-logos-nextjs-icon', 'i-simple-icons-remix', 'i-logos-react-query-icon', 'i-simple-icons-recoil', 'i-logos-mobx', 'i-logos-redux', 'i-logos-react-spring', 'i-logos-unocss', 'i-logos-tailwindcss-icon', 'i-logos-windi-css', 'i-logos-pandacss-icon'],
})
