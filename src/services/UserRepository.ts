import axiosInstance from "@/lib/axiosInstance";

export const UserRepository = {
  login: async (credentials: {
    email: string;
    username: string;
    name: string;
    picture: string;
  }) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", credentials);
      return data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Failed to login.");
    }
  },
  logout: async () => {
    try {
      const { data } = await axiosInstance.post("/auth/sign-out");
      return data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Failed to logout");
    }
  },
  me: async ({ token }: { token?: string } = { token: "" }) => {
    try {
      const { data } = await axiosInstance.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to fetch user."
      );
    }
  },
};
