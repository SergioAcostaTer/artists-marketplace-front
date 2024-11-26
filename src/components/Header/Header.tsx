import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="p-4 bg-background text-white h-[8vh] sticky top-0 flex justify-between items-center z-[1000]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div></div>
      <div>
        <MenuMobile />
      </div>
    </header>
  );
}
