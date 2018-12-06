import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, number, boolean, color } from '@storybook/addon-knobs'
import Base from './Base'

const Container = Base

const stories = storiesOf('Container', module)

stories.add('container', () => {
	const pBool = boolean('Padding', false)
	//const padding = number('Padding', 0)
	const background = color('Background', 'none')
	return (
		<Container padding={pBool} background={background}>
			Hello
		</Container>
	)
})
