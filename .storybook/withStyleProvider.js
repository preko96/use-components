import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

export default function withStyleProvider(storyFn) {
    return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
}
