import { createStitches } from '@stitches/react'
import { colors } from './tokens/colors'
import { fonts } from './tokens/fonts'

export const { styled, getCssText } = createStitches({
  theme: {
    colors,
    fonts,
  },
})
