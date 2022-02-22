import {React, useState} from 'react';
import './assets/header.css';
import logo from"./image/logodev.svg";


function Header(props) {
  const [menu, setMenu] = useState(false)

  const handleChange = () => {
    setMenu(!menu);
  }

  const showMenu = () => {
    if (menu == true) {
      return 'show';
    }
    else {
      return 'notshow';
    }
  }
  return (
    <div>
    <div id="header">
      <a id='logo' href=""><img alt="Labsfordev logo" id="logo-img" src={logo} /></a>
      <ul id="list">
        <li><a href="#section6">Services</a></li>
        <li><a href="#section9">Pricing</a></li>
        <li><a href="#section10">Contact us</a></li>
        <li><a href="#" onClick={() => {props.setShows(false); props.setShowAb(true)}}>About / Why</a></li>
      </ul>
      <a aria-controls="collapseMenu" aria-expanded="false" data-toggle="collapse"
       role="button" href="#collapseMenu" class="collapsed" id="open-menu"><img alt="menu burger icon" class="img-responsive" src="https://reintech.io/assets/home_page/_src/burger_icon-cfd0b24f9f28d7bd44d6cf2c4520529d5b8834d515cd83267caf456464fbd0f6.svg" />
</a>
    </div>
    <div class="collapse" id="collapseMenu">
    <ul id="collapsUl">
        <li><a href="#section6">Product</a></li>
        <li><a href="#section9">Pricing</a></li>
        <li><a href="#section10">Contact us</a></li>
        <li><a href="#" onClick={() => {props.setShows(false); props.setShowAb(true)}}>About / Why</a></li>
      </ul></div>
    </div>
  )
}

export default Header;