import Layout from "@/components/Layout";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { AppWrapper } from "@/context/state";
import { NextRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { darkWakatime, lightWakatime } from "@/utils/links";

export default function Application({
  Component,
  pageProps,
  router,
}: {
  Component: React.FC;
  pageProps: {};
  router: NextRouter;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta content="en_US" property="og:locale" />
        <meta name="charset" content="UTF-8" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="parthabbot" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="parthabbot" />
        <meta
          property="og:description"
          content="Digital Portfolio of Parth Abbot, a Software Engineer"
        />
        <meta property="og:image" content="/images/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/preview.png" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta name="title" content="parthabbot" />
        <meta
          name="description"
          content="Digital Portfolio of Parth Abbot, a Software Engineer"
          key="desc"
        />
        <link rel="preload" href={lightWakatime} as="image" />
        <link rel="preload" href={darkWakatime} as="image" />
      </Head>
      <AppWrapper>
        <ColorModeScript
          initialColorMode={theme.colorConfig.initialColorMode}
        />
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
        <SpeedInsights />
      </AppWrapper>
    </ChakraProvider>
  );
}
