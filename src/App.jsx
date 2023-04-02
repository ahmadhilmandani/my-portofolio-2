import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './my_util/Button'
import { Number } from './my_util/Number'

function App() {
  return (
    <div className='w-full bg-red-50'>
      <Button>halo react button</Button>
      <Number>1</Number>
      <Number>2</Number>
      <Button size={'sm'} className="mt-10">contact</Button>
    </div>
  )
}

export default App
