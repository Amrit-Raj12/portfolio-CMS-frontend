import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
