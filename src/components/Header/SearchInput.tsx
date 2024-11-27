import { useTranslations } from "next-intl";

export default function SearchInput() {
  const t = useTranslations("SearchInput");

  return (
    <input
      type="search"
      placeholder={t("search")}
      className="w-full h-10 px-4 text-sm text-gray-700 placeholder-gray-500 bg-background border border-gray-300 rounded-[30px] outline-none"
    />
  );
}
