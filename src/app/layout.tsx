import "../styles/global.css";
import "../styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { Metadata } from "next";
import { DARK_COLORS, LIGHT_COLORS } from "theme";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shikhar Gupta | Software Developer | Cloud Engineer | ML Engineer",
  description:
    "Shikhar Gupta is a Computer Science Graduate Student at Arizona State University, who loves learning new things.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shikhar97.github.io/",
    title: "Shikhar Gupta | Software Developer | Cloud Engineer | ML Engineer",
    images: ["https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/shikhar97.github.io/Shikhar%20Gupta%20%7C%20Computer%20Science%20Graduate%20Student%20%7C%20Software%20Developer%20%7C%20Cloud%20Engineer%20%7C%20ML%20Engineer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4c58f7e1-8524-4c7b-a5c3-305cdb16dc61.jpg%3Ftoken%3D2dK5g8ViJZYACO--guzL6sOi3xKQpg77X0m6yX6NzSo%26height%3D513%26width%3D1200%26expires%3D33244548259/og.png"],
  },
};

function RootLayout({children}: { children: React.ReactNode }) {
    const theme = "light";
    const themeColors = theme === "light" ? LIGHT_COLORS: DARK_COLORS;

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
        <title></title>
      </head>
      <body suppressHydrationWarning={true}>
      <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
      </html>
  );
}

export default RootLayout;
