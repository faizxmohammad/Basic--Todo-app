import React, { Component } from "react";


export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        // { task: "check mails", id: 1 },
        // { task: "read article", id: 2 },
        // { task: "Pickup kids at 5pm thrusday", id: 3 },
      ],
      currentTask: "",
    };
  }

 // componentDidUpdate(prevState) {
   // if (prevState.tasks !== this.state.tasks) {
   //   localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
   // }
  //}

  //componentDidMount() {
  //  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    //if (storedTasks) {
   //   this.setState({ tasks: storedTasks });
  //  }
  //}


  handleChange = (e) =>{
    this.setState({
      currentTask:e.target.value
    })

  }
  

  handleSubmit = () =>{
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.currentTask, id:this.state.tasks.length + 1}],
      currentTask:''
    })

  }


  handleDelete = (id) =>{
    let newArray = this.state.tasks.filter((taskObj) =>{
      return taskObj.id != id
    });
    this.setState({
     tasks:[...newArray]
    })

  }
 
  render() {
    console.log("render this")
    return (
	<div> 
		<h1 style={{textAlign:'center'}}>BASIC TODO APP</h1>
      	<div style={{display:'flex',justifyContent:'center',alignItens:'center',marginTop:'3rem'}} >
        		<input type="text" value = {this.state.currentTask} onChange={this.handleChange} placeholder="Add your todo here..."></input>
        		<button onClick={this.handleSubmit} style ={{marginLeft:'1rem'}}>Add Todo</button>
        		<ul>
          			{this.state.tasks.map((taskObj) => (
            			<li key={taskObj.id}>
              			<p>{taskObj.task}</p>
              			<button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
            			</li>
          			))}
        		</ul>
      	</div>
	</div>
    );
  }
}
