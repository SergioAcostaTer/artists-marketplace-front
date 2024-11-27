/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

const HEADER_PERCENTAGE = 0.6;
export const COLOR_BACKGROUND = "#131635";

export function usePortfolio(user: any, userId: string) {
  const [opacity, setOpacity] = useState(1);
  const isProfile = user.userId === userId;
  const [transformStyle, setTransformStyle] = useState("");
  const refHeader = useRef<HTMLDivElement>(null);
  const color = !!user.banner ? user.mainColor : COLOR_BACKGROUND;
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

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

  return {
    opacity,
    transformStyle,
    refHeader,
    color,
    isProfile,
    setBannerLoaded,
    bannerLoaded,
    avatarLoaded,
    setAvatarLoaded,
  };
}
