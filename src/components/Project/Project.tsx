import { QUERIES } from "breakpoints";
import { FaGithubAlt } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import {
    Wrapper as CollegeWrapper,
    Courses,
    Data,
    Degree,
    Image,
    Info,
    School,
    Stretch,
} from "../College/College";
import SlideUp from "../SlideUp";
import { HoverIconLink } from "../Socials/Socials";

export interface IProject {
    name: string;
    techs: string[];
    description: string;
    github: string;
    website: string;
    imgSrc: string;
    type: string;
}

export interface IProps {
    project: IProject;
    side: "left" | "right";
}

const Project: React.FC<IProps> = ({ project, side, ...delegated }) => {
    return (
        <Wrapper side={side} {...delegated}>
            <SlideUp>
                <StretchedProject>
                    <TiltingImage
                        tiltMaxAngleX={3}
                        tiltMaxAngleY={3}
                        glareEnable={true}
                        glarePosition="top"
                        glareMaxOpacity={0.2}
                        glareBorderRadius="8px"
                    >
                        <a href={project.website}>
                            <Image src={project.imgSrc} alt={project.name} />
                        </a>
                    </TiltingImage>
                    <StaticImage src={project.imgSrc} alt={project.name} />
                </StretchedProject>
            </SlideUp>

            <Info side={side}>
                <SlideUp delay={200}>
                    <Feature side={side}>{project.type}</Feature>
                </SlideUp>
                <SlideUp delay={200}>
                    <Name side={side}>{project.name}</Name>
                </SlideUp>
                <SlideUp delay={200}>
                    <Description side={side}>{project.description}</Description>
                </SlideUp>
                <Techs side={side}>
                    {project.techs.map((tech, idx) => (
                        <SlideUp delay={200 + idx * 100} key={tech}>
                            <Tech key={tech}>{tech}</Tech>
                        </SlideUp>
                    ))}
                </Techs>
                <Links side={side}>
                    <SlideUp delay={200 + project.techs.length * 100}>
                        {project.github.length > 0 && (
                            <HoverIconLink
                                href={project.github}
                                target="_blank"
                            >
                                <Github size={32} />
                            </HoverIconLink>
                        )}
                    </SlideUp>
                    <SlideUp delay={300 + project.techs.length * 100}>
                        <HoverIconLink href={project.website} target="_blank">
                            <Website size={32} />
                        </HoverIconLink>
                    </SlideUp>
                </Links>
            </Info>
        </Wrapper>
    );
};

const iconStyle = `
    cursor: pointer;

    ${QUERIES.tabletAndUp} {
        font-size: 24px;
    }
`;

export const Links = styled.div<StyledProps>`
    flex-shrink: 0;
    display: flex;
    gap: 32px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.text.light};

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
    }

    ${QUERIES.desktopAndUp} {
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
        align-self: ${({ side }) =>
            side === "left" ? "flex-end" : "flex-start"};
    }

    & > * {
        transition: var(--transition);
    }
`;

const StretchedProject = styled(Stretch)`
    display: flex;
    justify-content: center;
    max-width: 525px;
    object-fit: cover;
`;

export const Github = styled(FaGithubAlt)`
    ${iconStyle}
`;

const StaticImage = styled(Image)`
    display: none;

    @media (prefers-reduced-motion: reduce) {
        display: block;
    }
`;

const TiltingImage = styled(Tilt)`
    display: block;

    @media (prefers-reduced-motion: reduce) {
        display: none;
    }
`;

export const Website = styled(IoOpen)`
    ${iconStyle}

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

interface StyledProps {
    side: "left" | "right";
}

const Wrapper = styled(CollegeWrapper)``;

export const Feature = styled(Degree)``;

export const Tech = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: lowercase;
    font-size: calc(14 / 16 * 1rem);
`;

export const Name = styled(School)``;

export const Description = styled(Courses)`
    font-weight: 400;
`;
export const Techs = styled(Data)`
    gap: 24px;
    display: flex;
    /* flex-wrap: wrap; */
`;

export default Project;
