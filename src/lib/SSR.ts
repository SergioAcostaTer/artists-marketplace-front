import { cookies } from "next/headers";

async function SSR(callback: any, data = {}): Promise<any> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("No token found.");
  }

  return callback({ ...data, token });
}

export default SSR;
