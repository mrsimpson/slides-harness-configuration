import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'Inter',
        mono: 'Fira Code',
      },
    }),
  ],
})
