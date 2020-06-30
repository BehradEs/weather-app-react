import React, { Component } from 'react';
import './App.css';

import {Form} from "./component/Form/form"
import {Heading} from "./component/Heading/heading"
import {Weather} from './component/weather/weather'



const API_KEY="630cc5d4c04f164c3c6f0366c2420642"

class App extends React.Component{

  state={
    city:"",
    country:"",
    temperature:'null',
    humidity:'null',
    description:'null',
    error:'null'
    
  }
  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data= await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
        city:data.name,
        country:data.sys.country,
        temperature:data.main.temp,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:"",
      })
    }else{
      this.setState({
        city:"",
        country:"",
        temperature:'null',
        humidity:'null',
        description:'null',
        error:'please enter value'
      })
    }
  };



  render(){
    return(
    <div className="App">
      <Form getWeather={this.getWeather}/> 
      <Heading />
      <Weather  
      city={this.state.city}
      country={this.state.country}
      temperature={this.state.temperature}
      humidity={this.state.humidity}
      description={this.state.description}
      />
    </div>
    )
   
  }
}


export default App;
