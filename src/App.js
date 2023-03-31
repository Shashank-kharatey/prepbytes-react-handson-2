// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state = {
    Name1 :"",
    Department :"",
    Rating :"",
    employee:[]


  };
 changeHandler=(e)=>{
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state)
  }

  submitHandler = (e)=>{
    e.preventDefault();
    console.log("click event")
    const empObj = {
      Name:this.state.Name1,
      Department : this.state.Department,
      Rating: this.state.Rating
    }
    const arr= this.state.employee;
    arr.push(empObj);
    this.setState({employee : arr})
  }

  render() {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
<div className='formdiv'>
  

        <form>
          <label htmlFor="Name1">Name:</label>
          <input className='name' type="text" name="Name1" value={this.state.Name1}  onChange={this.changeHandler}></input><br/>
          <label htmlFor="">Department:</label>
          <input className='name' type="text" name="Department" value={this.state.Department} onChange={this.changeHandler}></input><br/>
          <label htmlFor="">Rating:</label>
          <input className='name' type="number" name="Rating" value={this.state.Rating} onChange={this.changeHandler}></input><br/>
          <button id='btn' onClick={this.submitHandler} type="">Submit</button>
        </form></div>
        <div className='flex'>
          {this.state.employee.map((value,index)=>{
            return(
              <div className='box'> Name: {value.Name} | Department: {value.Department} | Rating:{value.Rating}</div>
            )

          })}
        </div>
      </div>
    )
  }
}