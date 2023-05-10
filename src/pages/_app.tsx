import "@/styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";
import RingLoader from "react-spinners/RingLoader";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);
  return (
    <main className={`${ubuntu.className} `}>
      {loading ? (
        <div className="flex justify-center w-screen h-screen items-center">
          <RingLoader
            color={"#040320"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </main>
  );
}
