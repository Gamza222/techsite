import React from 'react';

import Header from './features/Header.js';
import Section1 from './features/section1.js';
import Section2 from './features/section2.js';
import Section3 from './features/Section3.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <Section1 />
        <Section2 />
        <Section3 />

      </div>

    </div>
  );
}

export default App;
