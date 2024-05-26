import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PortfolioCreate from "@/components/Create/PortfolioCreate";

export const metadata: Metadata = {
  title: "Porfolify | CMS",
  description: "This is Portfolio Create Page for Porfolify Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <PortfolioCreate />
      </DefaultLayout>
    </>
  );
}
