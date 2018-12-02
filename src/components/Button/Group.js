import styled from 'styled-components'
import Base from './Base'

// borderTopLeftRadius: 0,
// borderTopRightRadius: 0,
// borderBottomRightRadius: 0,
// borderBottomLeftRadius: 0,

function children(props) {
	return {
		[`${Base}`]: {
			borderRadius: 0,
			marginLeft: props.gapless ? 0 : 1,
		},
		[`${Base}:first-child`]: {
			borderTopLeftRadius: 4,
			borderBottomLeftRadius: 4,
		},
		[`${Base}:last-child`]: {
			borderTopRightRadius: 4,
			borderBottomRightRadius: 4,
		},
	}
}

function standard(props) {
	return { marginLeft: props.gapless ? 0 : -1 }
}

export default styled.div(standard, children)
