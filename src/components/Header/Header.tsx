import Navigation from "@/components/Navigation";
import { QUERIES } from "breakpoints";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styled from "styled-components";
import { SocialIcons } from "../Socials/Socials";

const Header = ({
    scrollDirection,
    theme,
    toggleTheme,
}: {
    scrollDirection: "up" | "down" | undefined;
    theme: "light" | "dark";
    toggleTheme: () => void;
}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    const logoUrl =
        theme === "light" ? "/images/logo-light.png" : "/images/logo.png";
    return (
        <>
            <Overlay show={showSidebar} onClick={toggleSidebar}>
                <Sidebar show={showSidebar}>
                    <NavigationWrapper>
                        <Navigation />
                    </NavigationWrapper>
                    <IconWrapper>
                        <SocialIcons />
                    </IconWrapper>
                </Sidebar>
            </Overlay>
            <Wrapper scrollDirection={scrollDirection}>
                {/* <button onClick={toggleTheme}>Toggle Theme</button> */}

                <Logo src={logoUrl} alt="Logo" />
                <Navbar>
                    <Navigation />
                    <DarkModeSwitch
                        style={{ marginLeft: "2em" }}
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        size={24}
                    />
                </Navbar>

                <MenuButton>
                    <DarkModeSwitch
                        style={{
                            marginLeft: "auto",
                            alignSelf: "center",
                            marginRight: "1em",
                        }}
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        size={32}
                    />
                    <Hamburger toggled={showSidebar} onToggle={toggleSidebar} />
                </MenuButton>
            </Wrapper>
            {/*<Banner>*/}
            {/*    I&apos;m currently building something awesome at{" "}*/}
            {/*    <A href="https://www.convergelab.ai/">Convergelab.ai</A>*/}
            {/*</Banner>*/}
        </>
    );
};

const A = styled.a`
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.background.dark};
`;

const NavigationWrapper = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    font-size: 24px;
`;

const Logo = styled.img`
    width: 43px;
    height: 41px;
    flex-shrink: 0;

    ${QUERIES.tabletAndUp} {
        width: 55px;
        height: 52px;
    }
`;

interface IStyledProps {
    scrollDirection: "up" | "down" | undefined;
}

const Wrapper = styled.div<IStyledProps>`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.background.blur};
    backdrop-filter: blur(10px);
    z-index: 999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;

    padding: 8px 16px;

    transform: translateY(
        ${({ scrollDirection }) => (scrollDirection === "down" ? "-100%" : "0")}
    );

    ${QUERIES.tabletAndUp} {
        padding: 8px 32px;
    }

    ${QUERIES.desktopAndUp} {
        padding-left: 64px;
        padding-right: 64px;
    }
`;

const Navbar = styled.nav`
    display: none;
    align-items: center;

    ${QUERIES.desktopAndUp} {
        gap: 64px;
    }

    ${QUERIES.tabletAndUp} {
        gap: 36px;
        display: flex;
    }
`;

const Banner = styled.div`
    grid-area: banner;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background.regular};
    padding: 8px 16px;
    text-align: center;
    font-size: 14px;

    ${QUERIES.tabletAndUp} {
        padding: 8px 32px;
    }
`;

const Sidebar = styled.nav<{ show: boolean }>`
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;

    background-color: ${({ theme }) => theme.colors.background.regular};
    padding: 32px;

    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    ${({ show }) => show && "transform: translateX(0);"}

    ${QUERIES.tabletAndUp} {
        display: none;
    }
`;

const MenuButton = styled.button`
    display: flex;

    ${QUERIES.tabletAndUp} {
        display: none;
    }
`;

const Overlay = styled.div<{ show: boolean }>`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;

    ${({ show }) => show && "opacity: 1;"}
    ${({ show }) => show && "pointer-events: all;"}
`;

export default Header;
