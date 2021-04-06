import React from 'react';
import './Square.css'

const Square = (props) => {
  
    
    return(
       
     
        <button className='box' onClick={props.onClick}>{props.value}</button>
    )
}
export default Square;