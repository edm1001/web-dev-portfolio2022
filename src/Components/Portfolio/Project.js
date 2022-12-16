import React from 'react';
import {Container , Row, Col} from "react-bootstrap";
import {ProjectCard} from './ProjectCard.js';
import "./project.css"
import travelDiary from '../../Assets/gifs/travel-blog.gif';
import Chatterize from '../../Assets/gifs/chatterize.gif';

// import {BiLinkExternal} from 'react-icons/bi';
// import {IoLogoJavascript} from 'react-icons/io';
// import {SiExpress, SiMongodb, SiInsomnia, SiSequelize, } from 'react-icons/si';
// import {FaReact} from 'react-icons/fa';
// import {DiNodejs} from 'react-icons/di';
// import {GrHeroku , GrMysql} from 'react-icons/gr';
// import {BsGlobe} from 'react-icons/bs';

const Projects =( ) => {
  const projects  = [
{
  title: "MVC Framework",
  description:"A way to record your travels and find new spots!",
  imgUrl:travelDiary,
},
{
  title: "MERN Stack",
  description:"A safe space to chatter about stuff that matter",
  imgUrl:Chatterize,
},
  ];

  return (
    //click method shows the info

    <section className='project' id="project">
    <Container>
      <Row>
        <Col>
        <h1>Projects</h1>
          <Row>
            {
              projects.map((project, index) => {
                return (
                  <ProjectCard
                  key={index}
                  {...project}
                  />
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Projects;

