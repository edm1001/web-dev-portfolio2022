import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

//add tech logos
import {AiOutlineHtml5, AiFillGithub} from 'react-icons/ai';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {SiExpress, SiMongodb, SiInsomnia, SiJquery, SiTailwindcss, SiSequelize, } from 'react-icons/si';
import {DiNpm, DiNodejs, DiStackoverflow} from 'react-icons/di';
import {GrHeroku , GrMysql} from 'react-icons/gr';
import {FaReact, FaBootstrap} from 'react-icons/fa';
import {VscJson} from 'react-icons/vsc'

const Services =() => {
    useEffect(() => {
    Aos.init({duration:2000});
  }, [])

  return (
    <section className=' Services' id='services'>
    <h1>Services</h1>
    <div className='service-list'>
      <div data-aos="zoom-in" className='service'>
        <h3>Create Websites </h3>
        <p>I create websites according to your wants and needs!</p></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Refractor Code</h3>
        <p>Got a broken site? Contact me and we can fix it!</p></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Technical Skills</h3>
        <p>Knowledge of various popular coding languages</p></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Responsive Design</h3>
        <p>Responsive features on any device</p>
        </div>
        <div data-aos="zoom-in" className='service'>
        <h3>Object-oriented Programming</h3>
        <p>Create easier to refractor sites using reusable code blocks and object-relational mapping.</p>
        </div>
        <div data-aos="zoom-in" className='service'>
        <h3>Model-View Controller framework</h3>
        <p>A framework pattern for computer softwares that easily distinguish related program logic into model, view, and controller elements.</p>
        </div>
        <div data-aos="zoom-in" className='service'>
        <h3>Progressing Web Applivation</h3>
        <p>Web apps that use workers, manifests, and other features together to make the site as effecient as possible.</p>
        </div>
    </div>
    <div className='skills'>
    <h2> Technologies Learned</h2>
    <p className='tech'>
          {/* add colors for icons */}
          <AiOutlineHtml5 size={50} color='darkorange'/>
          <IoLogoCss3 size={50} color='lightblue'/>
          <IoLogoJavascript size={50} color='gold'/>
          <SiJquery size={50} />
          <VscJson size={50} color='orange' />
          <FaReact size={50} color="blue"/>
          <DiStackoverflow size={50} color='orange'/>
          <FaBootstrap size={50} color='lightblue'/>
          <DiNodejs size={50} color='green' />
          <SiInsomnia size={50} />
          <DiNpm size={50}  color='red'/>
          <SiMongodb size={50} color='green' />
          <SiExpress size={50} />
          <SiTailwindcss size={50} color='orange'/>
          <SiSequelize size={50} color='darkblue'/>
          <GrHeroku size={50} color='purple'/>
          <GrMysql size={50} color='lightblue' />
          <AiFillGithub size={50}  />
          

    </p>
    </div>
    </section>
  ) }
export default Services