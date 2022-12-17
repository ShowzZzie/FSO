const Country = ({ country }) => {
    console.log('hello')
    console.log(country)
    return (
      <div>
        <h1>{country.name}</h1>
        <b>Capital:</b> {country.capital}<br />
        <b>Area:</b> {country.area}<br />
        <h2>Languages</h2>
        {Object.values(country.languages).map((elem) => <li>{elem}</li>)}<br/>
        <img src={country.flags.png} alt="Flag" />
      </div>
    )
  }

  export {Country}