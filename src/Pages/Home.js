import React, {useEffect, useState , useRef} from 'react'
import Portfolio from '../Components/Portfolio/Project';
import Reviews from '../Components/Reviews/Reviews.js';
import Placeholder from '../Assets/images/placeholder.png';
import Resume from '../Components/Resume/Resume.js'
import Aos from 'aos';
import "aos/dist/aos.css";
import { validateEmail } from '../utils/helpers.js';
import emailjs from '@emailjs/browser';

import {Container,Row, Col, Button, Form } from"react-bootstrap";

// tech logos
import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt,FaLinkedin,FaGithub} from 'react-icons/fa';
import {CgWebsite} from "react-icons/cg";
import {BiCodeAlt} from "react-icons/bi";
import {GiProgression} from "react-icons/gi";
import {AiOutlineHtml5, AiFillGithub, AiOutlineCluster} from 'react-icons/ai';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {SiExpress, SiMongodb, SiInsomnia, SiJquery, SiTailwindcss, SiSequelize, SiBookstack, } from 'react-icons/si';
import {DiNpm, DiNodejs, DiStackoverflow, DiResponsive} from 'react-icons/di';
import {GrHeroku , GrMysql} from 'react-icons/gr';
import {FaReact, FaBootstrap, FaObjectGroup} from 'react-icons/fa';
import {VscJson} from 'react-icons/vsc'


const Home = () => {
  useEffect(() => {
    Aos.init({duration:3000});
  }, [])

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message, subject } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('personal_contact','contact_service', form.current, 'wLYbtp8s7HHiOK8mX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
  return (
    <>
    <section style={{marginBlock:'150px'}} className="intro video-background" id="home" >
      <div className="video-background__inner">
        {/* add automated video */}
        <video className='video-background__video' src="..."> </video>
      </div>
    <div  className='qoute video-background__content' style={{color:'white'}}>
      <h2 class="text-3xl text-white font-bold underline"> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2><h4 style={{color:'red'}}> - James Allen</h4>
      <h4>
      <FcGoogle size={50}/>
      </h4>
      <h4>
      <FaGithubAlt size={50}/> 
      </h4>
      </div> 
    </section>

    <Container className='about' id="about">

    <Row data-aos="fade-right" className='welcome' style={{flex:'1'}}>
       <h1> Welcome to my Webpage</h1>
       <p>
        My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
       </p>
       </Row>
       <img data-aos="fade-left" className='intro-img' src={Placeholder} alt='placeholder' style={{flex:1}}/>
      </Container>

      <Portfolio/>

    <section id='services'>
    <h1>Services</h1>
        <Container className='m-auto'>
          <Row className='mt-3 d-flex text-center'>

        <Col data-aos="zoom-in" className=' col-lg-4 col-md-6 col-sm-12 service'>
        <CgWebsite size={50} className="svc-logo"/>
        <h3>Create Websites </h3>
        <p>I create websites according to your wants and needs!</p></Col>

        <Col data-aos="zoom-in" className='col-lg-4 col-md-6 col-sm-12 service'>
        <BiCodeAlt size={50} className="svc-logo"/> 
        <h3>Refractor Code</h3>
        <p>Got a broken site? Contact me and we can fix it!</p></Col>

        <Col data-aos="zoom-in" className='col-lg-4 col-md-6 col-sm-12 service'>
        <SiBookstack size={50} className="svc-logo"/>
        <h3>Technical Skills</h3>
        <p>Knowledge of various popular coding languages</p></Col>
        
        <Col data-aos="zoom-in" className='col-lg-4 col-md-6 col-sm-12 service'>
        <DiResponsive size={70} className="svc-logo"/>
        <h3>Responsive Design</h3>
        <p>Responsive features on any device</p>
        </Col>

        <Col data-aos="zoom-in" className='col-lg-4 col-md-6 col-sm-12 service'>
        <FaObjectGroup size={50} className="svc-logo"/>
        <h3>Object-oriented Programming</h3>
        <p>Create easier to refractor sites using reusable code blocks and object-relational mapping.</p>
        </Col>
        <Col data-aos="zoom-in" className='col-lg-4 col-md-6 col-sm-12 service'>
        <AiOutlineCluster size={50} className="svc-logo"/>
        <h3>Model-View Controller framework</h3>
        <p>A framework pattern for computer softwares that easily distinguish related program logic into model, view, and controller elements.</p>
        </Col>
        <Col data-aos="zoom-in" className='col-lg-4 col-md-6 col-sm-12 service'>
        <GiProgression size={50} className="svc-logo"/>
        <h3>Progressing Web Application</h3>
        <p>Web apps that use workers, manifests, and other features together to make the site as effecient as possible.</p>
        </Col>
          </Row>
      </Container>

    <div className='skills my-5'>
    <h2 className="pb-2"> Technologies Learned</h2>
          <div style={{position:"relative"}}><AiOutlineHtml5 size={50} color='darkorange' className="skl-logo"  />
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
          <AiFillGithub size={50}  className="skl-logo"/></div>
    </div> 
    </section>
      
    <Container className='justify-center contact' id='contact'>
    <h1>Contact</h1>
    <Row>
    <Col>
    <Form ref={form} onSubmit={handleSubmit && sendEmail} className='message'>
    <Form.Group>
    <Form.Label htmlFor="message"> Message:</Form.Label>  
    <Form.Control name='message' rows="5" defaultValue={message} onBlur={handleChange} id='msg-info' placeholder='Summary of reasons of contact'></Form.Control>
    </Form.Group>

    <Form.Group>
    <Form.Label type='subject' name='subject' id='sender-email' placeholder='Subject' defaultValue={subject} onBlur={handleChange}></Form.Label>
    <Form.Control name='suser_name' type='name' placeholder='Name' defaultValue={name} onBlur={handleChange}></Form.Control>
    <Form.Control type='email' name='user_email' id='sender-email' placeholder='Email' defaultValue={email} onBlur={handleChange}></Form.Control>
    </Form.Group>
    {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    <Button type="submit" value="submit"  id='submit-btn'> Submit!</Button>
    </Form>
    </Col>
    </Row>
    <Col className='display-flex justify-center items-center'>
                <a href='https://www.linkedin.com/in/edmer-valencia-080414227/' >
                <FaLinkedin
  color='darkblue' size={50}
                /> 
                <a href='https://github.com/edm1001' className='col-6'>
                <FaGithub
  color='white' size={50}
                /></a>
                </a>
                </Col>
    </Container>  
 <Resume 
 className=""
 />
      <Reviews/>


      
    </>
  )
}


export default Home;
