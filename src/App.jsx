import React, { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(5);
  const update = () => {
    setCounter(counter+5);
  }

  const decrease = () => {
    setCounter(counter-5);
  }
  return (
    <div>
      <h1>น้ำสมุนไพรไว้ใจผม</h1>
      <h2>ขวดละ {counter} บาท
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
      </h2>
      <p>5 ขวด{counter*5} บาท</p>
      <p>10 ขวด {counter*10} บาท</p>
      <p>15 ขวด {counter*15} บาท</p>
      <p>20 ขวด {counter*20} บาท</p>
    </div>
  )
}

export default App