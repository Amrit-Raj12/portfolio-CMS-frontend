import MyPortfolios from "@/components/Dashboard/My-Portfolios";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomeLayout from "@/components/LandingComponents/HomeLayout/HomeLayout";
import Landing from "@/components/LandingComponents/Landing";

export const metadata: Metadata = {
  title: "Portfolify | CMS",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <Landing />
      {/* <DefaultLayout>
        <MyPortfolios />
      </DefaultLayout> */}
    </>
  );
}
