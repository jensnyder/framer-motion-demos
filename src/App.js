import React, { useState } from 'react';
import './App.css';
import { Animate } from './Demos/Animate';
import { Keyframes } from './Demos/Keyframes';
import { Gestures } from './Demos/Gestures';
import { Drag } from './Demos/Drag';
import { Variants } from './Demos/Variants';
import { SVG } from './Demos/SVG';
import { Exit } from './Demos/Exit';
import { MotionValues } from './Demos/MotionValues';


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
        <li className="demo-item" onClick={() => setDemo(8)}>MotionValues</li>
      </ul>
      <section className="demo-area">
        {demo === 1 && <Animate />}
        {demo === 2 && <Keyframes />}
        {demo === 3 && <Gestures />}
        {demo === 4 && <Drag />}
        {demo === 5 && <Variants />}
        {demo === 6 && <SVG />}
        {demo === 7 && <Exit />}
        {demo === 8 && <MotionValues />}
      </section>
    </>
  );
}

export default App;
