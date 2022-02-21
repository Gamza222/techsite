import React, {useState} from 'react';
import './assets/section5.css';

function Section5() {
  const [position, setPosition] = useState(false)
  window.addEventListener('DOMContentLoaded', (event) => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    
    document.addEventListener('scroll', event => {
      
      let elem = document.querySelector("#itm-chart");
      let offset = elem.getBoundingClientRect();
      console.log (offset.y);
      console.log(position)
      if (height <= 1500 && width <=1200 && height >= 1200 && width >= 1000) {
      if (offset.y <= 990) {
        setPosition(true);
      } else {
        setPosition(false);
      }} else if (height <= 900 && width <= 700) {
        if (offset.y <= 550) {
          setPosition(true);
        } else {
          setPosition(false);
        }} else if (height <= 1200 && width <=1100 && height >= 900 && width >= 700) {
          if (offset.y <= 690) {
            setPosition(true);
          } else {
            setPosition(false);
          }} else if (height <= width) {
            if (offset.y <= 690) {
            setPosition(true);
          } else {
            setPosition(false);
          }}
    })
  })
  const isActive = () => {
      if (position == true) {
        return 'active';
      } else {
        return '';
      }
  }



  return (
    <div id="section5">
      <div id="section5__container">
        <div className="row">
        <div className="col-12 col-md-6 my-auto" id="section5_1">
            <div id="itm-chart" className={`itm itm-chart ${isActive()}`}>
            <div className="left graph">
            <span className="range">$</span>
            <p className="txt">Local Developer</p>
            <div>Insurance</div>
            <div>Tax</div>
            <div>Salary</div>
            </div>
            <div className="right graph">
            <p className="txt">Offshore Developer</p>
            <div className="rfee">Agency's fee</div>
            <div>Developer's cost</div>
            </div>
            </div>
        </div>
        <div className="col-12 col-md-6" id="section5_2">
          <h3 className="section5__title">What does it cost?</h3>
          <p className='section5__description'>We are able to provide than most of the US or EU based agencies. There is no secrete souce: only taxes. We pay all the and ensurance locally thus reducing the tax bur.</p>
          <ul id="section5__list">
            <li className="section5__list-item">Transparent, fixed fees</li>
            <li className="section5__list-item">Seemless transactions - pay directly to developers</li>
            <li className="section5__list-item">Pay as you go fees - pay only for working hours</li>
          </ul>
        </div>
        <div class="col-12 col-md-6" id="section5_3">
          <div id="section5_3-container">
            <h3 className="section5__title">How Do I Start?</h3>
            <p className='section5__description'>Send us a message, and we'll contact you to discuss your hiring needs.</p>
            <a class="btn btn-primary" href="#section10">Get Started</a>
          </div>
          </div>
        <div className="col-12 col-md-6" id="section5_4">
          <img id="section5__image" alt="time report icon" src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        </div>
        

        
        </div>
        </div>
    </div>
  )
}

export default Section5;