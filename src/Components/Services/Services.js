import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
//add tech logos for service section
import {CgWebsite} from "react-icons/cg";

import {BiCodeAlt} from "react-icons/bi";
import {GiProgression} from "react-icons/gi";
//add tech logos in skills
import {AiOutlineHtml5, AiFillGithub, AiOutlineCluster} from 'react-icons/ai';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {SiExpress, SiMongodb, SiInsomnia, SiJquery, SiTailwindcss, SiSequelize, SiBookstack, } from 'react-icons/si';
import {DiNpm, DiNodejs, DiStackoverflow, DiResponsive} from 'react-icons/di';
import {GrHeroku , GrMysql} from 'react-icons/gr';
import {FaReact, FaBootstrap, FaObjectGroup} from 'react-icons/fa';
import {VscJson} from 'react-icons/vsc'

// className="svc-logo"

const Services =() => {
    useEffect(() => {
    Aos.init({duration:2500});
  }, [])

    
// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//       var context = this, args = arguments;
//       var later = function() {
//           timeout = null;
//           if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//   };
// };

// function autoScroll(selector) {
//   var scrollAttempts = 0;
//   var incrementScrollAttempts = debounce(function() {
//       scrollAttempts++;
//   });

//   window.addEventListener('scroll', incrementScrollAttempts);

//   var el = document.querySelector(selector);
//   var chkReadyState = setInterval(function() {
//       if (el) {
//           window.scrollTo(0, el.offsetTop);
//       }
//       if (document.readyState === 'complete' || scrollAttempts > 1) {
//           clearInterval(chkReadyState);
//           window.removeEventListener('scroll', incrementScrollAttempts, false);
//       }
//   }, 100);
// };
// autoScroll('.svc-logo');

  return (
    <section className=' Services' id='services'>
    <h1>Services</h1>
    <div className='service-list'>
        <div data-aos="zoom-in" className='service'>
        <CgWebsite size={50} className="svc-logo"/>
        <h3>Create Websites </h3>
        <p>I create websites according to your wants and needs!</p></div>
        <div data-aos="zoom-in" className='service'>
        <BiCodeAlt size={50} className="svc-logo"/> 
        <h3>Refractor Code</h3>
        <p>Got a broken site? Contact me and we can fix it!</p></div>
        <div data-aos="zoom-in" className='service'>
        <SiBookstack size={50} className="svc-logo"/>
        <h3>Technical Skills</h3>
        <p>Knowledge of various popular coding languages</p></div>
        <div data-aos="zoom-in" className='service'>
        <DiResponsive size={100} className="svc-logo"/>
        <h3>Responsive Design</h3>
        <p>Responsive features on any device</p>
        </div>
        <div data-aos="zoom-in" className='service'>
        <FaObjectGroup size={50} className="svc-logo"/>
        <h3>Object-oriented Programming</h3>
        <p>Create easier to refractor sites using reusable code blocks and object-relational mapping.</p>
        </div>
        <div data-aos="zoom-in" className='service'>
        <AiOutlineCluster size={50} className="svc-logo"/>
        <h3>Model-View Controller framework</h3>
        <p>A framework pattern for computer softwares that easily distinguish related program logic into model, view, and controller elements.</p>
        </div>
        <div data-aos="zoom-in" className='service'>
        <GiProgression size={50} className="svc-logo"/>
        <h3>Progressing Web Application</h3>
        <p>Web apps that use workers, manifests, and other features together to make the site as effecient as possible.</p>
        </div>
    </div>
    <div className='skills'>
    <h2> Technologies Learned</h2>
    <p className='tech'>
          {/* add colors for icons */}
          <AiOutlineHtml5 size={50} color='darkorange' className="skl-logo" />
          <IoLogoCss3 size={50} color='lightblue' className="skl-logo" />
          <IoLogoJavascript size={50} color='gold' className="svc-logo" />
          <SiJquery size={50} className="skl-logo"/>
          <VscJson size={50} color='orange' className="skl-logo"/>
          <FaReact size={50} color="blue" className="skl-logo"/>
          <DiStackoverflow size={50} color='orange' className="skl-logo"/>
          <FaBootstrap size={50} color='lightblue' className="skl-logo"/>
          <DiNodejs size={50} color='green' className="skl-logo"/>
          <SiInsomnia size={50} className="skl-logo"/>
          <DiNpm size={50}  color='red' className="skl-logo"/>
          <SiMongodb size={50} color='green'  className="skl-logo"/>
          <SiExpress size={50}  className="skl-logo"/>
          <SiTailwindcss size={50} color='orange' className="skl-logo"/>
          <SiSequelize size={50} color='darkblue' className="skl-logo"/>
          <GrHeroku size={50} color='purple' className="skl-logo"/>
          <GrMysql size={50} color='blue'  className="skl-logo"/>
          <AiFillGithub size={50}  className="skl-logo"/>
    </p>
    </div>
    </section>
  ) }
export default Services