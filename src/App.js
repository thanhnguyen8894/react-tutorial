// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import TodoItem from "./components/todoItem/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      // { title: "Nhậu", isDone: true },
      // { title: "Nhậu nữa" },
      // { title: "Nhậu mãi" },
    ];
  }
  render() {
    return (
      <div className="App">
        <h2>To do list</h2>

        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}

        {this.todoItems.length === 0 && "Éo có gì làm"}
      </div>
    );
  }
}

export default App;
