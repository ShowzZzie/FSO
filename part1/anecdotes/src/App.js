import { useState } from 'react'

const RandomInt = (max) => {
  return (
    Math.floor(Math.random() * max)
  )
}

const MostVoted = (props) => {
  if (props.sum === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  if (props.max === 1) {
    return (
      <div>
        {props.anecdotes[props.index]}<br />
        This anecdote has {props.max} vote
      </div>
    )
  }

  return (
    <div>
      {props.anecdotes[props.index]}<br />
      This anecdote has {props.max} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const Vote = () => {
    const newpoints = [...points]
    newpoints[selected] += 1
    setPoints(newpoints)
  }
  
  const random = () => {
    const rand = RandomInt(anecdotes.length)
    return (
      setSelected(rand)
    )
  }

  const sum = points.reduce((a, b)=>a+b);
  const max = Math.max(...points);
  const index = points.indexOf(max);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      This anecdote has {points[selected]} points<br />
      <button onClick={Vote}>Vote</button>
      <button onClick={random}>Next Anecdote</button><br />
      <h1>Anecdote with the most votes</h1>
      <MostVoted sum={sum} max={max} index={index} anecdotes={anecdotes} />
    </div>
  )
}

export default App