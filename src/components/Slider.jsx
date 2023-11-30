import * as React from 'react'
import styles from '../App.module.css'

export default function Slider({ min, max, handleUpdateStep }) {
  const [value, setValue] = React.useState(1)

  const handleChange = e => {
    const value = Number(e.target.value)
    setValue(value)
    handleUpdateStep(value)
  }

  return (
    <div className={styles.sliderContainer}>
      <input
        type='range'
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  )
}
