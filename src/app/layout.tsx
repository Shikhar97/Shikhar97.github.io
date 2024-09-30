'use client';
import "../styles/global.css";
import "../styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { DARK_COLORS, LIGHT_COLORS } from "theme";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";
import React from "react";



function RootLayout({children}: { children: React.ReactNode }) {
    const theme = localStorage.getItem("color-theme") ?? "dark";
    const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;
    const showSplash = localStorage.getItem("show-splash") !== "false";
    React.useEffect(() => {
        localStorage.setItem("show-splash", "false");
    })

  return (
      <html
          lang="en"
          suppressHydrationWarning
          className="bg-neutral-900"
          data-color-theme={theme}
          //@ts-ignore
          style={themeColors}
      >
      <GoogleAnalytics gaId="G-JJBG91P2EL"/>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
        <title>Shikhar Gupta | Software Developer | Cloud Engineer | ML Engineer</title>
      </head>
      <body suppressHydrationWarning={true}>
      <ThemeProvider initialTheme={theme}>
          <Header initialTheme={theme} />
          {children}
          <Footer />
      </ThemeProvider>
      {showSplash && <Splash/>}
      </body>
      </html>
  );
}

export default RootLayout;
