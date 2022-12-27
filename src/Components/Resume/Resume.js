import React,{useState}  from 'react';
import resume from '../../utils/resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
import { Button, Modal, Container } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume=() => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <Button onClick={handleShow}> Resume </Button>


      <Modal className="display-flex justify-center background-black" show={show}>
      <Modal.Header onClick={handleClose} closeButton></Modal.Header>
      <Modal.Title>Resume 📃</Modal.Title>
    <Container>  <Modal.Body>
        
      <Document 
      file={resume}
      onLoadError={console.error}
      > 
      <Page pageIndex={0}/>
      <Page pageIndex={1}/>
      </Document>
      </Modal.Body></Container>
      </Modal>
      </section>
  )
}

export default Resume;