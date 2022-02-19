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
        <div class="col-12 col-md-6 my-auto" id="section5_1">
            <div id="itm-chart" class={`itm itm-chart ${isActive()}`}>
            <div class="left graph">
            <span class="range">$</span>
            <p class="txt">Local Developer</p>
            <div>Insurance</div>
            <div>Tax</div>
            <div>Salary</div>
            </div>
            <div class="right graph">
            <p class="txt">Reintech Developer</p>
            <div class="rfee">Reintech fee</div>
            <div>Developer's cost</div>
            </div>
            </div>
        </div>
        <div class="col-12 col-md-6" id="section5_2">
          <h3 id="section5__title">What does it cost?</h3>
          <p id='section5__description'>Ukrainian developers are cheaper than US or EU developers. Why? Salaries are lower, and you do not have to pay for insurance and tax. We offer:</p>
          <ul id="section5__list">
            <li class="section5__list-item">Transparent, fixed fees</li>
            <li class="section5__list-item">Seemless transactions - pay directly to developers</li>
            <li class="section5__list-item">Pay as you go fees - pay only for working hours</li>
          </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Section5;