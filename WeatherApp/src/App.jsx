import './assets/css/App.css';
import searchIcon from "./assets/images/search.svg";
import locationIcon from "./assets/images/Без_названия-removebg-preview.png";
import tempratureIcon from "./assets/images/temprature.png";
import dateIcon from "./assets/images/420be623f5308d75eac00b40df9c0c42.jpg";
import weatherIcon from "./assets/images/WeatherIcon.png";
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [search, setSearch] = useState({
    lon: 0,
    name: "Baku",
    humidity: 0,
    temp: 0,
    wind: 0,
    sunrise: 0,
    sunset: 0,
    icon: weatherIcon,
    date: 0
  });
  const [forecast, setForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [toggleday, setToggleDay] = useState(false);
  const [week, setWeek] = useState({ got: true });
  const dateMain = new Date(+(toggleday ? forecast?.dt?.toString() + "111" : search.date?.toString() + "111"));
  const sunrise = new Date(+(search.sunrise.toString() + "111"));
  const sunset = new Date(+(search.sunset.toString() + "111"));
  const catchInput = (e) => setSearch({ ...search, name: e.target.value });
  const toggleBtn = () => setToggle(prev => !prev);
  const toggleDay = () => setToggleDay(prev => !prev);

  useEffect(() => {

    if (toggleday) {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${search.lat}&lon=${search.lon}&appid=f0555f091b8f5f59afa590f6703acdc6&units=${toggle ? "imperial" : "metric"}`)
        .then(res => setForecast(res.data.list[3]))
    } else {
      setForecast([]);
    }

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${search.lat}&lon=${search.lon}&appid=f0555f091b8f5f59afa590f6703acdc6&units=${toggle ? "imperial" : "metric"}`)
      .then(res => setWeekForecast(res.data.list))

    const timeout = setTimeout(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search.name}&appid=f0555f091b8f5f59afa590f6703acdc6&units=${toggle ? "imperial" : "metric"}`)
        .then(res => setSearch({
          lon: res.data.coord.lon,
          lat: res.data.coord.lat,
          name: res.data.name,
          humidity: res.data.main.humidity,
          temp: res.data.main.temp,
          wind: res.data.wind.speed,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          date: res.data.dt,
          icon: res.data.weather[0].icon ? `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png` : weatherIcon
        }))
        .catch(res => setSearch({ name: "Nowhere", response: res.data }));
    }, 800);

    return () => clearTimeout(timeout);
  }, [toggle, search.name, toggleday, search.lat, search.lon]);

  let uniqueArr = [];
  weekForecast.map(item => {
    let day = new Date(+(item.dt + "000"));
    switch (day.getDay()) {
      case 0:
        item.dt_txt = "Sun";
        break;
      case 1:
        item.dt_txt = "Mon";
        break;
      case 2:
        item.dt_txt = "Tue";
        break;
      case 3:
        item.dt_txt = "Wed";
        break;
      case 4:
        item.dt_txt = "Thu";
        break;
      case 5:
        item.dt_txt = "Fri";
        break;
      case 6:
        item.dt_txt = "Sat";
        break;
      default:
        item.dt_txt = "";
        break;
    }
    uniqueArr.push({ temp: item.main.temp.toFixed(), date: item.dt_txt, icon: item.weather[0].icon });
  });

  let date = "";
  let newuniquie = uniqueArr.filter(item => {
    if (item.date !== dateMain.toString().slice(0, 3) && item.date !== date) {
      date = item.date;
      return item;
    }
  });

  console.log(date);

  if (search.date) {
    switch (dateMain?.getDay()) {
      case 0:
        week.got ? setWeek({ week: "Sun", got: false }) : week.week = "Sun";
        break;
      case 1:
        week.got ? setWeek({ week: "Mon", got: false }) : week.week = "Mon";
        break;
      case 2:
        week.got ? setWeek({ week: "Tue", got: false }) : week.week = "Tue";
        break;
      case 3:
        week.got ? setWeek({ week: "Wed", got: false }) : week.week = "Wed";
        break;
      case 4:
        week.got ? setWeek({ week: "Thu", got: false }) : week.week = "Thu";
        break;
      case 5:
        week.got ? setWeek({ week: "Fri", got: false }) : week.week = "Fri";
        break;
      case 6:
        week.got ? setWeek({ week: "Sat", got: false }) : week.week = "Sat";
        break;
      default:
        week.got ? setWeek({ week: "", got: false }) : week;
        break;
    }
  }

  return (
    <>
      <main className="container">
        <div className="mainWeather">
          <section className="forecast">
            <span onClick={toggleDay} style={{ textShadow: !toggleday ? "0px 0px 20px #fff" : "none" }}>Today</span>
            <span onClick={toggleDay} style={{ textShadow: toggleday ? "0px 0px 20px #fff" : "none" }}>Tomorrow</span>
          </section>
          <section className="searchContainer">
            <input type="text" className='search' placeholder='Search for the name of the city...' onKeyUp={catchInput} />
            <img src={searchIcon} alt="searchIcon" className='searchIcon' />
          </section>
          <section className="mainContainer">
            <header className="headerContainer">
              <p className='city'>{search.name ? search.name : "Baku"}<img src={locationIcon} alt="location" className='locationIcon' /></p>
              <div className='unit'>
                <span><sup>o</sup>C</span>
                <button className='unitBtn' onClick={toggleBtn} style={{ backgroundColor: toggle ? "rgb(0, 18, 200)" : "rgb(0, 18, 138)" }}>
                  <div className='ball' style={{ transform: toggle ? "translateX(152%)" : "translateX(0%)" }}></div>
                </button>
                <span><sup>o</sup>F</span>
              </div>
              <p className='date'>
                {dateMain.toLocaleString().slice(0, 10)} / {week.week}
                <img src={dateIcon} alt="dateIcon" className='dateIcon' />
              </p>
            </header>
            <article className='temprature'>
              <div className='tempUnit'>
                <img src={tempratureIcon} alt="tempratureIcon" className='tempratureIcon' />
                {forecast?.main?.temp ? forecast?.main?.temp.toFixed() : search.temp?.toFixed()} <sup>o</sup>{toggle ? "F" : "C"}
              </div>
              <img src={search.icon} width={150} />
            </article>
            <footer className='addInfo'>
              <div className="wind">Humidity - {toggleday ? forecast?.main?.humidity : search.humidity} %</div>
              <div className="wind">Wind - {toggleday ? forecast?.wind?.speed : search.wind} mph</div>
              {!toggleday && <div className="wind">Sunrise - {sunrise?.toTimeString().slice(0, 5)} AM</div>}
              {!toggleday && <div className="wind">Sunset - {sunset?.toTimeString().slice(0, 5)} PM</div>}
            </footer>
          </section>
        </div>
        <div className="restWeather">
          {
            newuniquie.map(item =>
              <div className="restItems" key={Math.random()}>
                <div>{item.date}</div>
                <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="icon" />
                <div className="line"></div>
                <p>{item.temp} <sup>o</sup> {toggle ? "F" : "C"}</p>
              </div>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App;
