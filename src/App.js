import React from 'react';

import Header from './features/Header.js';
import Section1 from './features/section1.js';
import Section2 from './features/section2.js';
import Section3 from './features/Section3.js';
import Section4 from './features/section4.js';
import Section5 from './features/section5.js';
import Bari from './app/chart.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div id="main">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Section4 />
      <div id="main">
        <Section5 />
      </div>

    </div>
  );
}

export default App;
