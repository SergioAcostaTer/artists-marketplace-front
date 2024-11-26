import { COLOR_BACKGROUND } from "@/hooks/userPortfolio";
import { lightenHexColor } from "@/lib/colorUtils";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function SaveButton({
  scale = 1.03,
  rotation = 1,
  mainColor = COLOR_BACKGROUND,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [animate, setAnimate] = useState(false);
  const t = useTranslations("Portfolio");

  const handleSave = () => {
    setAnimate(true);
    setIsSaved(!isSaved);
    setTimeout(() => setAnimate(false), 300);
  };
  

  const color = lightenHexColor(mainColor || COLOR_BACKGROUND, 20);

  return (
    <button
      onClick={handleSave}
      className={`relative px-4 py-2 mt-2 text-sm font-semibold rounded-lg transition-all duration-300 transform ${
        isSaved
          ? "text-white hover:bg-green-600"
          : "text-gray-900 hover:bg-gray-400"
      } ${animate ? `scale-${scale} rotate-${rotation}` : ""}`}
      style={{
        transform: animate ? `scale(${scale}) rotate(${rotation}deg)` : "none",
        backgroundColor: isSaved ? color : "#d1d5db",
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
            {t("saved")}
          </>
        ) : (
          t("save")
        )}
      </span>
    </button>
  );
}
