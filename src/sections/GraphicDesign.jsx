import React, { useState } from "react";
import { graphicDesign } from "../constants";

const GraphicDesign = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // show first 3 by default

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      setSelectedDesign(null);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = () => {
    if (!selectedDesign?.images) return;
    setCurrentImageIndex((prev) =>
      prev === selectedDesign.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    if (!selectedDesign?.images) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedDesign.images.length - 1 : prev - 1
    );
  };

  const handleShowMore = () => {
    if (visibleCount >= graphicDesign.length) {
      // if already showing all, reset back to 3
      setVisibleCount(3);
    } else {
      // otherwise show 3 more
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <section id="graphic" className="c-space my-20">
      <h2 className="head-text text-center mb-12">Graphic Design</h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {graphicDesign.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-black-300 cursor-pointer"
            onClick={() => setSelectedDesign(item)}
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={item.image || item.images?.[0]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white-800 text-sm mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/20 px-2 py-1 rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {graphicDesign.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="text-yellow-300 hover:text-white border border-yellow-300 hover:bg-yellow-300/10 transition px-6 py-2 rounded-full"
          >
            {visibleCount >= graphicDesign.length ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedDesign && (
          <div
            id="modal-background"
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-[150] p-6"
            onClick={handleOutsideClick}
          >

          <div
            className="relative max-w-4xl w-full bg-black-200 rounded-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button — stays fixed even if image scrolls */}
            <button
              className="fixed top-6 right-8 text-white text-3xl hover:text-yellow-300 transition 
                        w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 
                        z-[200]"
              onClick={() => {
                setSelectedDesign(null);
                setCurrentImageIndex(0);
              }}
              aria-label="Close"
            >
              ✕
            </button>


            {/* Carousel */}
            {selectedDesign.images ? (
              <div className="relative flex flex-col items-center">
                <div className="flex justify-center items-center w-full">
                  <img
                    src={selectedDesign.images[currentImageIndex]}
                    alt={`${selectedDesign.title} ${currentImageIndex + 1}`}
                    className="max-h-[80vh] w-auto object-contain rounded-lg mb-6 mx-auto"
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                  onClick={handlePrevImage}
                >
                  ←
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                  onClick={handleNextImage}
                >
                  →
                </button>

                <p className="text-center text-white-800 text-sm mb-4">
                  {currentImageIndex + 1} / {selectedDesign.images.length}
                </p>
              </div>
            ) : (
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="max-h-[80vh] w-auto object-contain rounded-lg mb-6 mx-auto"
              />
            )}

            <h3 className="text-2xl font-semibold text-white mb-3">
              {selectedDesign.title}
            </h3>
            <p className="text-white-800 mb-4">{selectedDesign.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedDesign.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/20 px-2 py-1 rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesign;
