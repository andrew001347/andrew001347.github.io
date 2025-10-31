import { caseStudy } from "../constants";
import { useState } from "react";

const CaseStudy = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3); // 👈 show first 3

  const handleShowMore = () => {
    if (visibleCount < caseStudy.length) {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  return (
    <section id="case" className="c-space my-20">
      <p className="head-text text-center">Case Studies</p>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10 px-6">
        {caseStudy.slice(0, visibleCount).map((study) => (
          <div
            key={study.id}
            className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-black-300 transition-all duration-300 flex flex-col justify-between"
            onClick={() => setSelectedCaseStudy(study)}
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-white-800 text-sm mb-3">{study.description}</p>

                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {study.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/20 px-2 py-1 rounded-full text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Link */}
              {study.link && (
                <div className="mt-auto pt-4">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-yellow-300 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
            {caseStudy.length > 3 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleShowMore}
                  className="text-yellow-300 hover:text-white border border-yellow-300 hover:bg-yellow-300/10 transition px-6 py-2 rounded-full"
                >
                  {visibleCount >= caseStudy.length ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
      

      {/* Modal */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-6"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-black-200 rounded-2xl overflow-y-auto max-h-[90vh] p-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="sticky top-4 float-right text-white text-3xl hover:text-yellow-300 transition
                        w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 z-50 ml-auto"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Header Image */}
            <img
              src={selectedCaseStudy.image}
              alt={selectedCaseStudy.title}
              className="rounded-lg w-full h-64 object-cover mb-6"
            />

            {/* Main Info */}
            <h2 className="text-2xl font-semibold text-white mb-3">
              {selectedCaseStudy.title}
            </h2>
            <p className="text-white-800 mb-6">{selectedCaseStudy.description}</p>

            {/* Internal Link (Prototype) */}
            {selectedCaseStudy.showPrototype && selectedCaseStudy.link && (
              <div className="mt-4 mb-6">
                <a
                  href={selectedCaseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-300 hover:underline text-sm"
                >
                  {selectedCaseStudy.linkLabel || "View Prototype"} ↗
                </a>
              </div>
            )}


            {/* Role / Duration / Tools */}
            <div className="mb-4">
              <p className="text-white font-semibold">Role:</p>
              <p className="text-white-800">{selectedCaseStudy.role}</p>
            </div>

            <div className="mb-4">
              <p className="text-white font-semibold">Duration:</p>
              <p className="text-white-800">{selectedCaseStudy.duration}</p>
            </div>

            <div className="mb-6">
              <p className="text-white font-semibold">Tools Used:</p>
              <ul className="list-disc ml-5 text-white-800">
                {selectedCaseStudy.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Details */}
            {selectedCaseStudy.details && (
              <div className="text-white-800 leading-relaxed space-y-10">
                {selectedCaseStudy.details.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-white font-semibold mb-3 text-lg">
                      {section.heading}
                    </h3>
                    {section.content && <p className="mb-3">{section.content}</p>}
                    {section.images && section.images.length > 0 && (
                      <div className="flex flex-col gap-6 mt-6">
                        {section.images.map((img, i) => (
                          <div key={i} className="-mx-6">
                            <img
                              src={img.src}
                              alt={img.alt || `Case study ${i + 1}`}
                              className="w-full max-h-[80vh] object-contain rounded-lg mx-auto"
                            />
                            {img.caption && (
                              <p className="text-sm text-gray-400 mt-2 italic text-center">
                                {img.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Link */}
            {selectedCaseStudy.fullProject && (
              <div className="mt-10 text-center">
                <a
                  href={selectedCaseStudy.fullProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:underline text-sm"
                >
                  Open Full Project ↗
                </a>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudy;
