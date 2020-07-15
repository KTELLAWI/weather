import React, { Fragment } from 'react'

const Weather = (props)=> {
  
    return (
      <Fragment> 
    <div class="card" ></div> 
    <img class="card-img-top" src="" alt="Card image cap" />

  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">
    {
         props.city && <p> CITY IS :{props.city}</p> 

       }
       {
         props.country && <p> COUNTRY IS : {props.country} </p>

       }
       {
         props.tempratur && <p> TEMPREATURE IS :{props.tempratur}</p>

       }
       {
         props.hum && <p>HUMIDITY IS : {props.hum}</p> 

       }


    </p>
  </div>

  </Fragment>
    )
  
}

export default Weather;