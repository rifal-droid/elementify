import React from 'react';

const Materi = () => {
  return (
    <div className="bg-regal-blue h-screen flex justify-center items-center relative">
      <div className="container mx-10">
        <div className="vidio w-96 h-64 rounded-md bg-white my-14 mr-14">
          <iframe 
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ke8GhJFL2Ys?si=wmMemfogW5P61Nou" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          ></iframe>
        </div>
        <a href="https://rphv8qy43kl.typeform.com/to/PoBzkPHi" target="_blank" rel="noopener noreferrer" className="lkpd w-96 h-20 bg-white flex-none mr-14 rounded-md flex items-center justify-center">
          <h1 className='text-3xl'>LKPD</h1>
        </a>
      </div>
      <div className="materi w-96 h-3/4 bg-white flex-none rounded-md mx-10">
        <object data="/konfigurasielektron.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="/konfigurasielektron.pdf">to the PDF!</a></p>
        </object>
      </div>
    </div>
  );
};

export default Materi;
