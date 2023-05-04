import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${ubuntu.className} max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16`}
    >
      <Component {...pageProps} />
    </main>
  );
}
