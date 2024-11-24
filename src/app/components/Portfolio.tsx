"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const user = {
  name: "Dani Acosta",
  username: "daniacosta",
  avatar: "https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d",
  banner: "https://i.scdn.co/image/ab67618600001016fe34b817adcfef3e76e4e2c7",
};

export default function Portfolio({}: { username: string }) {
  const [opacity, setOpacity] = useState(1);
  const [transformStyle, setTransformStyle] = useState("");
  const refHeader = useRef<HTMLDivElement>(null);

  const HEADER_PERCENTAGE = 0.5;
  const COLOR_BACKGROUND = "#550401";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        (refHeader.current?.clientHeight || 0) * HEADER_PERCENTAGE;
      const progress = Math.min(scrollY / maxScroll, 1);

      setOpacity(1 - progress);

      const scale = 1 + progress * 0.1;
      const rotateX = progress * 10;
      const rotateY = progress * 5;

      setTransformStyle(
        `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className="bg-background text-foreground relative flex items-center justify-center h-[25vh] md:h-[35vh] "
        ref={refHeader}
      >
        <div className="absolute z-0 h-full w-full overflow-hidden">
          <div
            className="h-full w-full absolute z-[100]"
            style={{ backgroundColor: COLOR_BACKGROUND }}
          />

          <div className="h-full w-full absolute z-[300]" />

          <Image
            src="https://i.scdn.co/image/ab67618600001016fe34b817adcfef3e76e4e2c7"
            alt="Spotify"
            width={1000}
            height={1000}
            className="h-full w-full object-cover filter brightness-[.9] z-[200] relative"
            style={{
              opacity,
              transform: transformStyle,
              transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
            }}
          />
        </div>
      </header>

      <div className="min-h-screen text-white relative">
        <div
          className="h-[50px] w-full absolute z-[100] top-0"
          style={{
            background: `linear-gradient(180deg, ${COLOR_BACKGROUND} 0%, var(--background) 100%)`,
          }}
        />

        <div className="absolute -top-[60px] w-full flex justify-center">
          <div className="max-w-3xl text-center w-full z-[200]">
            <Image
              src="https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d"
              alt="Spotify"
              width={100}
              height={100}
              className="rounded-full ml-4"
            />
            <main className="p-4">
              <h1 className="text-4xl font-bold text-start">{user.name}</h1>
              <h2 className="text-2xl text-start">@{user.username}</h2>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
