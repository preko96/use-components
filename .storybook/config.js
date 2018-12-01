import { configure, addDecorator } from '@storybook/react'
import { setConsoleOptions } from '@storybook/addon-console'
import { withInfo } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import '@storybook/addon-console'

const req = require.context('../src', true, /stories\.js$/)

addDecorator(withInfo)
addDecorator(checkA11y)
addDecorator(withKnobs)

setConsoleOptions({
    panelExclude: [],
})

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
