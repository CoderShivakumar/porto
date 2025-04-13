"use client";
import React, { useState } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Work = () => {
  const workImages = [
    '/images/project-1-oli.jpg',
    '/images/project-2-school.jpg',
    '/images/project-3-friendsfinder.jpg',
  ];
  const achievementImages = [
    '/images/won-1.jpg',
    '/images/won-2.jpg',
    '/images/won-3.jpg',
    '/images/won-4.jpg',
  ];
  const volunteerImages = [
    '/images/volunteer-2.jpg',
    '/images/volunteer-4.jpg',
    '/images/volunteer-3.jpg',
  ];

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const [currentVolunteerIndex, setCurrentVolunteerIndex] = useState(0);

  const handlePrevious = (setter, images) => {
    setter((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (setter, images) => {
    setter((prevIndex) => (prevIndex + 1) % images.length);
  };

  const renderImage = (src, alt) => (
    <div className="relative w-full sm:w-3/4 lg:w-1/2 h-auto rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        unoptimized
        className="object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
      />
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 lg:px-16">

        {/* Work Section */}
        <div className="mt-10 font-bold text-center sm:text-left">
          <h1 className="text-lg sm:text-xl lg:text-2xl">My Works</h1>
          <p className="text-4xl sm:text-6xl lg:text-8xl">Building Projects</p>
          <p className="text-4xl sm:text-6xl lg:text-8xl text-gray-400">for Personal Upskilling</p>
        </div>

        {/* Work Image Slider */}
        <div className="mt-10 flex justify-center items-center relative">
          <button
            onClick={() => handlePrevious(setCurrentWorkIndex, workImages)}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {renderImage(workImages[currentWorkIndex], `Work Slide ${currentWorkIndex + 1}`)}
          <button
            onClick={() => handleNext(setCurrentWorkIndex, workImages)}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-5 text-center sm:text-left">
            Achievements
          </h1>
          <div className="mt-10 flex justify-center items-center relative">
            <button
              onClick={() => handlePrevious(setCurrentAchievementIndex, achievementImages)}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {renderImage(achievementImages[currentAchievementIndex], `Achievement Slide ${currentAchievementIndex + 1}`)}
            <button
              onClick={() => handleNext(setCurrentAchievementIndex, achievementImages)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="mt-16">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-5 text-center sm:text-left">
            Volunteering
          </h1>
          <div className="mt-10 flex justify-center items-center relative">
            <button
              onClick={() => handlePrevious(setCurrentVolunteerIndex, volunteerImages)}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {renderImage(volunteerImages[currentVolunteerIndex], `Volunteer Slide ${currentVolunteerIndex + 1}`)}
            <button
              onClick={() => handleNext(setCurrentVolunteerIndex, volunteerImages)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
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

export default Work;
