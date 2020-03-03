import React, { useState } from 'react';
import './App.css';
import { Animate } from './Demo1';
import { Keyframes } from './Demo2';
import { Gestures } from './Demo3';
import { Drag } from './Demo4';
import { Variants } from './Demo5';
import { SVG } from './Demo6';
import { Exit } from './Demo7';


function App() {

  const [demo, setDemo] = useState();
  return (
    <>
      <ul className="demo-list">
        <li className="demo-item" onClick={() => setDemo(1)}>Animate</li>
        <li className="demo-item" onClick={() => setDemo(2)}>Keyframes</li>
        <li className="demo-item" onClick={() => setDemo(3)}>Gestures</li>
        <li className="demo-item" onClick={() => setDemo(4)}>Drag</li>
        <li className="demo-item" onClick={() => setDemo(5)}>Variants</li>
        <li className="demo-item" onClick={() => setDemo(6)}>SVG</li>
        <li className="demo-item" onClick={() => setDemo(7)}>Exit</li>
      </ul>
      <section className="demo-area">
        {demo === 1 && <Animate />}
        {demo === 2 && <Keyframes />}
        {demo === 3 && <Gestures />}
        {demo === 4 && <Drag />}
        {demo === 5 && <Variants />}
        {demo === 6 && <SVG />}
        {demo === 7 && <Exit />}
      </section>
    </>
  );
}

export default App;
