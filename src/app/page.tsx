"use client";
import React, { useState } from "react";

export default function Home() {
  // State to handle the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-pink-400 min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Element */}
      <div className="absolute top-1/4 left-1/4 bg-gradient-to-br from-purple-400 to-purple-500 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-80"></div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-10 relative z-10 text-center">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold text-white">HAPPY</h1>
          <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold text-white">BIRTHDAY AMARI!</h2>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">DECEMBER 18, 2024</p>
         
          <p className="text-white text-sm max-w-xs mx-auto cursor-pointer" onClick={openModal}>
            LET&apos;S CELEBRATE!
          </p>

          <button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:bg-gradient-to-l hover:from-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105"
            onClick={openModal}
          >
            CLICK ME
          </button>
        </div>
      </div>

      {/* Balloons */}
      <div className="absolute top-1/4 right-1/4 w-20 h-32 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute top-3/4 left-1/4 w-20 h-32 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute top-1/4 left-1/2 w-16 h-24 bg-gradient-to-b from-purple-300 to-purple-500 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute top-3/4 right-1/6 w-14 h-20 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute top-3/5 left-3/4 w-22 h-34 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-full shadow-lg animate-bounce"></div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg text-center max-w-lg w-full shadow-xl transform transition-all duration-300 scale-95 hover:scale-100">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
              HAPPY BELATED <br /> 19th <br /> BIRTHDAY, AMARI!
            </h2>
            <p className="mt-4 text-xl text-gray-800">
              May this year be filled with endless joy and happiness! <br /> - Minh
            </p>
            
            <button
              className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:bg-gradient-to-l hover:from-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
