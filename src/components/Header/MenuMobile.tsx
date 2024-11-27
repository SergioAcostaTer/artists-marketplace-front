/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="h-8 w-8 flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/icons/list.svg" alt="Menu" className="h-6 w-6" />
      </div>

      <div
        className="w-full fixed top-0 left-0 z-[900] bg-black bg-opacity-50 top-[64px] h-[calc(100vh-64px-4.5rem)]"
        style={{
          display: isOpen ? "block" : "none",
          transitionBehavior: "allow-discrete",
        }}
        onClick={() => setIsOpen(false)}
      />

      <div
        className="w-[60vw] bg-background text-white fixed left-0 z-[1000] flex flex-col items-center justify-center top-[64px] h-[calc(100vh-64px-4.5rem)]"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full"></div>
      </div>
    </>
  );
}
