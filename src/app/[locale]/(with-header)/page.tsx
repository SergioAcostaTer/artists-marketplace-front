import { Me } from "@/@types/Users";
import LogOut from "@/components/Login/LogOut";
import SSR from "@/lib/SSR";
import { UserRepository } from "@/services/UserRepository";

export default async function Home() {
  try {
    const me: Me = await SSR(UserRepository.me);

    return (
      <div>
        <h1>Hello, {me.name}!</h1>
        <p>Your email is {me.email}</p>
        <LogOut className="text-blue-500" element="button">Log Out</LogOut>
      </div>
    );
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}
