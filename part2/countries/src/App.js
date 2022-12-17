import { useEffect, useState } from 'react'
import axios from 'axios'

// https://restcountries.com/v3.1/all

const Country = ({ country }) => {
  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState(0)
  const [wind, setWind] = useState(0)
  const [icon, setIcon] = useState('')

  const apikey2 = '459973f31fa3434433f7f5503333cb6f'
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apikey2}&units=metric`)
         .then(response => {
          console.log(response);
          setWeather(response.data);
          setTemp(response.data.main.temp);
          setWind(response.data.wind.speed);
          setIcon(response.data.weather[0].icon)});
  }, [country.capital])
  console.log(weather)
  console.log(icon)
  return (
    <div>
      <h1>{country.name}</h1>
      <b>Capital:</b> {country.capital}<br />
      <b>Area:</b> {country.area}<br />
      <h2>Languages</h2>
      {Object.values(country.languages).map((elem) => <li>{elem}</li>)}<br/>
      <img src={country.flags.png} alt="Flag" />
      <h2>Weather in {country.capital}</h2>
      <b>Temperature:</b> {temp}° Celsius<br />
      <img src={(`https://openweathermap.org/img/wn/${icon}@2x.png`)} alt="icon" /><br />
      <b>Wind:</b> {wind} m/s
    </div>
  )
}

const Display = ({ search, handleSearch }) => {
  console.log(search)

  if (search.length > 10) {
    if (search.length === 250){
      return
    }
    else {
      return (
        <div>Too many countries to display</div>
      )
    }
  }
  else if (search.length === 1) {
    console.log(search[0])
    return (
      <div>
        <Country country={search[0]} />
      </div>
      /*<div>
        <h1>{search[0].name}</h1>
        <b>Capital:</b> {search[0].capital}<br />
        <b>Area:</b> {search[0].area}<br />
        <h2>Languages</h2>
        {Object.values(search[0].languages).map((elem) => <li>{elem}</li>)}<br/>
        <img src={search[0].flags.png} alt="Flag" />
      </div>*/
    )
  }
  else if (search.length <= 10 && search.length >= 1) {
    return (
      search.map(elem => <div key={elem.name}>{elem.name}<button value={elem.name} onClick={handleSearch}>Show</button></div>)
    )
  }
}


const App = () => {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
         .then(response => {
          const temp = response.data
          setCountries(temp.map(({name, flags, area, languages, capital}) => ({
            name: (name.common), 
            flags, 
            area, 
            languages, 
            capital
          })))
         })
        }, [])

  console.log(countries)

  const handleSearch = (event) => {
    setFilter(event.target.value)
  }

  const search = countries.filter(country => 
    country.name.toString().toLowerCase().includes(filter.toString().toLowerCase())
  )

  return (
    <div>
      <input onChange={handleSearch} />
      <br />
      <Display search={search} handleSearch={handleSearch} />
    </div>
  )
}

export default App
