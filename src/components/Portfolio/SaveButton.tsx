import React, { useState } from "react";

export default function SaveButton({ scale = 1.03, rotation = 1 }) {
  const [isSaved, setIsSaved] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleSave = () => {
    setAnimate(true);
    setIsSaved(!isSaved);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <button
      onClick={handleSave}
      className={`relative px-4 py-2 mt-2 text-sm font-semibold rounded-lg transition-all duration-300 transform ${
        isSaved
          ? "bg-green-500 text-white hover:bg-green-600"
          : "bg-gray-300 text-gray-800 hover:bg-gray-400"
      } ${animate ? `scale-${scale} rotate-${rotation}` : ""}`}
      style={{
        boxShadow: animate ? "0 0 10px rgba(72, 187, 120, 0.8)" : "none",
        transform: animate ? `scale(${scale}) rotate(${rotation}deg)` : "none",
      }}
    >
      <span className="flex items-center justify-center w-full">
        {isSaved ? (
          <>
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Saved
          </>
        ) : (
          "Save Profile"
        )}
      </span>
    </button>
  );
}
