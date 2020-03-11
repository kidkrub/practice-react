import React, { Component, RefObject } from 'react'

class Focus extends Component {
    textInput:RefObject<HTMLInputElement> = React.createRef()
    handleClick = () => {
        this.textInput.current?.focus()
    }
    render() {
        return (
            <div>
                <input ref={this.textInput} />
                <button onClick={this.handleClick}>Focus!</button>
            </div>
        )
    }
}

export default Focus