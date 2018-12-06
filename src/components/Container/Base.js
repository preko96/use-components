import styled from 'styled-components'

function eitherBool(value, trueValue = 1, falseValue = 0) {
	if (typeof value === 'boolean') return value ? trueValue : falseValue
	return value
}

function standard(props) {
	const { horizontalPadding, verticalPadding, padding } = props
	const horizontal = eitherBool(horizontalPadding, '.75rem')
	const vertical = eitherBool(verticalPadding, '.75rem')
	const padder = eitherBool(padding, '.75rem')

	return {
		margin: '0 auto',
		position: 'relative',
		background: props.background || 'none',
		paddingLeft: horizontal || padder || 0,
		paddingRight: horizontal || padder || 0,
		paddingTop: vertical || padder || 0,
		paddingBottom: vertical || padder || 0,
	}
}

export default styled.div(standard)
