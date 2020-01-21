import React from 'react';

const splitAll =(props)=>{
    const style ={
        border : '1 px solid black'
    }
    let str ="";
    str = props.strV;
    return (
    
    
    <div style={style}>{
        str.split(" ")
    }</div>
    );
}

export default splitAll;