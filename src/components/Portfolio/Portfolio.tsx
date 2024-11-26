"use client";

import Image from "next/image";
import SocialsPortfolio, { spotifyVerified } from "./SocialsPortfolio";
import { usePortfolio } from "@/hooks/userPortfolio";
import SaveButton from "./SaveButton";
import { UserPortfolio } from "@/@types/Portfolio";
import { useTranslations } from "next-intl";

export default function Portfolio({
  initialUser,
}: {
  initialUser: UserPortfolio;
}) {
  const { user, opacity, transformStyle, refHeader, color } =
    usePortfolio(initialUser);
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

          <Image
            src={user.banner || "/images/default_banner.webp"}
            alt="Spotify Banner"
            layout="fill"
            className="h-full w-full object-cover filter brightness-[.9] z-[200] relative rounded-t-lg"
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
            background: `linear-gradient(180deg, ${color} 0%, var(--background) 100%)`,
          }}
        />

        <div className="absolute -top-[60px] w-full flex justify-center">
          <div className="text-center w-full">
            <Image
              src={user.avatar || "/images/default_avatar.jpg"}
              alt={user.name}
              width={100}
              height={100}
              className="rounded-full ml-4 z-[400] relative"
            />
            <section className="p-4 bg-background rounded-lg z-[300]">
              <div className="flex flex-col relative">
                <h1 className="text-3xl font-bold text-start gap-[.35rem] flex items-center leading-none">
                  {user.name}
                  {spotifyVerified}
                </h1>
                <h2 className="text-lg text-start leading-none mt-[.2rem]">
                  @{user.username}
                </h2>

                <SaveButton mainColor={user?.banner && user?.mainColor} />
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

              <SocialsPortfolio socialLinks={user.socialLinks} />
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
