import HomeLayout from "@/components/LandingComponents/HomeLayout/HomeLayout";
import PortfolioShowcase from "@/components/Showcase/Portfolio-showcase";
import Templates from "@/components/Templates/Templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <HomeLayout>
        <Templates />
      </HomeLayout>
    </>
  );
}
