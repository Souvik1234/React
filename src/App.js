import React, { useState,Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


//const app =props=> {
class App extends Component{

  state =({
    persons: [
      {name: "Souvik", age: 28},
      {name: "Himu", age: 40},
      {name: "Nunu", age: 10}
    ],
    showHidden: true
  })

 /* buttonHandler = (newName)=>
  this.setState({
    persons: [
      {name: newName, age: 28},
      {name: "Himu", age: 40},
      {name: "Nunu", age: 10}
              ],
              showHidden: true
            })*/
  /*newNameChangeHandler =(bal)=>
  this.setState({
    persons: [
      {name: "Souvik", age: 28},
      {name: bal.target.value, age: 40},
      {name: "Nunu", age: 10}
              ]
            })*/
  toggleElements =()=>
  {
    const val=this.state.showHidden;
    this.setState({
      showHidden : !val
    })
  }

  render(){

    let p =null;
    if(this.state.showHidden===true){
      p=(
        <div>
          {
            this.state.persons
            .map(v =>{
                return <Person name={v.name} age={v.age}/>
              }
              
            )
          }
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I am react app generator!!!!!!!</h1>
        <button onClick={this.toggleElements}>Toggle</button>
        {p}
      </div> 
    );
    }
}
  /* const [normal, setUpdated] = useState({
      persons: [
        {name: "Souvik", age: 28},
        {name: "Himu", age: 40},
        {name: "Nunu", age: 10}
                ]
    });

    //const [otherState, someotherState] =useState('Some Demo Example!!!');

    //console.log(otherState,someotherState);
    console.log(normal);
    const buttonHandler =(newName)=>{
      setUpdated({ 
        persons: [
        {name: newName, age: 28},
        {name: "Himu", age: 40},
        {name: "Nunu", age: 10}
                ]
      
    });
    }
  
    return (
      <div className="App">
        <h1>Hi, I am react app generator!!!!!!!</h1>
        <button onClick={buttonHandler}>Click Me!</button>
        <Person name={normal.persons[0].name}  age={normal.persons[0].age} 
        click={()=> this.buttonHandler('Souvik!!!!')}/>
        <Person name={normal.persons[1].name} age={normal.persons[1].age}>Hobbies: Racing</Person>
        <Person name={normal.persons[2].name} age={normal.persons[2].age}/>
      </div> 
    );
  }*/


export default App;
