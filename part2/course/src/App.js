/*
const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const sum = parts.reduce((a, b)=>a+b)
  return (
    <h4>Total of {sum} exercises</h4>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    parts.map((part)=><Part part={part} />)
  )
}

const Course = ({ course }) => {
  if (course.id === 0) {
    return (
      <h1>{course.title}</h1>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts.map((elem)=>elem.exercises)} />
    </div>
  )
}
*/

import {Course} from './components/Course'

const App = () => {
  const courses = [
    {
      title: "Web Development Curriculum",
      id: 0
    },
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map((elem)=><Course course={elem} />)
}

export default App