import * as React from "react";
import { Ubuntu } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jérôme Knops - Portfolio</title>
      </Head>

      <Header />

      <Hero />

      <About />

      <Experience />

      <Portfolio />

      <Services />

      <Contact />

      <Footer />
    </div>
  );
}
