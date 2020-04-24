import React from "react";

class TaskList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show:'All'
    }
  }
  deleteTask = (index) => {
    let tempList = [];
    tempList = this.props.list;
    tempList.splice(index, 1);
    this.props.deleteTask(tempList);
  };
 isComplete = (index) => {
   let tempList = [];
   tempList = this.props.list;
   tempList[index].iscomplete = !tempList[index].iscomplete;
   this.props.isComplete(tempList);
 }
 showActive = () => {
   let tempList = [];
   tempList = this.props.list;
   tempList = tempList.filter(element => element.iscomplete !== true);
   this.props.showActive(tempList);
 }
 showCompleted = () => {
   let tempList = [];
   tempList = this.props.list;
   tempList = tempList.filter(element => element.iscomplete !== false);
   this.props.showCompleted(tempList);
 }
 changeLinkColor= (change_color) => this.setState({show:change_color});
 showAll = () => this.props.showAll(this.props.list);
  render(){

    return(<div className = 'box-button-list'>
            <div className = 'list-box'>
                  <ul>
                   {
                     this.props.templist.map((e, idx) =>{
                       let task = !e.iscomplete ? "complete" : "undo";
                       return(
                           <li key={idx}>
                             <span className={task}>{e.task}</span>
                             <br />
                             <button onClick = {() => this.deleteTask(idx)}>Delete</button>
                             <button onClick = {() => this.isComplete(idx)}>{task}</button>
                             <hr/>
                           </li>)
                      })
                   }
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
          </div>);
  }
}
export default TaskList;
