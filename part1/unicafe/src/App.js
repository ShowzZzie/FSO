import { useState } from 'react'

const StatisticLine = ({ text, value}) => {
  return (
    <>
      <td>{text}:</td>
      <td>{value}</td>
    </>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, all} = props

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr><StatisticLine text="Good" value={good} /></tr>
          <tr><StatisticLine text="Neutral" value={neutral} /></tr>
          <tr><StatisticLine text="Bad" value={bad} /></tr>
          <tr><StatisticLine text="All" value={all} /></tr>
          <tr><StatisticLine text="Average" value={(good - bad) / all}/></tr>
          <tr><StatisticLine text="Positive" value={good / all * 100 + "%"}/></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={(props.fun)}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allClicks = good + neutral + bad

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give your feedback</h1>
      <Button fun={handleGoodClick} text="Good" />
      <Button fun={handleNeutralClick} text="Neutral" />
      <Button fun={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={allClicks} />
      <br />
    </div>
  )
}

export default App
