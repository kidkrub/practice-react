import React , { Component } from 'react'

class ChildrenCmop extends Component {
    showAlert = () => {
        alert('this is function in children component')
    }
    render() {
        return (
            <div>Children Component</div>
        )
    }
}

export default ChildrenCmop