import React, { Fragment } from 'react';

const Form = (props)=> {
  
  return ( 
    <div>

    <button className="btn btn-primary btn-lg btn-block" onClick={props.getWeather}> Get WEATHER for EGYPT </button>
    <button  className="btn btn-primary btn-lg btn-block"  onClick={props.getWeather1}> Get WEATHER for UK </button>
    
    </div>

  )     




}
    
export default Form;
