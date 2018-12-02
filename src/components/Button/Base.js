import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Base({ children, ...props }) {
    const circle = props.shape === 'circle'
    return (
        <Styled {...props}>
            {circle && <CircleWrapper>{children}</CircleWrapper>}
            {!circle && children}
        </Styled>
    )
}

Base.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    shape: PropTypes.string,
    pressed: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
}

Base.defaultProps = {
    type: 'primary',
    size: 'normal',
}

const CircleWrapper = styled.div({
    position: 'absolute',
})

function background(props) {
    const { standard, standardDark, standardLight } = props.theme.colors
    const { type, hovered, pressed } = props
    const background = pressed
        ? standardDark[type]
        : hovered
            ? standardLight[type]
            : standard[type]

    return { background }
}

function outline(props) {
    const standardGhost = props.theme.colors.standardGhost
    const type = props.type || 'default'
    const outline = standardGhost[type]
    return props.selected && { boxShadow: `0 0 0 0.125em ${outline}` }
}

function pair(props) {
    const pair = props.theme.colors.pair
    const type = props.type || 'default'
    const color = pair[type]
    return { color }
}

function sizeProps(props) {
    const sizes = props.theme.sizes(1, 'em')
    const halfSizes = props.theme.sizes(0.5, 'em')

    const prop = props.size
    const size = sizes[prop]
    const halfSize = halfSizes[prop]
    return {
        fontSize: size,
        paddingLeft: size,
        paddingRight: size,
        paddingTop: halfSize,
        paddingBottom: halfSize,
    }
}

function shape(props) {
    const { shape } = props
    const sizes = props.theme.sizes(1, 'em')
    const prop = props.size
    const size = sizes[prop]

    return (
        shape === 'circle' && {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            position: 'absolute',
            paddingLeft: size,
            paddingRight: size,
            paddingTop: size,
            paddingBottom: size,
        }
    )
}

const standard = {
    borderRadius: 4,
    outline: 'none',
    border: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    paddingTop: '.375em',
    paddingBottom: '.375em',
    paddingLeft: '.75em',
    paddingRight: '.75em',
    transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
}

const Styled = styled.button(
    standard,
    background,
    pair,
    outline,
    sizeProps,
    shape
)
