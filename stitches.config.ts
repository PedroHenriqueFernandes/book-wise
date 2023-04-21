import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors } from './src/styles/tokens/colors'
import { fonts } from './src/styles/tokens/fonts'
import { fontSizes } from './src/styles/tokens/font-sizes'
import { fontWeights } from './src/styles/tokens/font-weights'
import { lineHeights } from './src/styles/tokens/line-heights'
import { radii } from './src/styles/tokens/radii'
import { space } from './src/styles/tokens/space'

export const { styled, getCssText } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
