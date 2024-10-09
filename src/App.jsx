import React from 'react'
import WeatherApp from './components/WeatherApp'

export default function App() {
  return (
    <>
    <div className='w-[100%] text-orange-400 text-center text-4xl font-semibold py-2'>
      <h1>Weather App</h1>
    </div>
    <WeatherApp/>
    </>
  )
}
// ngrok config add-authtoken 2fceptsaHPpGXb4htvyfl1pNtcS_6TenrL4tqgbfEyskiK2V2 
// ngrok http http://localhost:8080