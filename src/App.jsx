import * as React from 'react'
import styles from './App.module.css'
import Slider from './components/Slider'
import { initialValue, reducer } from './utils/reducer'

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialValue)

  const handleDecrement = () => dispatch({ type: 'decrement' })
  const handleIncrement = () => dispatch({ type: 'increment' })
  const handleReset = () => dispatch({ type: 'reset' })
  const handleUpdateStep = step => dispatch({ type: 'updateStep', step: step })

  return (
    <>
      <h1>{state.count}</h1>
      <div>
        <div className={styles.buttonContainer}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleReset}>0</button>
        </div>
        <Slider min={1} max={10} handleUpdateStep={handleUpdateStep} />
      </div>
    </>
  )
}
