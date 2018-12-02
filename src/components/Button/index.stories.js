import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import Base from './Base'
import Group from './Group'

const Button = Base

const stories = storiesOf('Button', module)

stories.add('Types', () => {
	const label = 'Types'
	const types = {
		Default: 'default',
		Primary: 'primary',
		Info: 'info',
		Success: 'success',
		Warning: 'warning',
		Danger: 'danger',
		Light: 'light',
		Dark: 'dark',
	}
	const defaultValue = 'primary'
	const selected = boolean('Focused', false)
	const hovered = boolean('Hovered', false)
	const pressed = boolean('Pressed', false)
	const block = boolean('Block', false)
	const type = select(label, types, defaultValue)
	return (
		<Button
			type={type}
			selected={selected}
			hovered={hovered}
			pressed={pressed}
			block={block}
		>
			Button
		</Button>
	)
})

stories.add('Sizes', () => {
	const label = 'Sizes'
	const sizes = {
		Tiny: 'tiny',
		Small: 'small',
		Normal: 'normal',
		Medium: 'medium',
		Large: 'large',
		Extra: 'extra',
	}
	const defaultValue = 'normal'
	const size = select(label, sizes, defaultValue)
	return <Button size={size}>Button</Button>
})

stories.add('Shapes', () => {
	const label = 'Shapes'
	const sizes = {
		Normal: 'normal',
		Circle: 'circle',
	}
	const defaultValue = 'circle'
	const shape = select(label, sizes, defaultValue)
	const text = shape === 'circle' ? 'B' : 'Button'
	return <Button shape={shape}>{text}</Button>
})

stories.add('Button.Group', () => {
	const gapless = boolean('Gapless', false)
	return (
		<Group gapless={gapless}>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</Group>
	)
})
