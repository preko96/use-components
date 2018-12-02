import React from 'react'
import Base from './Base'
import Group from './Group'

export default class Button extends React.Component {
	static Group = Group
	render() {
		return <Base {...this.props} />
	}
}
