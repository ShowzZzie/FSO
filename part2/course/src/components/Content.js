import {Part} from './Part.js'

const Content = ({ parts }) => {
    return (
      parts.map((part)=><Part part={part} />)
    )
  }

export {Content}