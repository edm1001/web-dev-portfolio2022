import React,{useState}  from 'react';
import resume from '../../utils/resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
import { Button, Modal } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume=() => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id='resume'>
      <Button onClick={handleShow}> Resume </Button>


      <Modal className="modal-lg" show={show}>
      <Modal.Header onClick={handleClose} closeButton></Modal.Header>
      <Modal.Title>Resume 📃</Modal.Title>
      <Modal.Body>
      <Document 
      file={resume}
      onLoadError={console.error}
      style={{width: 'auto', height: 'auto'}}
      > 
      <Page pageIndex={0}/>
      <Page pageIndex={1}/>
      </Document>
      </Modal.Body>
      </Modal>
      </section>
  )
}

export default Resume;