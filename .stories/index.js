import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

const styles = { textAlign: 'center' }
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>

storiesOf('Button', module)
    .addDecorator(CenterDecorator)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emojies', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ))
