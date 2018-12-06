import styled from 'styled-components'

export default styled.div(standard, direction)

const standard = {
	display: 'flex',
	flex: 'auto',
	minHeight: 0,
}

const direction = props => ({ flexDirection: props.sider ? 'row' : 'column' })
