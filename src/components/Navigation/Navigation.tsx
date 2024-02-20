import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

const Navigation = () => {
    return (
        <>
            <NavLink href="#about">
                <LinkText>About</LinkText>
                About
            </NavLink>
            <NavLink href="#projects">
                <LinkText>Projects</LinkText>
                Projects
            </NavLink>
            <NavLink href="#contact">
                <LinkText>Contact</LinkText>
                Contact
            </NavLink>
            <DownloadLink href="resume.pdf" target="_blank">
                Resume
                <FaDownload />
            </DownloadLink>
        </>
    );
};

const NavLink = styled(Link)`
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.regular};
    font-size: calc(20 / 16 * 1rem);
`;

const LinkText = styled.p`
    position: absolute;
    color: ${({ theme }) => theme.colors.primary};
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transition: clip-path 0.4s ease-out;

    ${NavLink}:hover & {
        transition: clip-path 0.3s ease-in;
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    }
`;

const DownloadLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.dark};
    font-size: calc(20 / 16 * 1rem);
    display: flex;
    align-items: baseline;
    gap: 8px;
`;

export default Navigation;
