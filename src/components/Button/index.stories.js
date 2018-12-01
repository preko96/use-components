import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'
import Button from './'

const stories = storiesOf('Button', module)

stories.add('with a button', () => {
    const children = text('Text', 'default')
    return <Button>{children}</Button>
})
