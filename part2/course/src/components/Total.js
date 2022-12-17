const Total = ({ parts }) => {
    const sum = parts.reduce((a, b)=>a+b)
    return (
      <h4>Total of {sum} exercises</h4>
    )
  }

export {Total}