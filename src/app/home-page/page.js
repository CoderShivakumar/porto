"use client";
import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="px-6 md:px-20 mt-10">
        <h1 className="text-xl md:text-2xl font-bold">Hello! I'm Shivakumar</h1>
        <h1 className="text-4xl md:text-7xl mt-5 font-bold">
          Designing next-gen websites
        </h1>
        <h1 className="text-4xl md:text-7xl font-bold">
          powered by{" "}
          <span className="text-gray-400">advanced technologies.</span>
        </h1>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between">
          <button className="rounded-full font-bold bg-black px-10 py-4 text-white text-xl hover:bg-gray-700 transition">
            <a href="/portfolio.pdf" download="Shivakumar_Resume.pdf" className="text-white">
              Download Resume
            </a>
          </button>
          <div className="mt-8 md:mt-0 text-lg text-gray-600 md:text-right md:max-w-md">
            <h1 className="font-light">
              A multidisciplinary designer harnessing the power of
            </h1>
            <h1 className="font-light">
              design to achieve online goals.
            </h1>
          </div>
        </div>
      </div>

      {/* Skills & Stacks Section */}
      <div className="px-6 md:px-20 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-10">
          {/* Heading - LEFT */}
          <div className="md:w-1/2 text-left md:pr-10">
            <h1 className="text-4xl font-bold">Skills</h1>
            <h1 className="text-4xl font-bold">& Stacks</h1>
          </div>

          {/* Tech Cards - RIGHT */}
          <div className="md:w-1/2 bg-gray-100 rounded-3xl p-8 space-y-8 shadow-md  shadow-gray-700">
            {/* All Images in One Row */}
            <div className="flex  flex-row gap-6 flex-wrap justify-center">
              <img src="html.png" alt="HTML" className="w-12 h-12" />
              <img src="css.png" alt="CSS" className="w-12 h-12" />
              <img src="js.png" alt="JavaScript" className="w-12 h-12" />
              <img src="next.png" alt="Next.js" className="w-12 h-12" />
              <img src="Tailwind CSS.png" alt="Tailwind CSS" className="w-12 h-12" />
              <img src="git.png" alt="Git" className="w-12 h-12" />
              <img src="github.png" alt="GitHub" className="w-12 h-12" />
              <img src="java-logo.png" alt="Java" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Favourite Quote Section */}
      <div className="text-center text-3xl font-bold mt-20 px-6 ">
        <h1 className="mb-8">My Favourite Quote</h1> 
        <div className="flex flex-col items-center bg-gray-100 p-10 rounded-3xl shadow-lg max-w-xl mx-auto shadow-gray-700">
          <img
            src="ali.jpg"
            alt="Muhammad Ali"
            className="w-40 h-40 object-cover rounded-full mb-6 shadow-md drop-shadow-[0_0_10px_yellow]"
          />
          <p className="text-xl font-light italic text-gray-700 text-center">
            "Float like a butterfly, sting like a bee."
          </p>
          <span className="text-sm text-gray-500 mt-2">— Muhammad Ali</span>
        </div>
      </div>

      {/* History Section */}
      <div className="mt-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          History of <span className="text-gray-400">Shivakumar</span>
        </h1>

        <div className="flex justify-center">
          <div className="relative border-l-4 border-blue-500 ml-4 pl-6 space-y-10">
            {/* 2023 */}
            <div className="group">
              <div className="absolute -left-5 w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
              <h3 className="text-xl font-semibold">2023 – Entered Engineering</h3>
              <p className="text-gray-600 mt-1">
                Joined B.E Mechanical Engineering at K.S.Rangasamy College of Technology.
                This is where I began learning HTML and CSS, sparking my interest in web development.
              </p>
            </div>

            {/* 2024 – Projects & AI Tools */}
            <div className="group">
              <div className="absolute -left-5 w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
              <h3 className="text-xl font-semibold">2024 – Building Projects & Exploring AI Tools</h3>
              <p className="text-gray-600 mt-1">
                Started building projects using HTML and CSS. I also explored AI tools like ChatGPT and GitHub Copilot
                to enhance coding efficiency and problem-solving speed.
              </p>
            </div>

            {/* 2024 – CSS Frameworks */}
            <div className="group">
              <div className="absolute -left-5 w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
              <h3 className="text-xl font-semibold">2024 – Diving into CSS Frameworks</h3>
              <p className="text-gray-600 mt-1">
                Started learning modern CSS frameworks like Tailwind CSS to level up UI design and improve workflow.
              </p>
            </div>

            {/* 2025 – Internship */}
            <div className="group">
              <div className="absolute -left-5 w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
              <h3 className="text-xl font-semibold">2025 – Full Stack Developer Intern</h3>
              <p className="text-gray-600 mt-1">
                Joined Hertzwork Private Limited as a Full Stack Developer Intern, gaining real-world experience
                in both frontend and backend development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
