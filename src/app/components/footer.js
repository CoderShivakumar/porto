import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[rgb(3,7,18)] px-6 md:px-16 py-10 mt-10 text-white">
        {/* Info Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-6xl">shivakumar</h1>
          <p className="text-base md:text-xl mt-2">A Full stack developer with innovative thinking approach</p>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
  <a
    href="https://github.com/CoderShivakumar" // <-- replace with your GitHub URL
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="rounded-3xl bg-blue-800 px-6 py-2 text-sm md:text-base text-white">
      GitHub
    </button>
  </a>
</div>


        {/* Page List */}
        

        {/* Stay Connected Section */}
        

        {/* Copyright */}
        <div className="flex justify-center text-gray-500 mt-10 text-sm">
          <h1>
            ©2023. Designed by <span className="text-gray-200">Shivakumar R</span> - Powered by <span className="text-gray-200">SENA</span>
          </h1>
        </div>
      </footer>
  )
}
