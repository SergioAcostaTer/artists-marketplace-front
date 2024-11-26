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
};
