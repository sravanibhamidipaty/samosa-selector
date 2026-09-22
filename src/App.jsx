import './App.css';
import { useState } from 'react'

const App = () => {
const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(1);
const updateCount = () => {
  setCount(count + multiplier);
};

const buyDoubleStuffed = () => {
  if (count >= 10) {
    setMultiplier(2);
    setCount(count - 10);
  }
};

const buyPartyPack = () => {
  if (count >= 100) {
    setMultiplier(5);
    setCount(count - 100);
  }
};

const buyFullFeast = () => {
  if (count >= 1000) {
    setMultiplier(10);
    setCount(count - 1000);
  }
};

return (
  <div className="App">
    <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Samosa_1.jpg/1920px-Samosa_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210929062403" alt="samosa" onClick={updateCount}/>
    </div>
    <div className="container">
  <div className="upgrade">
    <h3>Double Stuffed 👯‍♀️</h3>
    <p>2x per click</p>
    <button onClick={buyDoubleStuffed}>Cost: 10 samosas</button>
  </div>

  <div className="upgrade">
    <h3>Party Pack 🎉</h3>
    <p>5x per click</p>
    <button onClick={buyPartyPack}>Cost: 100 samosas</button>
  </div>

  <div className="upgrade">
    <h3>Full Feast 👩🏽‍🍳</h3>
    <p>10x per click</p>
    <button onClick={buyFullFeast}>Cost: 1000 samosas</button>
  </div>
</div>
    </div>
)
}
export default App