import { QUERIES } from "breakpoints";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaArrowLeft, FaWindowClose } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import { School } from "../College/College";
import {
    Feature,
    Github,
    IProject,
    Links,
    Tech,
    Techs,
    Website,
} from "../Project/Project";
import { HoverIconLink } from "../Socials/Socials";

export interface IProps {
    projects: IProject[];
}

const ProjectGrid: React.FC<React.PropsWithChildren<IProps>> = ({
    projects,
    children,
    ...delegated
}) => {
    const [documentMounted, setDocumentMounted] = useState(false);
    // run after document mounted
    useEffect(() => {
        setDocumentMounted(true);
    }, []);

    const [selectedProject, setSelectedProject] = useState<IProject | null>(
        null
    );

    const SelectedProject = (selectedProject: IProject) => (
        <HighlightedProject isProjectSelected={selectedProject !== null}>
            <Toolbar>
                <BackButton onClick={() => setSelectedProject(null)}>
                    <BackArrow />
                    Back
                </BackButton>
                <CloseButton onClick={() => setSelectedProject(null)}>
                    <CloseIcon />
                </CloseButton>
            </Toolbar>
            <Info>
                <CustomTilt
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    // glareEnable={false}
                    glareEnable={true}
                    glarePosition="top"
                    glareMaxOpacity={0.3}
                    glareBorderRadius="12px"
                >
                    <ProjectImage
                        src={selectedProject?.imgSrc}
                        alt={selectedProject?.name}
                    />
                </CustomTilt>
                <Details>
                    <FloatingHeader>
                        <Name side="right">{selectedProject.name}</Name>
                        <Feature side="right">{selectedProject.type}</Feature>
                    </FloatingHeader>
                    <Description>{selectedProject.description}</Description>

                    <FloatingFooter>
                        <Links side="right">
                            {selectedProject.github.length > 0 && (
                                <HoverIconLink
                                    href={selectedProject.github}
                                    target="_blank"
                                >
                                    <Github size={32} />
                                </HoverIconLink>
                            )}

                            <HoverIconLink
                                href={selectedProject.website}
                                target="_blank"
                            >
                                <Website size={32} />
                            </HoverIconLink>
                        </Links>
                        <WrappingTechs side="right">
                            {selectedProject.techs.map((tech, idx) => (
                                <Tech key={tech}>{tech}</Tech>
                            ))}
                        </WrappingTechs>
                    </FloatingFooter>
                </Details>
            </Info>
        </HighlightedProject>
    );

    return (
        <Wrapper id="other-projects">
            <SubTitle>
                Other Projects
                <SubText>Tap on a project to learn more!</SubText>
            </SubTitle>

            <Grid {...delegated}>
                {projects.map((project, idx) => {
                    return (
                        <Tilt
                            key={idx}
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            glareEnable={false}
                        >
                            <ProjectThumbnail
                                selected={!!selectedProject}
                                key={idx}
                                onClick={() => setSelectedProject(project)}
                                src={project.imgSrc}
                                alt={project.name}
                            />
                        </Tilt>
                    );
                })}
            </Grid>

            {selectedProject && (
                <NonModalWrapper>
                    <SelectedProject {...selectedProject} />
                </NonModalWrapper>
            )}
            {documentMounted &&
                selectedProject &&
                (createPortal(
                    <ModalWrapper>
                        {/* <Overlay onClick={() => setSelectedProject(null)} /> */}
                        <Modal>
                            <SelectedProject {...selectedProject} />
                        </Modal>
                    </ModalWrapper>,
                    document.body
                ) as React.ReactPortal)}
        </Wrapper>
    );
};

const SubTitle = styled.h2`
    /* align-self: center; */
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const HighlightedProject = styled.div<{
    isProjectSelected: boolean;
}>`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.background.light};

    /* opacity: 0.9; */
    padding: 24px;
    border-radius: 8px;

    ${QUERIES.tabletAndUp} {
        top: 16px;
        left: 16px;
        bottom: 16px;
        right: 16px;
    }

    ${QUERIES.desktopAndUp} {
        top: 32px;
        left: 32px;
        bottom: 32px;
        right: 32px;
    }
`;

const ModalWrapper = styled.div`
    ${QUERIES.tabletAndUp} {
        display: none;
    }

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* overflow-y: auto; */
    z-index: 999;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
`;

const Modal = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    bottom: 16px;
    z-index: 3;
`;

const NonModalWrapper = styled.div`
    display: none;

    ${QUERIES.tabletAndUp} {
        display: block;
    }
`;

const FloatingHeader = styled.div`
    ${QUERIES.tabletAndUp} {
        position: absolute;
        top: -8px;
        left: 32px;
        right: 32px;

        transform: translateY(-100%);
        flex-direction: row;
    }

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: baseline;
`;

const FloatingFooter = styled.div`
    ${QUERIES.tabletAndUp} {
        position: absolute;
        bottom: -8px;
        left: 0px;
        right: 32px;
        transform: translateY(100%);

        justify-content: space-between;
        flex-direction: row;
        align-items: baseline;
    }

    display: flex;
    flex-direction: column-reverse;
`;

export const Description = styled.div`
    font-weight: 400;

    margin-top: 16px;

    ${QUERIES.desktopAndUp} {
        margin-top: 0px;
        margin-left: 32px;
    }
`;

const Name = styled(School)`
    margin: 0px;
`;

export const Toolbar = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 24px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const CloseButton = styled.button`
    margin-left: auto;
`;

const SubText = styled.p`
    color: ${({ theme }) => theme.colors.text.light};
    font-size: calc(18 / 16 * 1rem);

    ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

export const CloseIcon = styled(FaWindowClose)``;

export const Info = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 1;

    flex-direction: column;

    ${QUERIES.desktopAndUp} {
        flex-direction: row;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
`;

const CustomTilt = styled(Tilt)`
    border-radius: 8px;
    ${QUERIES.desktopAndUp} {
        height: 100%;
    }

    ${QUERIES.desktopAndUp} {
        min-width: max-content;
    }
`;

const WrappingTechs = styled(Techs)`
    flex-wrap: wrap;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const BackArrow = styled(FaArrowLeft)``;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;

    z-index: 3;
    ${QUERIES.tabletAndUp} {
        margin-top: 24px;
        padding: 16px;
    }

    ${QUERIES.desktopAndUp} {
        margin-top: 64px;
        padding: 32px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1080px;
    gap: 16px;
    background-color: transparent;
    border-radius: 8px;

    ${QUERIES.tabletAndUp} {
        gap: 24px;
        grid-template-columns: repeat(2, 1fr);
    }

    ${QUERIES.desktopAndUp} {
        gap: 24px;
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ProjectThumbnail = styled.img<{ selected: boolean }>`
    position: relative;
    z-index: 1;

    border-radius: 8px;
    display: inline;
    object-fit: cover;
    height: 100%;
    transition: all 0.3s ease-in;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);

    opacity: ${(props) => (props.selected ? 0 : 1)};

    &:hover {
        cursor: pointer;
        transition: transform 0.1s ease-out;
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
    }
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: black;
    opacity: 0.3;
    position: absolute;
    z-index: -1;

    transition: transform 0.3s ease-in;
    &:hover {
        transition: transform 0.1s ease-out;
    }
`;

export default ProjectGrid;
