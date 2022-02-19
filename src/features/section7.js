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
                    <p className="bloks-elem__text">Working with Reintech has been very productive for my business. They have helped us solve issues that other staffing agencies have not, such as finding developers who will start on a part-time basis and grow into full-time contractors as our business grows.</p>
                    <div className="block-info">
                        <p className="bloks-elem__author">Lev Kaye</p>
                        <span className='bloks-elem__author-desc'>Founder and CEO, CredSpark</span>
                    </div>
                </li>
                <li className="bloks-elem">
                    <img alt="item-comma2" className="coma" src={comma1}/>
                    <p className="bloks-elem__text">As a remote-first fintech startup, we were looking for software engineers to form part of our core team. Reintech were very helpful and easy to work with, supplementing their wide network of developers with market insight and advice. They were also accommodating in terms of stepping in where we needed extra help but still being flexible when we preferred to do things ourselves. I would recommend them to anyone who is considering hiring remote developers in eastern europe.</p>
                    <div className="block-info">
                        
                        <span className='bloks-elem__author-desc'>Founder and CEO of Fintech startup</span>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}
    
export default Section7;