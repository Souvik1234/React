import React,{useEffect} from 'react';
const person = (props) =>{
    useEffect(()=>{
        console.log('[useEffect] in Person');
        setTimeout(()=>{
            alert('Data Saved')
        },1000) 
    },[])

    return (
    <div>
    <p onClick={props.click}>I'm a {props.name} & I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name}/>
    
    </div>
        
    );
}

export default person;