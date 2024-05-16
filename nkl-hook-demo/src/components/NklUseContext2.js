import React, { useContext } from 'react'
import { ThemeContext } from './NklUseContext'

export default function NklUseContext2() {
    const theme = useContext(ThemeContext);

  return (
    <div className={theme }>
      <h2>NklUseContext2</h2>
      <p>
        <b>2210900035</b>
        <b>Nguyen Khanh Linh</b>
        <i>K22CNT3</i>
      </p>
    </div>
  )
}
