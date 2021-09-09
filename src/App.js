import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        newTask: "",
        tasks: []
     }
  }
handleTaskChange = (event) => {
        this.setState({
           newTask: event.target.value,
        })
}
handleSubmit = (event) => {
   this.tasks.forEach(task => {
      this.task.push(this.newTask); //dónde va esto???
   });
   event.preventDefault();
}
render() {
     return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <h1 className="title">
            Hi, I'm Varinia <span aria-label="emoji" role="img">👋</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTask}
                  onChange={this.handleTaskChange}
                  type="text"
                  className="new-task"
            />
         
         </form>
      <h2>{this.state.newTask}
      </h2>
         {this.state.tasks.map(task => <div className="task-container">
                                          <h2 className="task">{task}</h2>
                                          </div>
                                 )
            }
        </div> 
      </header>
    </div>
    
     );
  };
}

  


export default App;
