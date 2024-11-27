/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import SocialsPortfolio, { spotifyVerified } from "./SocialsPortfolio";
import { usePortfolio } from "@/hooks/userPortfolio";
import SaveButton from "./SaveButton";
import { UserPortfolio, SocialLinks } from "@/@types/Portfolio";
import { useTranslations } from "next-intl";
import { ProfileButtons } from "./ProfileButtons";

export default function Portfolio({
  user,
  userId = "",
}: {
  user: UserPortfolio;
  userId?: string;
}) {
  const {
    opacity,
    transformStyle,
    refHeader,
    color,
    isProfile,
    bannerLoaded,
    setBannerLoaded,
    avatarLoaded,
    setAvatarLoaded,
  } = usePortfolio(user, userId);
  const t = useTranslations("Portfolio");

  return (
    <div className="p-[5px] max-w-[800px] mx-auto relative">
      <header
        className="bg-background text-foreground relative flex items-center justify-center h-[18vh] md:h-[28vh] rounded-t-lg"
        ref={refHeader}
      >
        <div className="absolute z-0 h-full w-full overflow-hidden rounded-t-lg">
          <div
            className="h-full w-full absolute z-[100] rounded-t-lg"
            style={{ backgroundColor: color }}
          />

          <div className="h-full w-full absolute z-[300] rounded-t-lg" />
          {/* Loader Placeholder for Banner */}
          {!bannerLoaded && (
            <div className="h-full w-full absolute bg-gray-300 animate-pulse-solid rounded-t-lg z-[350]"></div>
          )}

          {/* Banner Image */}
          <Image
            src={user.banner || "/images/default_banner.webp"}
            alt="Spotify Banner"
            fill
            className={`h-full w-full object-cover filter brightness-[.9] relative rounded-t-lg transition-transform transition-opacity z-[350] ${
              bannerLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              opacity,
              transform: transformStyle,
              transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
            }}
            onLoad={() => setBannerLoaded(true)}
            priority={true}
          />
        </div>
      </header>

      <div className="min-h-screen text-white relative">
        <div
          className="h-[50px] w-full absolute z-[400] top-0"
          style={{
            background: `linear-gradient(180deg, ${color} 0%, var(--background) 100%)`,
          }}
        />

        <div className="absolute -top-[45px] w-full flex justify-center md:-top-[60px]">
          <div className="text-center w-full relative">
            {/* Loader Placeholder for Avatar */}
            {!avatarLoaded && (
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gray-300 animate-pulse-solid ml-4 z-[400] absolute top-0" />
            )}

            {/* Avatar Image */}
            <Image
              src={user.avatar || "/images/default_avatar.jpg"}
              alt={user.name}
              width={80}
              height={80}
              className={`rounded-full ml-4 z-[400] relative md:h-[100px] md:w-[100px] transition-opacity ${
                avatarLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setAvatarLoaded(true)}
            />

            <section className="p-4 bg-background rounded-lg z-[300] relative">
              <div className="flex flex-col relative">
                <h1 className="text-2xl font-bold text-start gap-[.35rem] flex items-center leading-none md:text-3xl">
                  {user.name}
                  {spotifyVerified}
                </h1>
                <h2 className="text-md text-start leading-none mt-[.2rem] md:text-lg md:mt-0">
                  @{user.username}
                </h2>

                <SaveButton
                  mainColor={user?.banner ? user?.mainColor : undefined}
                />

                <ProfileButtons userId={user.userId} isProfile={isProfile} />
              </div>

              {user?.socialLinks?.spotify && (
                <p className="text-start text-white mt-[.4rem]">
                  <span>
                    {user.socialLinks.spotify.monthlyListeners}{" "}
                    {t("monthlyListeners")}{" "}
                    <a
                      className="text-[#3be477] underline"
                      href={user.socialLinks.spotify.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Spotify
                    </a>
                  </span>
                </p>
              )}

              {/* <SocialsPortfolio socialLinks={user.socialLinks as SocialLinks} /> */}
            </section>

            <main className="mt-[5px]">
              <section className="p-4 bg-background rounded-lg">
                <h2 className="text-2xl font-bold text-start">{t("about")}</h2>
                <p className="text-start text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec odio vitae libero ultricies ultricies. Nullam nec
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
