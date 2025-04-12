"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "../components/footer";

const Certification = () => {
  const certificationImages = [
    "/certificate-main.jpg",
    "/certificate-main-two.jpg",
    "/certificate-1.jpg",
    "/certificate-5.jpg",
    "/certificate-6.jpg",
    "/certificate-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificationImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [certificationImages.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificationImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificationImages.length);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center text-center mt-10 px-4">
        <h1 className="text-xl font-bold">Certifications</h1>
        <h1 className="text-5xl sm:text-7xl font-bold mt-2">
          A collection of my <span className="text-gray-400">certifications</span>
        </h1>

        {/* Image Slider */}
        <div className="relative mt-10 w-full sm:w-3/4 lg:w-1/2 mx-auto">
          <div className="relative w-full max-h-[600px] flex justify-center items-center overflow-hidden">
            <img
              src={certificationImages[currentIndex]}
              alt={`Certification ${currentIndex + 1}`}
              className="w-full h-auto max-h-[550px] object-contain rounded-lg shadow-lg"
            />

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certification;
