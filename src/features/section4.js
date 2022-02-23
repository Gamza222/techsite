import React, {useState} from 'react';
import './assets/section4.css';

function Section4() {

    const [menu, setMenu] = useState(true)

  const handleChange = () => {
    setMenu(!menu);
  }

  const showMenu = () => {
    if (menu == true) {
      return 'btn';
    }
    else {
      return 'btn-show';
    }
  }
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
        <div className="collapse" id="chatCollapse">
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">Should I pay anything upfront?</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">We charge nothing upfront. We charge after you hire a developer 😄</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">Can I sign an additional agreement with the developer, NDA, for example?</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">Yes 😎</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">I might need a specific role in my team, like QA or DevOps</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">We can cover that too👏</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">What about loyalty? I want developers to be a part of my team.</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">You can work with developers immediately and can negotiate directly. We provide you with services such as risk-free recruiting, safe contracting, and even payroll assistance 🙏</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">As a mediator, we act as requested for both you and the developer.</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">How are you different from other talent platforms? 😄</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">We offer transparency for our clients and our developers, allowing us to connect you with great developers, getting the most for your money.</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">Developers earn without a middleman taking a cut. Thus, only the best developers are joining our platform 🤩</p>
        </li>
        <li class="message">
            <div class="message-circle"></div>
            <p class="message-text">What is your business model?</p>
        </li>
        <li class="answer">
            <div class="answer-circle"></div>
            <p class="answer-text">We charge a fixed fee on top of what the developer earns. It is around 10%.</p>
        </li>
        
        
        <a class="btn btn-outline-light" id="write-to_us-button"  href="#section10">Write to Us</a>
        </div>
        </ul>
        <a aria-controls="chatCollapse" aria-expanded="false" 
        data-toggle="collapse" role="button" href="#chatCollapse" class={`${showMenu()} btn-outline-light`} onClick={handleChange}>Show conversation</a>
        </div>
    </div>
  )
}

export default Section4;