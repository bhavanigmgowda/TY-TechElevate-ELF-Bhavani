import React, { Component } from 'react'

export default class Refs extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    handleClick = () =>{
        console.log(this.myRef.current.type)
        // this.myRef.current
/* 
        this.myRef.current.type = 'date';
        this.myRef.current.type = 'password'; */
        this.myRef.current.focus()

    }
    render() {
        return (
            <div>
                <input style={{margin:'20px'}} type="text" ref={this.myRef}/>
                {/* <input type="text" ref={this.myRef}/> */}

                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
