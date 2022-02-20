import React from 'react';
import './assets/sectionfooter.css';


function SectionFooter() {

   
  return (
    <div id="sectionfooter">
        <div className="main">
            <div className="footer-top">
                <p className="footer-text"></p>
            </div>
            <div className="footer-bottom">
                <div className="logo-links">
                <a id='logo' href=""><img alt="Reintech logo" src="https://reintech.io/assets/home_page/_src/icons/what/logo-footer-2efc1ced2b7f50525539e2c2e32486d63d5703793b23e31282e31948ce924426.svg" /></a>
                </div>
            <div className="footer-header">
                <li><a href="">Product</a></li>
                <li id="footer-item-right"><a href="">Pricing</a></li>
                <li><a href="">Contact us</a></li>
                <li id="footer-item-right"><a href="">About</a></li>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFooter;