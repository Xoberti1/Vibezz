import React, {Component} from "react";

class Signin extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    formSubmit(event){
        event.preventDefault;
        this.setState({
            username: event.username,
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <input></input>
                    <input></input>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }

}