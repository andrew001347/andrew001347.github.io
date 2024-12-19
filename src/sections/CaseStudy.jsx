import { caseStudy } from '../constants';
import { useState } from "react";

const CaseStudy = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="case" className="c-space my-20">
      {/* Section Header */}
      <p className="head-text text-center">Case Studies</p>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {caseStudy.map((study) => (
          <div
            key={study.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden bg-black-300"
            onClick={() => setSelectedCaseStudy(study)}
          >
            {/* Image */}
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{study.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative w-full max-w-3xl bg-black-200 rounded-lg p-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-lg"
              onClick={() => setSelectedCaseStudy(null)}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {/* Image */}
              <img
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                className="rounded-lg w-full h-auto object-cover"
              />
              {/* Details */}
              <div>
                <p className="grid-headtext">{selectedCaseStudy.title}</p>
                <p className="grid-subtext mt-4">{selectedCaseStudy.description}</p>
                <div className="mt-4">
                  <p className="grid-headtext">Role:</p>
                  <p className="grid-subtext">{selectedCaseStudy.role}</p>
                </div>
                <div className="mt-4">
                  <p className="grid-headtext">Duration:</p>
                  <p className="grid-subtext">{selectedCaseStudy.duration}</p>
                </div>
                <div className="mt-4">
                  <p className="grid-headtext">Tools Used:</p>
                  <ul className="list-disc ml-5">
                    {selectedCaseStudy.tools.map((tool, index) => (
                      <li key={index} className="grid-subtext">{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudy;
