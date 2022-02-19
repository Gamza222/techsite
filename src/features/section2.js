import React from 'react';
import './assets/section2.css';

function Section2() {
  return (
    <div id='section2'>
        <h3 id="section2__title2">Our Customer Seeks To:</h3>
        <ul id="section2__list" className="list">
        <li id = "quarter-item" className="col-12 col-sm">
        <div className="itm">
        <i>
        <img alt="groving icon" src="https://reintech.io/assets/home_page/_src/icons/groving_icon-c24071698c0e42a4167f8f912f3332b0a049188968eca12e320e99bd76f55dea.svg" />
        </i>
        <span>Grow their product and company</span>
        </div>
        </li>
        <li id = "quarter-item" className="col-12 col-sm">
        <div className="itm">
        <i>
        <img alt="technology stack icon" src="https://reintech.io/assets/home_page/_src/icons/technology_stack_icon-70f9f37940f2d1daaf9ec3f7081b61f8731ed900451dbaf5927256146a0d622e.svg" />
        </i>
        <span>Use Ruby and JavaScript technology stacks</span>
        </div>
        </li>
        <li id = "quarter-item2" className="col-12 col-sm">
        <div className="itm">
        <i>
        <img alt="web audience icon inactive" src="https://reintech.io/assets/home_page/_src/icons/web_audience_icon_inactive-d73f01fcaa6ec8efcdd1fa4f802fad1d84fd4af1b80b3bd1dd626d7711bd3f56.svg" />
        </i>
        <span>Hire remote developers on a rolling basis</span>
        </div>
        </li>

        </ul>
    </div>
  )
}

export default Section2;