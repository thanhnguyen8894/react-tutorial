// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

// class App extends Component {
function App() {
  

  // constructor() {
  //   super();
    this.todoItems = [
      {title: "Nhậu"},
      {title: "Nhậu nữa"},
      {title: "Nhậu mãi"}
    ];
  // }

  // render() {
    return (
      <div className="App">
        <h2>To do lít</h2>

        {this.todoItems.map((item, index) => (
          <TodoItem key={index} title={item.title} />
        ))}

        {/* <TodoItem title="Nhậu" />
      <TodoItem title="Nhậu nữa" />
      <TodoItem title="Nhậu mãi" /> */}
      </div>
    );
  }
// }

export default App;
