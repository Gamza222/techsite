import React from 'react';
import './assets/section7.css';
import comma1 from"./image/comma1.svg";

function Section7() {
  return (
    <div id="section7">
        <div className="section7__container">
            <h3 className="titles">Testimonials</h3>
            <ul className="blocks">
                <li className="bloks-elem">
                    <img alt="item-comma2" className="coma" src={comma1}/>
                    <p className="bloks-elem__text">We've been trying to put together a functional remote dev team since I began my startup journey in April of 2021. I am happy to say we finally hired the Labsfordevs guys and they've worked closely with us throughout the hiring and vetting process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. Highly recommend.
 
 Sean, Non-Tech Startup Founder, USA
 
 Am really impressed by the quality of services I received from Labsfordevs. You were right on schedule, offered superbly attractive rates, and delivered a highly skilled software engineering unit well before time. I have received an awesome e-commerce product.
 </p>
                    <div className="block-info">
                        <span className='bloks-elem__author-desc'>General Manager, Equipment Company, Canada</span>
                    </div>
                </li>
                <li className="bloks-elem">
                    <img alt="item-comma2" className="coma" src={comma1}/>
                    <p className="bloks-elem__text">We thank Labsfordevs for the wonderful job in helping us setup a remote team in Belarus. Every developer on the team was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working.</p>
                    <div className="block-info">
                        
                        <span className='bloks-elem__author-desc'>B2B SaaS, CEO/Co-Founder</span>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}
    
export default Section7;