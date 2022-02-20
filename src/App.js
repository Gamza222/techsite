import React from 'react';

import Header from './features/Header.js';
import Section1 from './features/section1.js';
import Section2 from './features/section2.js';
import Section3 from './features/Section3.js';
import Section4 from './features/section4.js';
import Section5 from './features/section5.js';
import Section6 from './features/section6.js';
import Section7 from './features/section7.js';
import Section8 from './features/section8.js';
import Section9 from './features/section9.js';
import Section10 from './features/section10.js';
import SectionFooter from './features/sectionfooter.js';
import Bari from './app/chart.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Section4 />
      <div className="main">
        <Section5 />
      </div>
      <Section6 />
      <div className="main">
      <Section7 />
      </div>
      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  );
}

export default App;
