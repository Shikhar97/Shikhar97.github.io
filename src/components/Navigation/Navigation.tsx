import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

const Navigation = () => {
    return (
        <>
            <NavLink href="#about">
                <LinkText>about</LinkText>
                about
            </NavLink>
            <NavLink href="#projects">
                <LinkText>projects</LinkText>
                projects
            </NavLink>
            <NavLink href="#designs">
                <LinkText>designs</LinkText>
                designs
            </NavLink>
            <NavLink href="#contact">
                <LinkText>contact</LinkText>
                contact
            </NavLink>
            <DownloadLink href="files/resume.pdf" download>
                resume
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
