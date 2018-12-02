import React from 'react'
import Base from './Base'

export default class Button extends React.Component {
    render() {
        return <Base {...this.props} />
    }
}
