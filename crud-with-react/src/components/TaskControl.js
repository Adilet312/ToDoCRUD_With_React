import React from "react";
import Task from "./Task";
import TaskList from "./TaskList";
import "./css/to-do-list-css.css";
 class TaskControl extends React.Component{
  constructor(){
    super();
    this.state = {
      list:[],
      templist:[],
    }
  }
  /*Delete task from the list*/
  deleteTask = (updatedList) => {
    this.setState({list:updatedList});
    this.setState({templist:updatedList});
  }
  /*Toggle task that was done*/
  isComplete = (updatedList) => {
    this.setState({list:updatedList});
    this.setState({templist:updatedList});
  }
  /*Show all tasks*/
  showAll = () => this.setState({templist:this.state.list});
  /*Show active tasks*/
  showActive = (updatedList) => this.setState({templist:updatedList});
  /*Show copleted tasks*/
  showCompleted = (updatedList) => this.setState({templist:updatedList});
  /*Add a new task into list*/
  addTask = (given_task) => {
    let tempList = [];
    tempList = this.state.list;
    let temptask = { task: given_task, iscomplete: false };
    tempList.push(temptask);
    this.setState({ list: tempList });
    this.setState({ templist: tempList })
    this.setState({ newtask: "" });
  }
  render(){
    return(<div className = 'container'>
            <Task addTask = {this.addTask} />
            <TaskList showCompleted = {this.showCompleted} showActive = {this.showActive} showAll={this.showAll} deleteTask = {this.deleteTask} isComplete = {this.isComplete} list= {this.state.list} templist={this.state.templist}/>

          </div>);
  }
}
export default TaskControl;
