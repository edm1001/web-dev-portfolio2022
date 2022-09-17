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
    <section className=' Services'>
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
        <p></p></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Modern Layout</h3></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Responsive Design</h3></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Object-oriented Programming</h3></div>
        <div data-aos="zoom-in" className='service' >
        <h3>Object-Relational Mapping</h3></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Model-View Controller framework</h3></div>
        <div data-aos="zoom-in" className='service'>
        <h3>Progressing Web Applivation</h3></div>
    </div>
    <div className='skills'>
    <h2> Technologies Learned</h2>
    <p className='tech'>
          {/* add colors for icons */}
          <AiOutlineHtml5 size={50} color='darkorange'/>
          <IoLogoCss3 size={50}/>
          <IoLogoJavascript size={50}/>
          <SiJquery size={50}/>
          <VscJson size={50}/>
          <FaReact size={50}/>
          <DiStackoverflow size={50}/>
          <FaBootstrap size={50}/>
          <DiNodejs size={50}/>
          <SiInsomnia size={50}/>
          <DiNpm size={50}/>
          <SiMongodb size={50}/>
          <SiExpress size={50}/>
          <SiTailwindcss size={50}/>
          <SiSequelize size={50}/>
          <GrHeroku size={50}/>
          <GrMysql size={50}/>
          <AiFillGithub size={50}/>
          

    </p>
    </div>
    </section>
  ) }
export default Services