import {Header} from './Header'
import {Content} from './Content'
import {Total} from './Total'

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

export {Course}