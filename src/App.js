import React, { useState } from 'react';
import './App.css';

function App() {
  const [Horizontal, setHorizontal] = useState(10)
  const [Vertical, setVertical] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  return (
    <div className="App">
        <div className="controls">
          <label>Horizontal Distance</label>
          <input type="range" min="-200" max="200" value={Horizontal} onChange={(e) => setHorizontal(e.target.value)}/>
          <label>Vertical Distance</label>
          <input type="range" min="-200" max="200" value={Vertical} onChange={(e) => setVertical(e.target.value)}/>
          <label>Blur</label>
          <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)}/>
          <label>Color</label>
          <input type="color" value={Color} onChange={(e) => setColor(e.target.value)}/>
        </div>
        <div className="output">
          <div className='box' style={{boxShadow: `${Horizontal}px ${Vertical}px ${Blur}px ${Color}`}}>
            <p>box-shadow: {Horizontal}px {Vertical}px {Blur}px {Color}</p>
          </div>
        </div>
    </div>
  );
}

export default App;
