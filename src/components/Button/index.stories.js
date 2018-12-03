import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import Base from './Base'
import Group from './Group'

const Button = Base

const stories = storiesOf('Button', module)

stories.add('default', () => {
	return <Button>Button</Button>
})

stories.add('hovered', () => {
	return <Button hovered={true}>Button</Button>
})

stories.add('pressed', () => {
	return <Button pressed={true}>Button</Button>
})

stories.add('selected', () => {
	return <Button selected={true}>Button</Button>
})

stories.add('block', () => {
	return <Button block={true}>Button</Button>
})

stories.add('types', () => {
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

	const type = select(label, types, defaultValue)
	return <Button type={type}>Button</Button>
})

stories.add('sizes', () => {
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

stories.add('shapes', () => {
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

stories.add('group', () => {
	const gapless = boolean('Gapless', false)
	return (
		<Group gapless={gapless}>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</Group>
	)
})

stories.add('lab', () => {
	const hovered = boolean('Hovered', false)
	const pressed = boolean('Pressed', false)
	const selected = boolean('Selected', false)
	const block = boolean('Block', false)
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
	const sizes = {
		Tiny: 'tiny',
		Small: 'small',
		Normal: 'normal',
		Medium: 'medium',
		Large: 'large',
		Extra: 'extra',
	}
	const shapes = {
		Normal: 'normal',
		Circle: 'circle',
	}
	const type = select('Type', types, 'default')
	const size = select('Size', sizes, 'normal')
	const shape = select('Shape', shapes, 'normal')
	return (
		<Button
			hovered={hovered}
			pressed={pressed}
			selected={selected}
			block={block}
			type={type}
			size={size}
			shape={shape}
		>
			Button
		</Button>
	)
})
