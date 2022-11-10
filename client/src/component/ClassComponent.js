import React, { Component } from "react";

class ClassTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: "red",
            width: "10px",
            height: "50px"
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>
                    color is {this.state.color}
                    width is {this.state.width}
                    height is {this.state.height}
                </h1>
            </React.Fragment>
        )
    }
}

export default ClassTest;