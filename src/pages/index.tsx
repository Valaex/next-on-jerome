import * as React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jérôme Knops - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G7PMDN2MX1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G7PMDN2MX1');
        `}
        </Script>
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
