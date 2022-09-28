import React from 'react';
import resume from '../../utils/resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume=() => {
  return (
    <section id='resume'>
      <h2> Resume </h2>
      <div>
      <Document 
      file={resume}
      onLoadError={console.error}
      style={{width: 'auto', height: 'auto'}}
      > 
      <Page pageIndex={0}/>
      <Page pageIndex={1}/>
      </Document>
      </div>
      </section>
  )
}

export default Resume;