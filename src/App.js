import React, {useState} from 'react';

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
import About from './features/About.js';
import SectionFooter from './features/sectionfooter.js';
import Bari from './app/chart.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './features/image/arrow-top.svg';

  function App() {
    var [shows, setShows] = useState(true);
    var [showAb, setShowAb] = useState(false);
    const mybutton = document.querySelector("#myBtn");
    
    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    window.addEventListener('DOMContentLoaded', (event) => {
      document.addEventListener('scroll', event => {
      window.onscroll = function() {scrollFunction()};
      })

    })

 
  

    var showAbout = () => {
      console.log(showAb)
      if (showAb == true) {
        return 'Everything';
      } else {
        return 'Nothing';
      }
    }
    var showing = () => {
      if (shows == true) {
        return 'Everything';
      } else {
        return 'Nothing';
      }
    }

  

// When the user scrolls down 20px from the top of the document, show the button


    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    window.onscroll = function() {scrollFunction()};


  return (
    <div className="App">
      <div className={showAbout()}>
      <About  setShows={setShows} setShowAb={setShowAb}/>
      </div>
      <div className={showing()}>
      <div className="main">
        <Header setShows={setShows} setShowAb={setShowAb}/>
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
      <button onclick={topFunction()} id="myBtn" title="Go to top"><img id="myBtn-arrow"src={arrow}/></button>
      </div>
    </div>
  );
}

export default App;
