import React from 'react';
import {Container , Row, Col} from "react-bootstrap";
import travelDiary from '../../Assets/gifs/travel-blog.gif';
import Chatterize from '../../Assets/gifs/chatterize.gif';


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

    <section >
    
        <h1>Projects</h1>
        <Container>
          <Row >
            
            {
              projects.map((project, index) => {
                return (
                  <Col >
                  project here
                  </Col>
                )
              })
            }
            
          </Row>
    </Container>
    </section>
  )
}

export default Projects;

