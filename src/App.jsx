import 'bootstrap/dist/css/bootstrap.css';
import Left from './Left';
import Right from './Right';
import React, { useEffect, useState } from 'react';

function debounce(func, delay) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [wind, setWind] = useState();
  const [humid, setHumid] = useState();
  const [lat, setLat] = useState("52.52");
  const [long, setLong] = useState("13.41");
  const [city, setCity] = useState('');
  const [days, setDays] = useState([]);
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    if (lat && long) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
        .then(response => response.json())
        .then(data => {
          setCurrentWeather(data.current["temperature_2m"]);
          setTime(new Date(data.current["time"]).getHours().toString().padStart(2, '0') + ":" + new Date(data.current["time"]).getMinutes().toString().padStart(2, '0'));
          setWind(data.current["wind_speed_10m"]);
          setHumid(data.hourly.relative_humidity_2m[0]);
          setDate(new Date(data.current.time).getDate() + "." + (new Date(data.current.time).getMonth() + 1) + "." + new Date(data.current.time).getFullYear());
          setDays(data.hourly.time.filter((element, index)=>index%24 === 0).slice(0, 7));
          setDegrees(data.hourly.temperature_2m.filter((element, index)=>index%24 === 0).slice(0, 7))
        });
    }
  }, [lat, long]);
  console.log([degrees]);

  const handleCityChange = debounce((event) => {
    setCity(event.target.value);
  }, 300);

  useEffect(() => {
    if (lat && long) {
      fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c289308649df3d3fa54bb27cdeeef943&lat=${lat}&lon=${long}&format=json`)
        .then(response => response.json())
        .then(data => setCity(data.address.city || ''))
        .catch(error => console.error('Error fetching city:', error));
    }
  }, [lat, long]);

  useEffect(() => {
    if (city) {
      fetch(`https://us1.locationiq.com/v1/search.php?key=pk.c289308649df3d3fa54bb27cdeeef943&q=${city}&format=json`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            setLat(data[0].lat);  
            setLong(data[0].lon); 
          }
        })
        .catch(error => console.error('Error fetching location:', error)); 
    }
  }, [city]);

  return (
    <div className="app">
      <div className="container">
        <div className="content d-flex align-items-center">
          <div className="wrapper row w-100">
            <Left 
              currentWether={currentWeather} 
              wind={wind}
              humid={humid}
              date={date}
              city={city}
              days = {days}
              degrees = {degrees}
            />
            <Right  
              currentWether={currentWeather}
              time={time}
              wind={wind}
              humid={humid}
              handleCityChange={handleCityChange}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
