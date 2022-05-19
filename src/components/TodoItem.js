import React, { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component{

    render(){
        return(
            <div>
            <p>{this.props.title}</p>
            <p>{this.props.options}</p>


            </div>   
        )
    }

}

export default TodoItem;