import React from 'react';
import './assets/section4.css';

function Section4() {
  return (
    <div id="section4">
        <div class="section4__container">

        <h3 id="section4__container-title">Sounds Good, But What If...</h3>
        <ul id="message-container">
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">I want to hire just one developer?</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">Sure, most of our customers start with one developer. Some of them use 20 or more 😉</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">What if my developer does not perform?</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">We offer free developer substitution.</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">Can I have a test drive first?</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">Yes, you can start with a part-time hire and end the contract if you are unsatisfied</p>
        </li>
      
        </ul>
        </div>
    </div>
  )
}

export default Section4;