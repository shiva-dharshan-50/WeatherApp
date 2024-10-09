import React, { useState } from 'react'
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear-sun.png';
import cloudy_icon from '../assets/cloudy.webp';
import drizzle_icon from '../assets/drizzle.webp';
import humidity_icon from '../assets/humidity.webp';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.webp';
import wind_icon from '../assets/wind.webp';

export default function WeatherApp() {

    let api_key="5ae159a039a66a55b4f0bbfd444b6892";
    const [element,setElement]=useState()
    const [temp,setTemp]=useState(0)
    const [location,setLocation]=useState('undefined')
    const [humidity,setHumidity]=useState(0)
    const [wind,setWind]=useState(0)

    const[icon,setIcon]=useState(rain_icon)
    const handlesearch=async(e)=>{
        e.preventDefault()
        try{
         let url=`https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`
        let res=await fetch(url);
        let data=await res.json();
        setLocation(data.name)
        setHumidity(data.main.humidity)
        setWind(Math.floor(data.wind.speed))
        setTemp(data.main.temp)
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
      {
        setIcon(clear_icon)
      }
      else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
      {
        setIcon(cloudy_icon)
      }
      else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
      {
        setIcon(drizzle_icon)
      }
      else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
      {
        setIcon(drizzle_icon)
      }
      else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
      {
        setIcon(rain_icon)
      }
      else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
      {
        setIcon(rain_icon)
      }
      else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
      {
        setIcon(snow_icon)
      }
      else{
        setIcon(cloudy_icon)
      }
        }
        catch(e){
            setLocation('undefined')
            setHumidity(0)
            setTemp(0)
            setWind(0)
            window.alert("city not found")
        }

    }
  return (
    <div className='mx-auto w-[90%] md:w-[30%] border-2 border-orange-400 shadow-[0px_0px_15px_orange] flex-1 rounded-md py-2 px-2 mt-[2pc] md:mt-[5pc] bg-black'>
        <form  onSubmit={handlesearch} className='w-[100%] mx-auto flex items-center justify-center pt-10'>
        <input type="text" placeholder='enter the city' className='py-2 w-[60%] px-4 rounded-sm text-base md:text-xl mx-2' onChange={(e)=>setElement(e.target.value)} />
        <button onClick={handlesearch} type='submit' className=' py-2 px-4 rounded-sm bg-orange-400 shadow-[0px_0px_10px_orange] text-white'>search!</button>
        </form>
        <div className='w-[100%] flex justify-center'>
            <img src={`${icon}`} className='w-[10pc]'></img>
        </div>
        <div className='w-[100%] flex items-center text-3xl font-semibold mt-2 flex-col'>
            <h2>{temp}°C</h2>
            {location && <p>{location}</p> }
        </div>
        <div className='w-[100%] flex justify-evenly mt-28'>
            <div>
                <p>Humidity</p><span className='font-semibold'>{humidity}%</span>
                <img src={`${humidity_icon}`}  className='w-16'></img>
            </div>
            <div>
                <p>wind speed</p><span className='font-semibold'>{wind}km/h</span>
                <img src={`${wind_icon}`}  className='w-20'></img>
            </div>
        </div>
    </div>
  )
}
