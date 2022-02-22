import React, { useRef } from 'react';
import './assets/section10.css';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';

function Section10() {
    const YOUR_SERVICE_ID = "service_lnetk3v";
    const YOUR_TEMPLATE_ID = "template_sir6i2o";
    const YOUR_USER_ID = "user_Xc73VW51IUyMFv8uu08gB";
    const form = useRef();
        
      
        const sendEmail = (e) => {
            
          e.preventDefault();
      
          emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        };
    
    

  return (
    <div id="section10">
       <div className="main">
           <h3 className="section10__title">Contact Us</h3>
           <div className="section10__descr-container">
           <p className="section10__descr">If you have more questions or if you'd like to browse more developer profiles, send us a message.</p>
           <a href="#" className="email">contact.labsfordevs.com</a>
           </div>   
           <form ref={form} onSubmit={sendEmail} className="form-control" id="myform">
               <div className="form-input">
                   <div className="input-section">
                   <label for="form-name" className="input-lable">Name</label>
                   <input type="text" required="required" className="input-input" id="form-name" name="name" />
                   </div>
                   <div className="input-section">
                   <label for="form-email" className="input-lable">Email</label>
                   <input type="email" required="required" className="input-input" id="form-imail" name="email" />
                   </div>
               </div>
               <div className="form-input-message">
                <div className="form-input__message-container">
                    <label for="form-message" className="input-lable">Message</label>
                   <textarea type="text" required="required" className="input-message" id="form-message" name="message" />
                </div>
               </div>
               </form>
           <p class="form-accept" id="privacy-policy">By clicking the button you accept our Privacy Policy<br /></p>
           <input type="submit" form="myform" class="btn btn-outline-light" data-disable-with="Sending your request..." type="submit" value="Send message"/>
           
            
       </div>
    </div>
  )
}

export default Section10;