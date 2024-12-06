// "use client";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import SearchInput from "./SearchInput";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="h-[64px]" />
      <header className="p-4 bg-background text-white h-[64px] fixed top-0 z-[1000] gap-2 grid grid-cols-[auto,1fr,auto] items-center w-full border-b border-[#ffffff87]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logos/vice.webp"
              alt="Logo"
              width={80}
              height={80}
              className="w-20 object-contain"
              priority={true}
            />
          </Link>
        </div>
        <div>
          <SearchInput />
        </div>
        <div>
          <MenuMobile />
        </div>
      </header>
    </>
  );
}
