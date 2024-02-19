import { QUERIES } from "breakpoints";
import {
    AiFillInstagram,
    AiOutlineCodepen,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const enum ESocials {
    GITHUB_URL = "https://github.com/Shikhar97",
    INSTAGRAM_URL = "https://www.instagram.com/shikharguptaaa/",
    TWITTER_URL = "",
    LINKEDIN_URL = "https://www.linkedin.com/in/shikharg97/",
}

export const SocialIcons: React.FC = () => {
    return (
        <>
            <HoverIconLink href={ESocials.GITHUB_URL} target="_blank">
                <FaGithubAlt />
            </HoverIconLink>
            <HoverIconLink href={ESocials.INSTAGRAM_URL} target="_blank">
                <AiFillInstagram />
            </HoverIconLink>
            <HoverIconLink href={ESocials.TWITTER_URL} target="_blank">
                <AiOutlineTwitter />
            </HoverIconLink>
            <HoverIconLink href={ESocials.LINKEDIN_URL} target="_blank">
                <FaLinkedinIn />
            </HoverIconLink>
        </>
    );
};

const Socials: React.FC = () => {
    return (
        <Wrapper>
            <SocialIcons />
            <Line />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    display: none;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    font-size: 24px;
    z-index: 50;

    bottom: 0;
    color: ${({ theme }) => theme.colors.text.light};
    cursor: pointer;

    ${QUERIES.tabletAndUp} {
        display: flex;
        left: 16px;
    }

    ${QUERIES.desktopAndUp} {
        left: 32px;
    }
`;

export const HoverIconLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.light};
    cursor: pointer;

    & > * {
        transition: var(--transition);
    }

    &:hover > * {
        transform: scale(1.2) translateY(-4px);
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const Line = styled.div`
    display: none;

    ${QUERIES.tabletAndUp} {
        display: block;
        border: 1px solid ${({ theme }) => theme.colors.text.light};
        height: 100px;
        width: 0px;
    }
`;

export default Socials;
