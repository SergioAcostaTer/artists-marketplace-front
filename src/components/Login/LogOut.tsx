"use client";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await UserRepository.logout();
      router.refresh();
    } catch (error: any) {
      console.error(error.message);
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
