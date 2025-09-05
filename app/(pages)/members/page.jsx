"use client";

import { useState } from "react";

export default function Members() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageSrc, alt) => {
    setSelectedImage({ src: imageSrc, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none animate-pulse">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative z-10 p-8 w-full">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">
            Våre Medlemmer
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src="/meg.jpg"
                  alt="Meg"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => openImageModal("/meg.jpg", "Meg")}
                />
                <h3 className="text-2xl font-bold text-white">Meg</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                CS2 Global Elite | 2.5K hours | AWP Main | Rank S Player
              </p>
            </div>

            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src="/meg.jpg"
                  alt="Member 2"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => openImageModal("/meg.jpg", "Member 2")}
                />
                <h3 className="text-2xl font-bold text-white">Member 2</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Valorant Radiant | 1.8K hours | Jett Main | Pro Team Captain
              </p>
            </div>

            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src="/meg.jpg"
                  alt="Member 3"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => openImageModal("/meg.jpg", "Member 3")}
                />
                <h3 className="text-2xl font-bold text-white">Member 3</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                League of Legends Challenger | 3.2K hours | Mid Lane | 1v9 Carry
              </p>
            </div>
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src="/meg.jpg"
                  alt="Member 4"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => openImageModal("/meg.jpg", "Member 4")}
                />
                <h3 className="text-2xl font-bold text-white">Member 4</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Apex Legends Predator | 1.5K hours | Wraith Main | 20 Bomb
                Record
              </p>
            </div>
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src="/meg.jpg"
                  alt="Member 5"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => openImageModal("/meg.jpg", "Member 5")}
                />
                <h3 className="text-2xl font-bold text-white">Member 5</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Overwatch Top 500 | 2.1K hours | Tracer Main | OWL Contender
              </p>
            </div>
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src="/meg.jpg"
                  alt="Member 6"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => openImageModal("/meg.jpg", "Member 6")}
                />
                <h3 className="text-2xl font-bold text-white">Member 6</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Fortnite Champion | 4.0K hours | Builder Pro | World Cup
                Qualifier
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
