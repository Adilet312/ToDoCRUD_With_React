import React from "react";
import "./css/to-do-list-css.css";

export default class Temp extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newtask: "",
      temp: [],

    };
  }
  /*Get task from the browser and set it to a newtask  state*/
  inputData = event => this.setState({ newtask: event.target.value });
  /*Get a new task from state and put that one to the list.*/
  addTask = () => {
    let tempList = [];
    tempList = this.state.list;
    let temptask = { task: this.state.newtask, iscomplete: false, update:false };
    tempList.push(temptask);
    this.setState({ list: tempList });
    this.setState({ temp: tempList });
    this.setState({ newtask: "" });
  };
  activateInput = (idx) => {
    let tempList = [];
    tempList = this.state.list;
    tempList[idx].update =true;
    this.setState({ list: tempList });
    this.setState({ temp: tempList });
  }
  updateTask = (idx) => {
    let tempList = [];
    tempList = this.state.list;
    let temptask = { task: this.state.newtask, iscomplete: false, update:false };
    tempList[idx] = temptask;
    this.setState({ list: tempList });
    this.setState({ temp: tempList });
    this.setState({ newtask: "" });
  }
  render() {
    return (
      <div className="App">
        <div className="new-task">
          <input value={this.state.newtask} onChange={this.inputData} placeholder="enter a new task"/>
          <button onClick={this.addTask}>Add </button>
        </div>
        <div className="list-box">
          <ul>
            {
                this.state.temp.map((e, idx) => {
                return (
                  <li key={idx}>
                    <span onClick = { () => this.activateInput(idx) }>{e.task}</span>
                    {e.update===true ? <div> <input onChange = {this.inputData} type='text' placeholder='enter data to update'/>
                     <button onClick = { () => this.updateTask(idx)}>update</button></div>: ''}
                    <hr />
                  </li>
                );
              })
          }
          </ul>
        </div>
      </div>
    );
  }
}
