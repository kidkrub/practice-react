import React, { Component } from 'react'

type ButtonProps = {name:string}

class Button extends Component<ButtonProps> {
    render() {
        return (<button>{this.props.name}</button>)
    }
}

export default Button