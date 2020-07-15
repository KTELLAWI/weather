import React, {Component} from 'react'
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';
import  { useState } from 'react' 
import Weather from '../src/waffle.jp;



//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44

//http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

class App extends Component {

  state={
    tem:'',
    city:'',
    country:'',
    humdity:'',
    descrp:'',
    error:''

  }
 

  gwtWeather = async (e)=>{
    e.preventDefault()
   // const ddd="cairo";
   // const API_KEY = "0c882a21246d47da21cd47a9518e9bd5";
   //const ww = e.target.elements.city.value;
    //const wwww = e.target.elements.country.value;

   // axios.get('http://api.openweathermap.org/data/2.5/weather?q={ddd},egypt&appid=0c882a21246d47da21cd47a9518e9bd5')
   // .then(res =>{

   //   console.log(res)
    

    //const fff = e.target.elements.city.value;
    //const country1 = e.target.elements.country.value;
    
    const api = await fetch('http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=0c882a21246d47da21cd47a9518e9bd5');
    const data = await api.json();
    console.log(data);
   // console.log(ct,country1);

   // if(city && country){

      this.setState({
        tem:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humdity:data.main.humidity,
        error:''        
      })
      console.log(this.state);

   // }
   /* else {
      this.setState({
        tem:'',
        city:'',
        country:'',
        humdity:'',
        descrp:'',
        error:'please enter data'        
      })

    }

   */ 

  };

  gwtWeather1 = async (e)=>{
    e.preventDefault()
   // const ddd="cairo";
   // const API_KEY = "0c882a21246d47da21cd47a9518e9bd5";
   //const ww = e.target.elements.city.value;
    //const wwww = e.target.elements.country.value;

   // axios.get('http://api.openweathermap.org/data/2.5/weather?q={ddd},egypt&appid=0c882a21246d47da21cd47a9518e9bd5')
   // .then(res =>{

   //   console.log(res)
    

    //const fff = e.target.elements.city.value;
    //const country1 = e.target.elements.country.value;
    
    const api = await fetch('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=0c882a21246d47da21cd47a9518e9bd5');
    const data = await api.json();
    console.log(data);
   // console.log(ct,country1);

   // if(city && country){

      this.setState({
        tem:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humdity:data.main.humidity,
        error:''        
      })
      console.log(this.state);

   // }
   /* else {
      this.setState({
        tem:'',
        city:'',
        country:'',
        humdity:'',
        descrp:'',
        error:'please enter data'        
      })

    }

   */ 

  };


  render() {
    return (
    <div className="App">
     
     
      <Form getWeather={this.gwtWeather} getWeather1={this.gwtWeather1} />
     <Weather
       city={this.state.city}
       country={this.state.country}
       tempratur={this.state.tem}
       hum={this.state.humdity}
              />

    
    </div>
  );
    }
}

export default App;