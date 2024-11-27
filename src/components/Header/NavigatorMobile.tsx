/* eslint-disable @next/next/no-img-element */
"use client";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import { Me } from "@/@types/Users";
import { useTranslations } from "next-intl";

const buttonList = [
  {
    name: "home",
    href: "/",
    src: "/icons/home.svg",
  },
  {
    name: "search",
    href: "/Search",
    src: "/icons/search.svg",
  },
  {
    name: "upload",
    href: "/Upload",
    src: "/icons/add.svg",
  },
  {
    name: "notifications",
    href: "/Notifications",
    src: "/icons/notifications.svg",
  },
];

export default function NavigatorMobile({
  initialUser,
}: {
  initialUser?: Me | null;
}) {
  const { user } = useUser(initialUser);
  const t = useTranslations("NavigatorMobile");

  return (
    <nav className="flex items-center justify-between h-[4.5rem] text-white shadow-md sticky bottom-0 z-[1500] bg-background md:hidden border-t border-[#ffffff65]">
      <ul className="grid grid-cols-5 w-full">
        {buttonList.map((button) => (
          <li
            key={button.name}
            className="items-center justify-center w-full flex flex-col"
          >
            <Link
              href={button.href}
              passHref
              className="flex flex-col items-center gap-1"
            >
              <img src={button.src} alt={t(button.name)} className="h-8 w-8" />
              <span className="text-xs">{t(button.name)}</span>
            </Link>
          </li>
        ))}
        <li className="items-center justify-center w-full flex flex-col">
          {user?.profilePicture ? (
            <Link
              href={`/${user?.username}`}
              passHref
              className="flex flex-col items-center gap-1"
            >
              <div className="relative h-8 w-8">
                <img
                  src={user?.profilePicture}
                  alt="User"
                  className="h-8 w-8 rounded-full z-50 relative"
                />
                <div className=" bg-gray-300 animate-pulse h-8 w-8 rounded-full z-40 absolute top-0 left-0"></div>
              </div>
              <span className="text-xs">{t("profile")}</span>
            </Link>
          ) : (
            <Link
              href="/login"
              passHref
              className="flex flex-col items-center gap-1"
            >
              <img src="/icons/user.svg" alt="User" className="h-8 w-8" />
              <span className="text-xs">{t("login")}</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
