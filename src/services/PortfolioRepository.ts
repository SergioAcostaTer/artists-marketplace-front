import axiosInstance from "@/lib/axiosInstance";

export const PortfolioRepository = {
  getPortfolio: async (username: string) => {
    try {
      const { data } = await axiosInstance.get(
        `/portfolio?username=${username}`
      );
      return data;
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to fetch user."
      );
    }
  },
  getMyPortfolio: async ({ token }: { token?: string }) => {
    try {
      const { data } = await axiosInstance.get("/portfolio/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error: any) {
      console.error(error);
      throw new Error(
        error?.response?.data?.message || "Failed to fetch user."
      );
    }
  },
};
