// app/[locale]/(with-header)/layout.js
import Header from "@/components/Header/Header";
import NavigatorMobile from "@/components/Header/NavigatorMobile";
import SSR from "@/lib/SSR";
import { UserRepository } from "@/services/UserRepository";
import { Me } from "@/@types/Users";

export default async function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let me: Me | null = null;

  try {
    me = await SSR(UserRepository.me);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen bg-[#0e0e0e]">
      <Header />
      <main>{children}</main>
      <NavigatorMobile initialUser={me} />
    </div>
  );
}
