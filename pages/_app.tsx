import { GlobalSytles } from "../styles/globalstyles";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);
  
  useEffect(() => {
    setIsSSR(false);
  }, []);
  
  if (isSSR) return null;

  return (
    <>
      <GlobalSytles />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
