// "use client";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="p-4 bg-background text-white h-[64px] sticky top-0 z-[1000] gap-2 grid grid-cols-[auto,1fr,auto] items-center">
      <div className="flex justify-between items-center">
        <Image
          src="/logos/vice.webp"
          alt="Logo"
          width={80}
          height={80}
          className="w-20 object-contain"
          priority={true}
        />
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <MenuMobile />
      </div>
    </header>
  );
}
