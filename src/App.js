import React, { useState,Component,useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Split from './Splitting/Split'

//const app =props=> {
class App extends Component{
  
  state =({
    persons: [
      {id:"abc" ,name: "Souvik", age: 28},
      /*{id:"def" ,name: "Himu", age: 40},
      {id:"ghi" ,name: "Nunu", age: 10}*/
    ],
    showHidden: true,
    userInpur : "",
    showEntire: true
  })

  exampleHandler =(event)=>{

    this.setState({
      userInpur : event.target.value
    })
  }

 /* buttonHandler = (newName)=>
  this.setState({
    persons: [
      {name: newName, age: 28},
      {name: "Himu", age: 40},
      {name: "Nunu", age: 10}
              ],
              showHidden: true
            })*/
  newNameChangeHandler =(bal,id)=>{

          const personIdx = this.state.persons.findIndex(x =>{
            return x.id === id;
          }); //getting index match where to update
          const person = { 
            ...this.state.persons[personIdx]
          } // getting person object of that index
          person.name = bal.target.value; //getting value from even
          const persons = [...this.state.persons]; // creating new copy of original list
          persons[personIdx] = person; //assiging new value to the desired index i.e. 'person' object has updated value

    this.setState({

      persons: persons  
    })
    
 }
  toggleElements =()=>
  {
    const val=this.state.showHidden;
    this.setState({
      showHidden : !val
    })
  }
  deletePersonHandler=(index)=>{
      //const updatePerson = this.state.persons.slice(); //copying entire state of array to 'updatePerson' by slice()
      const updatePerson = [...this.state.persons]; //same as abouve, spread operator, ES6 feature
      updatePerson.splice(index,1);
      this.setState({
        persons: updatePerson
      });
  }

  toggleEntire =()=>{
    const val = this.state.showEntire;
    this.setState({
      showEntire: !val
    })
  }

  render(){

    let p =null;
    let q=null;
    if(this.state.showEntire == true){
    if(this.state.showHidden===true){
      p=(
        <div>
          {
            this.state.persons
            .map((v) =>{
                return <Person name={v.name} age={v.age} click={()=>this.deletePersonHandler(v.id)}
                key={v.id} change={(event)=> this.newNameChangeHandler(event,v.id)}/>
              }
              
            )
          }
        </div>
      );
      }
    }

    


    return (
      <div className="App">
        <button onClick={this.toggleEntire}>ToggleEntire</button>
        {q}
        <h1>Hi, I am react app generator!!!!!!!</h1>
        
        <button onClick={this.toggleElements}>Toggle</button>
        {p}
        <p>
          <input type="text" value={this.stateuserInpur} onChange={this.exampleHandler}/>
        <p>{this.state.userInpur}</p>
        <Validation inputLength = {this.state.userInpur.length}/>
        </p>
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
