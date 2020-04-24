import React from "react";


 class Task extends React.Component{
  constructor(){
    super();
    this.state = {
      newtask: ''
    }
  }
  /*Get data from user*/
  inputData = (given_task) => this.setState({newtask:given_task.target.value});
  /*Send data to parent*/
  sendTask = () => {
    this.props.addTask(this.state.newtask);
    this.setState({newtask:''});
  }
  render(){
    return(<div className = 'new-task'>
              <input placeholder = 'Enter a new task'value={this.state.newtask} onChange={this.inputData}/>
              <button onClick = {this.sendTask}> Add </button>
          </div>)
  }
}
export default Task;
