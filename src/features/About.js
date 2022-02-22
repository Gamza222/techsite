import React from 'react';
import './assets/about.css';
import cross from "./image/kross.svg";


function About(props) {
    
  return (
    <div id="About">
        <div id="about-header">   
            <a onClick={() => {props.setShows(true); props.setShowAb(false)}}><img id="cross"src={cross}/></a>
        </div>
     <div className="about-main">
     <h3 className="About-header">Our story</h3>
     <p class="about-text">
     After years of successful software development for emerging tech companies, our proprietary approach evolved into something different in the ways that matter most: 
it is tailored to your needs, not our convenience.
You'll work with your LFD team as you'd work with your own, on your terms. What you need without what you don't, with flexibility to be as hands-on as you like, or as turnkey as you prefer.
     </p>
     <div className="about-text2">
     It's A Match, If:
     </div>
     <p class="about-descr">●	You are a startup and need to ramp up your dedicated team quickly</p>
     <p class="about-descr">●	You are running a company and need to develop new products and features, but don't want your core team to lose focus</p>
     <p class="about-descr">●	You don't like to consider a regular outsourcing model, but would rather hire dedicated team prone to long-term cooperation</p>
     <p class="about-descr">●	You are an investor and you are having a hard time hiring and securing excellent, cost-effective IT talent</p>
    </div>   
    <div className="about-section">
        <h3 className="About-header">Transparency at every stage.</h3>
        <p class="about-text">
    Like an office abroad but with total control from the development process to salaries, raises, and even vacation requests. What you need without what you don't, with flexibility to be as hands-on as you like, or as turnkey as you prefer.
        </p>
        <p class="about-text">
        <p class="about-text">
        Dedicated work teams with top-tier expertise for every organizational level are created collaboratively with clients. You will decide on how specifically the search process for each position should look like, to what extent you are ready to be engaged, and it's you who will have the final say regarding a job offer to a candidate.
        </p>
        <p class="about-text">
     Labs For Devs has the ecosystem built around the process of finding and onboarding the right talent you need. It includes both internal and external recruitment and marketing resources, well-established recruitment processes and tracking tools.
        </p>
        </p>
    </div>
    <div className="about-section">
        <h3 className="About-header">Hiring Process</h3>
        <div className="about-text2" id="size">Talent Acquisition:</div>
        <p class="about-text" id="about-text-margin">
        Powerful recruitment team, vast talent pool and marketing resources
        </p>
        <div className="about-text2" id="size">{'Pre-screening & Filtering:'}</div>
        <p class="about-text" id="about-text-margin">
        We'll save your time on that
        </p>
        <div className="about-text2" id="size">{'Hiring Manager Interview:'}</div>
        <p class="about-text" id="about-text-margin">
        We make sure that candidates meet your specific requirements
        </p>
        <div className="about-text2" id="size">{'Customer Interview & Profit'}</div>
        <p class="about-text" id="about-text-margin">
        You decide whether to hire a person or not. Your team - your call.
        </p>
        <div className="about-back">
        <div className="about-text3" id="size">{'CTO ON DEMAND'}</div>
        <p class="about-text" id="about-text-margin">
        CTO ON DEMAND means getting started immediately while the core team is built. We’ll assign a Solution Architect right away to lead the project, defining your stack, creating a roadmap and a plan to scale-up.
        Moving forward, an experienced team of architects from the CTO Office will provide guidance on running your project in an efficient and optimal manner and will be available on-demand for any support or technical challenges.
        </p>
        </div>
    </div>
    <div className="about-section">
        <h3 className="About-header">People are the key.</h3>
        <p class="about-descr2">Exit risk reduction</p>
        <p class="about-descr2">Performance review</p>
        <p class="about-descr2">Assessments</p>
        <p class="about-descr2">{'Onboarding & adaptation management'}</p>
        <p class="about-descr2">{'Career development & Education'}</p>
        <p class="about-descr2">Engagement management for maintaining a High Retention Level</p>
    </div>
    <div className="about-section">
        <h3 className="About-header">Transparency at every stage.</h3>
        <p class="about-text">
        Knowing that the team is the main asset a business has, we apply our expertise to support your main goal: ensure your team delivers in the best possible way while being happy with all work aspects.
        </p>
        <p class="about-text">
        <p class="about-text">
        In order to minimize employee churn and ensure a conducive and effective work environment, LFD carries out a performance review procedure with your team members over the course of a work year which ensures regular feedback, promotes open communication and allows to make sure the whole team is aligned.
        </p>
        <p class="about-text">
        We host educational and informal gatherings geared toward both professional development and support of corporate spirit, and provide the employees with high-standard corporate perks to contribute to their wellbeing.
        </p>
        </p>
    </div>
    
     
    </div>
  )
}

export default About;