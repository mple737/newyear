"use client";

import React, { useState, useEffect } from "react";
import { Fireworks } from "fireworks-js";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSoundPlayed, setIsSoundPlayed] = useState(false); // Track if the sound is played

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // This function plays the sound after the first user interaction with the page
    const playSoundOnInteraction = () => {
      if (!isSoundPlayed) {
        const audio = document.getElementById("fireworksSound") as HTMLAudioElement;
        audio.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
        setIsSoundPlayed(true); // Ensure sound only plays once
      }
      // Remove event listener after the first interaction to avoid redundant sound play
      window.removeEventListener("click", playSoundOnInteraction);
    };

    // Add event listener to play sound after first click anywhere on the page
    window.addEventListener("click", playSoundOnInteraction);

    const container = document.getElementById("fireworks-container");

    if (container) {
      const fireworks = new Fireworks(container, {
        acceleration: 1.05,
        particles: 150,
        explosion: 6,
      });
      fireworks.start();

      return () => fireworks.stop();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-pink-400 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fireworks container */}
      <div
        id="fireworks-container"
        className="absolute inset-0 z-10 pointer-events-none"
      ></div>

      {/* Background blur */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-80"></div>

      {/* Main content */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-10 relative z-10 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold text-white">
            HAPPY NEW
          </h1>
          <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold text-white">
            YEAR EVERYONE!
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-white text-6xl sm:text-4xl md:text-9xl font-bold">
            2025
          </p>
          <p
            className="text-white text-sm max-w-xs mx-auto cursor-pointer"
            onClick={openModal}
          >
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

      {/* Audio element */}
      <audio id="fireworksSound" src="/fireworks-close-29630.mp3" preload="auto"></audio>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg text-center max-w-lg w-full shadow-xl transform transition-all duration-300 scale-95 hover:scale-100">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
              HAPPY NEW YEAR YALL!
            </h2>
            <p className="mt-4 text-xl text-gray-800">
              Wishing you all a year filled with love, laughter, and all
              wonderful things. I’m proud of every single one of you and
              everything yall have accomplished. Here's to more amazing moments
              together this year, and thank you for being amazing
              friends. <br />
              <br />- Minh
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
