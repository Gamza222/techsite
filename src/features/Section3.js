import React from 'react';
import './assets/section3.css';

function Section3() {
  return (
    <div id="section3">
        <div className="row align-items-center">
        <div className="col-12 col-sm"><h3 id="section3__title">What We Provide:</h3></div>
        <div className="col-12 col-sm">
        <ul className="list row">
        <li className="col-6 px-auto px-sm-2">
        <i>
        <img alt="fast hiring icon" className="img-responsive" src="https://reintech.io/assets/home_page/_src/icons/what/fast_hiring_icon-a6dab45bf1c7cbe6956c3712922f2e232c4d08d7e9b38cf97c7875182ca08ff1.svg" />
        </i>
        <span>A vetted developer talent network with fast hiring speeds</span>
        </li>
        <li className="col-6 px-auto px-sm-2">
        <i>
        <img alt="shield icon" className="img-responsive" src="https://reintech.io/assets/home_page/_src/icons/what/shield_icon-91285bbcf0cab5358052761f5027262c4e292c64e44dcd4e56b35c4591ddbd9c.svg" />
        </i>
        <span>Legal framework provision for safe contracting</span>
        </li>
        <li className="col-6 px-auto px-sm-2">
        <i>
        <img alt="time report icon" className="img-responsive" src="https://reintech.io/assets/home_page/_src/icons/what/time_report_icon-1500870f0931eaf25ae0e74a54e0ed077119ede372969f4c0e1afb90b6c6d2bd.svg" />
        </i>
        <span>World-class tools provision for remote work</span>
        </li>
        <li className="col-6 px-auto px-sm-2">
        <i>
        <img alt="coins icon" className="img-responsive" src="https://reintech.io/assets/home_page/_src/icons/what/coins_icon-6355a8f7594ab482560c797c5415a81ae0e4e3d0b5d690c2917ef12c19f7fb68.svg" />
        </i>
        <span>Excellent payroll and benefits management</span>
        </li>
        </ul>
        </div>

        </div>
     
        </div>
  )
}

export default Section3;