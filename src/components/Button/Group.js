import styled from 'styled-components'
import PropTypes from 'prop-types'
import Base from './Base'

const Group = styled.div(standard, children)
export default Group

Group.propTypes = { gapless: PropTypes.bool }

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
