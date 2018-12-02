import { configure, addDecorator } from '@storybook/react'
import { setConsoleOptions } from '@storybook/addon-console'
import { withInfo } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import '@storybook/addon-console'

import withStyleProvider from './withStyleProvider'

addDecorator(withInfo)
addDecorator(checkA11y)
addDecorator(withKnobs)
addDecorator(withStyleProvider)

setConsoleOptions({
    panelExclude: [],
})

function loadStories() {
    const req = require.context('../src', true, /stories\.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
