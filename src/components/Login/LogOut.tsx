"use client";
import { UserRepository } from "@/services/UserRepository";
import React from "react";

export default function LogOut({
  children,
  className,
  element = "div",
}: {
  children: React.ReactNode;
  className?: string;
  element?: string;
}) {
  const handleLogOut = async () => {
    try {
      await UserRepository.logout();
      window.location.reload();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return React.createElement(
    element,
    {
      onClick: handleLogOut,
      className,
    },
    children
  );
}
