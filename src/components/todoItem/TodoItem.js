import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { item } = this.props;
    let className = "TodoItem";
    if (item.isDone) {
      className += "-done";
    }
    return (
      <div className={className}>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.options}</p>
      </div>
    );
  }
}

export default TodoItem;
