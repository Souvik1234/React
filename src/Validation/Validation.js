import React from 'react';

const validate=(props)=>{

    let msg ="";
    
    if(props.inputLength > 5){
        msg = "Text large enough";
    }
    else{
        msg = "Text short enough"; 
    }
    return (

    <div>{msg}</div>
    )
}

export default validate;