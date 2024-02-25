import About from "@/components/About";
import Contact from "@/components/Contact";
import Dots from "@/components/Dots";
import Education from "@/components/Education";
import Email from "@/components/Email";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Splash from "@/components/Splash";
import Technical from "@/components/Technical";
import { useRef } from "react";
import styled from "styled-components";

export default function Home({
    scrollDirection,
    theme,
    toggleTheme,
}: {
    scrollDirection: "up" | "down" | undefined;
    theme: "light" | "dark";
    toggleTheme: () => void;
}) {
    const boundingRect = useRef<HTMLDivElement>(null);
    return (
        <>
            <Splash />
            <Socials />
            <Email />
            <Grid>
                <Header
                    theme={theme}
                    scrollDirection={scrollDirection}
                    toggleTheme={toggleTheme}
                />
                <DotWrapper ref={boundingRect}>
                    <Dots boundingRect={boundingRect} />
                    <Hero />
                </DotWrapper>

                <About theme={theme} />
                <Experiences />
                <Projects />
                <Technical />
                <Education />
                <Contact />
                <Footer />
            </Grid>
        </>
    );
}

const DotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
`;
