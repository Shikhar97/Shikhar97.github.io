import GlobalStyles from "@/styles/globalStyles";
import ResetStyles from "@/styles/resetStyles";
import type {AppProps} from "next/app";
import Head from "next/head";
import {useEffect, useRef, useState} from "react";
import {ThemeProvider} from "styled-components";
import {DARK_THEME, LIGHT_THEME} from "theme";
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export default function App({Component, pageProps}: AppProps) {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<string>();

    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const activeTheme = theme === "light" ? LIGHT_THEME : DARK_THEME;

    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const scrollTop = ref.current?.scrollTop || 0;
        // only update if the scroll is more than 5px
        if (Math.abs(scrollTop - lastScrollTop) < 20) {
            return;
        }

        if (scrollTop > lastScrollTop) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    const debounce = (func: any, wait = 50, immediate = false) => {
        let timeout: any;
        return function () {
            // @ts-ignore
            let context = this,
                args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const [documentMounted, setDocumentMounted] = useState(false);
    // run after document mounted
    useEffect(() => {
        setDocumentMounted(true);
    }, []);

    if (documentMounted) {
        const body = document.querySelector("body");
        if (body) {
            body.style.backgroundColor = activeTheme.colors.background.regular;
            body.style.color = activeTheme.colors.text.regular;
        }
    }

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="App" onScroll={debounce(handleScroll)} ref={ref}>
            <Head>
                <meta charSet="utf-8"/>
                <title>Shikhar Gupta | Computer Science Graduate Student | Software Developer | Cloud Engineer | ML
                    Engineer</title>
                <meta name="description"
                      content="Shikhar Gupta is a Computer Science Graduate Student at Arizona State University, who loves learning new things."/>

                <meta property="og:url" content="https://shikhar97.github.io/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="Shikhar Gupta | Computer Science Graduate Student | Software Developer | Cloud Engineer | ML Engineer"/>
                <meta property="og:description"
                      content="Shikhar Gupta is a Computer Science Graduate Student at Arizona State University, who loves learning new things."/>
                <meta property="og:image"
                      content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/shikhar97.github.io/Shikhar%20Gupta%20%7C%20Computer%20Science%20Graduate%20Student%20%7C%20Software%20Developer%20%7C%20Cloud%20Engineer%20%7C%20ML%20Engineer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4c58f7e1-8524-4c7b-a5c3-305cdb16dc61.jpg%3Ftoken%3D2dK5g8ViJZYACO--guzL6sOi3xKQpg77X0m6yX6NzSo%26height%3D513%26width%3D1200%26expires%3D33244548259/og.png"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="shikhar97.github.io"/>
                <meta property="twitter:url" content="https://shikhar97.github.io/"/>
                <meta name="twitter:title"
                      content="Shikhar Gupta | Computer Science Graduate Student | Software Developer | Cloud Engineer | ML Engineer"/>
                <meta name="twitter:description"
                      content="Shikhar Gupta is a Computer Science Graduate Student at Arizona State University, who loves learning new things."/>

                <meta name="twitter:image"
                      content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/shikhar97.github.io/Shikhar%20Gupta%20%7C%20Computer%20Science%20Graduate%20Student%20%7C%20Software%20Developer%20%7C%20Cloud%20Engineer%20%7C%20ML%20Engineer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4c58f7e1-8524-4c7b-a5c3-305cdb16dc61.jpg%3Ftoken%3D2dK5g8ViJZYACO--guzL6sOi3xKQpg77X0m6yX6NzSo%26height%3D513%26width%3D1200%26expires%3D33244548259/og.png"/>


            </Head>

            <ThemeProvider theme={activeTheme}>
                <ResetStyles/>
                <GlobalStyles/>
                <Component
                    {...pageProps}
                    scrollDirection={scrollDirection}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
            </ThemeProvider>
        </div>
    );
}
