import React from 'react';
import './assets/section8.css';
import person1 from './image/person2.png';
import person2 from './image/person3.png';

function Section8() {
  return (
    <div id="section8">
        <div className="main">
        <div className="section8__container">
        <h3 class="titles">Sample Candidates</h3>
        <p className="texts">Here are a few of the developers you could find in our database</p>
        <ul id="team">
            <li className="nigga nigga-left">
                <img src={person1} alt="" className="nig-image" />
                <div className="person-min">
                <a href="#" className="name">Alex</a>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Total experience</span>
                <p className="bloks-elem__text">10 years</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Location</span>
                <p className="bloks-elem__text">Mick, Belarus</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Stack</span>
                <p className="bloks-elem__text">JavaScript, Angular, Vue.js, React.js</p>
                </div></div>
            </li>
            <li className="nigga">
                <img src={person2} alt="" className="nig-image" />
                <div className="person-min">
                <a href="#" className="name">Andrei</a>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Total experience</span>
                <p className="bloks-elem__text">6 years</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Location</span>
                <p className="bloks-elem__text">Mick, Belarus</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Stack</span>
                <p className="bloks-elem__text">Ruby On Rails, React.js, Node.js, IOS</p>
                </div></div>
            </li>
            <li className="nigga">
                <img src={person1} alt="" className="nig-image" />
                <div className="person-min">
                <a href="#" className="name">Zhenia</a>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Total experience</span>
                <p className="bloks-elem__text">5,5 years</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Location</span>
                <p className="bloks-elem__text">Mick, Belarus</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Stack</span>
                <p className="bloks-elem__text">React.js, Node.js, Angular, IOS</p>
                </div></div>
            </li>
            <li className="nigga">
                <img src={person2} alt="" className="nig-image" />
                <div className="person-min">
                <a href="#" className="name">Kostia</a>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Total experience</span>
                <p className="bloks-elem__text">5 years</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Location</span>
                <p className="bloks-elem__text">Brest, Belarus</p>
                </div>
                <div className="nigga-text">
                <span class="bloks-elem__author-desc">Stack</span>
                <p className="bloks-elem__text">Ruby On Rails, JavaScript, AngularS</p>
                </div></div>
            </li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Section8;