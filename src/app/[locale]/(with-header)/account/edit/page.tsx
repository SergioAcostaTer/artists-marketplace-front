/* eslint-disable @typescript-eslint/no-unused-vars */
import SSR from "@/lib/SSR";
import EditForm from "@/components/Edit/EditForm";
import { UserPortfolio } from "@/@types/Portfolio";
import { PortfolioRepository } from "@/services/PortfolioRepository";
import { redirect } from "next/navigation";

export default async function EditProfile() {
  let portfolio: UserPortfolio | null = null;

  try {
    portfolio = await SSR(PortfolioRepository.getMyPortfolio);
  } catch (error) {}

  if (!portfolio) {
    redirect("/");
  }

  return (
    <>
      <EditForm user={portfolio} />
    </>
  );
}
