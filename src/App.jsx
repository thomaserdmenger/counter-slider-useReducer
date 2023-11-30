import * as React from 'react'
import styles from './App.module.css'

const initialValue = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement': {
      return {
        count: state.count - 1,
      }
    }
    case 'increment': {
      return {
        count: state.count + 1,
      }
    }
    case 'reset': {
      return {
        count: 0,
      }
    }
    default: {
      throw new Error(
        `Action of the following type is not available: ${action.type}`
      )
    }
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialValue)

  const handleDecrement = () => dispatch({ type: 'decrement' })
  const handleIncrement = () => dispatch({ type: 'increment' })
  const handleReset = () => dispatch({ type: 'reset' })

  return (
    <>
      <h1>{state.count}</h1>
      <div className={styles.buttonContainer}>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
    </>
  )
}
