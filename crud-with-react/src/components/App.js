import React from "react";
import "./css/to-do-list-css.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newtask: "",
      show: "All",
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
  /*Delete task from the list*/
  deleteTask = givenIndex => {
    let tempList = [];
    tempList = this.state.list;
    tempList.splice(givenIndex, 1);
    this.setState({ list: tempList });
    this.setState({ temp: tempList });
  };
  /*Change color of links when link is clicked */
  changeLinkColor = givenLinks => this.setState({ show: givenLinks });
  /*Change color of task when it has done*/
  isComplete = givenIndex => {
    let tempList = [];
    tempList = this.state.list;
    tempList[givenIndex].iscomplete = !tempList[givenIndex].iscomplete;
    this.setState({ list: tempList });
    this.setState({ temp: tempList });
  };
  /*Show all tasks that means showing completed and incompleted tasks */
  showAll = () => {
    this.setState({temp:this.state.list });
  }
  /*Show active tasks*/
  showActive = () => {
    let tempList = [];
    tempList = this.state.list;
    tempList = tempList.filter(element => element.iscomplete !== true);
    this.setState({ temp: tempList })
  };
  /*Show inactive tasks*/
  showCompleted = () => {
    let tempList = [];
    tempList = this.state.list;
    tempList = tempList.filter(element => element.iscomplete !== false);
    this.setState({ temp: tempList })
  };
  /*Change property of task (update:false to true) when task is clicked*/
  activateInput = (idx) => {
    let tempList = [];
    tempList = this.state.list;
    tempList[idx].update =true;
    this.setState({ list: tempList });
    this.setState({ temp: tempList });
  }
  /*Update specific task based on index*/
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
          <input
            
            onChange={this.inputData}
            placeholder="enter a new task"
            required
          />
          <button onClick={this.addTask}>Add </button>
        </div>
        <div className="list-box">
          <ul>
            {this.state.temp.map((e, idx) => {
              let task = !e.iscomplete ? "complete" : "undo";
              return (
                <li key={idx}>
                    <span  className={task} onClick = { () => this.activateInput(idx) }>{e.task}</span>
                    {
                      e.update===true ? <div> <input onChange = {this.inputData} type='text' placeholder='enter data to update'/><button onClick = { () => this.updateTask(idx)}>update</button></div>: ''
                     }
                  <br />
                  <button onClick={() => this.isComplete(idx)}> {task} </button>
                  <button onClick={() => this.deleteTask(idx)}> delete </button>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
        <div className='sort-buttons'>
          <h3>
            Show:
            <button
              className={this.state.show === "All" ? "active" : ""}
              onClick={() => {this.changeLinkColor("All"); this.showAll()}}
            >
              All
            </button>
            <button
              className={this.state.show === "Active" ? "active" : ""}
              onClick={() => {
                this.changeLinkColor("Active");
                this.showActive();
              }}
            >
              Active
            </button>
            <button
              className={this.state.show === "Completed" ? "active" : ""}
              onClick={() => {
                this.changeLinkColor("Completed");
                this.showCompleted();
              }}
            >
              Completed
            </button>
          </h3>
        </div>
      </div>
    );
  }
}
