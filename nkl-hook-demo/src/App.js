import React from 'react'
import NklUseContext from './components/NklUseContext'
import NklUseState from './components/NklUseState'
import NklUseEffect from './components/NklUseEffect'
import "./App.css"

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Nguyen Khanh Linh - Hook</h1>
      <hr/>
      <NklUseState/>
      <hr/>
      <NklUseEffect/>
      <hr/>
      <NklUseContext/>
      
    </div>
  )
}
