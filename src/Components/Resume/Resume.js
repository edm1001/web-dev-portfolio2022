import React from 'react';
import {Document, pdfjs} from 'react-pdf';

import resumeFile from './EdVal-Resume2022.pdf';

const Resume=() => {
  pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // function onDocumentLoadSuccess({ numPages }) {
    //   setNumPages(numPages);
    //   setPageNumber(1);

  return (
      <Document 
      file={resumeFile}> 
      {/* onLoadSuccess={onDocumentLoadSuccess} */}
      </Document>
  )
}

export default Resume;