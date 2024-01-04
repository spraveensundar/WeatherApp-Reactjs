import React,{useState} from "react";
import axios from 'axios';

function App() {

  const[name,setName]=useState("")
  const [data,setData]=useState({
    name:"",
    celcius:"",
    speed:"",
    hum:"",
    climate:""

  });
  
  const handleClick = ()=>{
    if(name!==""){
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bb4578bc45ceab9d87939dd06c7724d6&units=metric`;
      axios.get(url)
      .then(res =>{
        console.log(res.data);
        setData({...data, celcius:res.data.main.temp, name:res.data.name, speed:res.data.wind.speed, climate:res.data.weather.description, hum:res.data.main.humidity})
      }).catch(err=>console.log(alert("Invalid Name")))
      setName("")
    }
  }

  

  return (
    <section id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">

          <div className="card">
          <div className="col-md-8">
           <div className="d-flex text-center">
               <input className="form-control" placeholder="Search place...." type="text" value={name} onChange={e=>setName(e.target.value)}/>
               <button className="btn btn-danger" onClick={handleClick}><i class="fa-solid fa-magnifying-glass"></i></button>
           </div>
            <div>
              <h1 className="data-name">{data.name}</h1>
              <h4 className="data-cel">{data.celcius}°</h4>
              <p className="data-weth">{data.climate}</p>
            </div>
            <div className="row">

            <div className="col text-center">
             <p  className="data-spd">Speed</p>
             <p className="data-spd">{data.speed} km/h <i class="fa-solid fa-wind"></i></p>
            </div>

            <div className="col text-center">
              <p className="data-humi">Humidity</p>
              <p className="data-hum"> {data.hum} % <i class="fa-solid fa-temperature-arrow-down"></i></p>
             
            </div>

            </div>  

             </div>
             
           

          </div>

          
          </div>
          </div>
        </div>
    </section>
  );
}

export default App;
