import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Certificates = () => {
  const certificates = [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "(Offered by Johns Hopkins University)",
      date: "April 2023",
      image: "./Coursera.png",
      link: "https://coursera.org/verify/LE4MZK7H97WU"
    },
    // Add more certificates if needed
  ];

  const slides = [
    { src: "./Coursera.png" },
  ]

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleCertificateClick = (index) => {
    setSelectedCertificate(index === selectedCertificate ? null : index);
  };

  return (
    <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certificates
        </h1>
        <div className="flex flex-wrap text-center">
          {certificates.map((certificate, index) => (
            <div className="mx-auto w-1/2" key={index}>
              <div
                className={`h-full bg-gray-800 bg-opacity-40 p-8 rounded ${
                  selectedCertificate === index ? "selected" : ""
                }`}
                onClick={() => handleCertificateClick(index)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  onClick={() => setLightboxOpen(true)}
                  className={`w-full h-auto mb-4 rounded-lg mx-auto object-cover cursor-pointer`}
                />
                {/* <button type="button" onClick={() => setLightboxOpen(true)}>
                  Verify Certificate
                </button> */}
                <a href={certificate.link} target='_blank'>Verify Certificate</a>

                {selectedCertificate === index && (
                  <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={slides}
                    render={{
                      buttonPrev: slides.length <= 1 ? () => null : undefined,
                      buttonNext: slides.length <= 1 ? () => null : undefined,
                    }}
                  />
                )}

                <h3 className="text-lg font-semibold mb-2">{certificate.title}</h3>
                <p className="text-gray-600 mb-2">{certificate.issuer}</p>
                <p className="text-gray-600">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
