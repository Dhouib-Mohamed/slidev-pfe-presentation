import type {
  Preset,
} from 'unocss'
import { fonts, rules, shortcuts, theme, typography } from '@alvarosabu/ui'
import {
  defineConfig,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme,
  shortcuts,
  rules,
  presets: [
    presetWebFonts(fonts) as unknown as Preset,
    presetTypography(typography) as unknown as Preset,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
