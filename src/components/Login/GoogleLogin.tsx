"use client";
import React from "react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import useGoogle from "@/hooks/useGoogle";
import { useTranslations } from "next-intl";

const GoogleLoginButton: React.FC = () => {
  const t = useTranslations("Login");
  const { setGoogleUser, loading, error } = useGoogle();

  const login = useGoogleLogin({
    onSuccess: (codeResponse: TokenResponse) => {
      setGoogleUser(codeResponse);
    },
    onError: (error: any) => console.log("Login Failed:", error),
  });

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => login()}
        className="flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-md px-6 py-3 hover:shadow-lg hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <Image
          src="/logos/google.svg"
          alt="Google Logo"
          className="h-6 w-6 mr-3"
          width={24}
          height={24}
        />
        <span className="text-gray-700 text-lg font-medium">
          {loading ? t("loggingIn") : t("google")}
        </span>
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default GoogleLoginButton;
