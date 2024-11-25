// app/[locale]/(with-header)/layout.js

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="p-4 bg-background text-white h-[8vh] sticky top-0 "></header>
      <main>{children}</main>
    </>
  );
}
