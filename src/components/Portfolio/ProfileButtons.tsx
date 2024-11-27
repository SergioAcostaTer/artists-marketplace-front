/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const ProfileButtons = ({
  userId,
  isProfile,
}: {
  userId: string;
  isProfile: boolean;
}) => {
  const t = useTranslations("ProfileButtons");

  return (
    <div className="grid grid-cols-2 gap-2 mt-[.5rem]">
      {isProfile ? (
        <>
          <Link
            href="/account/edit"
            className="border border-white rounded-md py-[0.25rem] text-center text-sm flex items-center justify-center"
          >
            {t("edit")}
          </Link>
          <Link
            href="/settings"
            className="border border-white rounded-md py-1 text-center text-sm flex items-center justify-center"
          >
            {t("share")}
          </Link>
        </>
      ) : (
        <>
          <Link
            href={`/message`}
            className="border border-white rounded-md py-[0.25rem] text-center text-sm flex items-center justify-center"
          >
            {t("message")}
          </Link>
          <Link
            href={`/report}`}
            className="border border-white rounded-md py-[0.25rem] text-sm flex items-center justify-center"
          >
            {t("collab")}
          </Link>
        </>
      )}
    </div>
  );
};
