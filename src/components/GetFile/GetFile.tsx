import React, { Component, RefObject } from 'react'

class GetFile extends Component {
    fileInput:RefObject<HTMLInputElement> = React.createRef()
    handleClick = () => {
        console.log(this.fileInput.current?.files)
    }
    render() {
        return (
        <div>
            <input type='file' ref={this.fileInput} />
            <button onClick={this.handleClick}>Get File Path</button>
        </div>
        )
    }
}

export default GetFile