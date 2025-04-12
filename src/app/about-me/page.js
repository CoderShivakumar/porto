"use client"
import React from 'react'
import { Footer } from '../components/footer'
import { useRouter } from 'next/navigation'
import { Navbar } from '../components/navbar'

const About = () => {
  const router = useRouter();
  const handleContactRedirect = () => {
    router.push('/contact-us');
  };

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-16 mt-10">
        <h5 className="text-xl md:text-2xl font-extrabold">About me</h5>

        <div className="flex flex-col lg:flex-row justify-between items-start mt-6 gap-10">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-sans">Innovative</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">Full stack</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">developer</h1>
          </div>

          <div className="flex flex-col justify-between w-full lg:max-w-xl mt-6 lg:mt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-thin mb-10">
              Hey, I'm Shivakumar — a full stack developer from Namakkal, turning ideas into seamless digital solutions with clean, efficient code.
            </p>

            <div className="mt-auto flex lg:justify-end">
              <button
                className="bg-black text-white text-lg md:text-2xl lg:text-3xl rounded-full px-8 md:px-10 lg:px-14 py-3 md:py-4 hover:bg-gray-800 transition"
                onClick={handleContactRedirect}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 mt-10">
        <img
          src="/images/image.jpg"
          alt="About Visual"
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-md"
        />
      </div>

      <div className="px-6 md:px-16 mt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">My Experience</h1>
        <div className="mt-5 text-xl md:text-2xl">
          <h2 className="font-bold">Full Stack Developer</h2>
          <p className="font-light">Hertzwork Private Limited</p>
        </div>
      </div>

      <div className="px-6 md:px-16 mt-10">
        <h1 className="font-bold text-2xl md:text-3xl">Tools and Technologies</h1>
        <div className="overflow-hidden py-4 flex justify-center items-center h-40">
          <div className="flex w-max animate-scroll gap-8">
            <img src="/html.png" className="h-12 md:h-16" alt="HTML" />
            <img src="/css.png" className="h-12 md:h-16" alt="CSS" />
            <img src="/next.png" className="h-12 md:h-16" alt="Next.js" />
            <img src="/git.png" className="h-12 md:h-16" alt="Git" />
            <img src="/github.png" className="h-12 md:h-16" alt="GitHub" />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="w-full lg:w-1/3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-left">Awards & Recognition</h1>
          </div>

          <div className="w-full lg:w-2/3 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">🏆 First Prize - Paper Presentation</h2>
              <p className="text-base md:text-lg text-gray-600">Knowledge Institute of Technology</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">🏆 First Prize - Blind Coding</h2>
              <p className="text-base md:text-lg text-gray-600">Excel College of Engineering</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">🥈 Second Prize - One Day CEO</h2>
              <p className="text-base md:text-lg text-gray-600">Knowledge Institute of Technology</p>
            </div>
          </div>
        </div>

        <div className="justify-center items-center flex flex-col mt-14 text-center px-4">
          <h1 className="font-thin text-lg md:text-xl">Have an idea?</h1>
          <h1 className="text-5xl md:text-7xl font-extrabold">Let's rock <span className="text-gray-400 font-bold">with me</span></h1>
          <ul className="flex flex-wrap justify-center gap-6 font-bold underline mt-5">
            <li><a href="#">ABOUT ME</a></li>
            <li><a href="#">WORKS</a></li>
            <li><a href="#">INSIGHTS</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
