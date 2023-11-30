import * as React from 'react'
import styles from '../App.module.css'

export default function Slider() {
  const [value, setValue] = React.useState(1)

  const handleChange = e => {
    const value = Number(e.target.value)
    setValue(value)
  }

  return (
    <div className={styles.sliderContainer}>
      <input type='range' value={value} onChange={handleChange} />
      <span>{value}</span>
    </div>
  )
}
