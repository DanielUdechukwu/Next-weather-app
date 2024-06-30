import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ChartSection from "../components/ChartArea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ChartSection />
    </>
  );
}
