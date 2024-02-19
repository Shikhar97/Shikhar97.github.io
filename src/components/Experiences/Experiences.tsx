import { QUERIES } from "breakpoints";
import styled from "styled-components";
import { ContraintedTitle, MaxWidthWrapper } from "../Education/Education";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const Experiences: React.FC = () => {
    return (
        <Wrapper>
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Experiences" side="left" />
                </SlideUp>
                <Items>
                    <TimeLine />
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/converge.png"
                                alt="converge-lab"
                            ></Image>
                            <DotPrimary>
                                <DotCore />
                            </DotPrimary>
                            <Connector />
                            <Info>
                                <MobileImage
                                    src="images/converge.png"
                                    alt="converge-lab"
                                ></MobileImage>
                                <Time>Jan 2024 - Present</Time>
                                <Company>Converge Lab</Company>
                                <Role>Software Engineer</Role>
                                <Description>
                                    Building a platform that serves as an AI
                                    Co-Designer for Hardware Engineers to
                                    accelerate the design process of hardware
                                    circuits and systems
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/tunein.png"
                                alt="tunein-radio"
                            ></Image>
                            <DotPrimary>
                                <DotCore />
                            </DotPrimary>
                            <Connector />
                            <Info>
                                <MobileImage
                                    src="images/tunein.png"
                                    alt="tunein-radio"
                                ></MobileImage>
                                <Time>Jun 2023 - Aug 2023</Time>
                                <Company>TuneIn Radio</Company>
                                <Role>Software Engineer Intern, Platform</Role>
                                <Description>
                                    Added support for live streaming metadata
                                    for over 120K radio stations, which
                                    contributes to enhanced user experience and
                                    content discovery for search on the TuneIn
                                    platform, while aligning with TuneIn’s core
                                    values - Customer Centricity, Operational
                                    Excellence and Teamwork.
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/aibod.png"
                                alt="team aibod"
                            ></Image>
                            <Connector />
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore />
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/aibod.png"
                                            alt="team aibod"
                                        ></MobileImage>
                                        <Time>Nov 2021 - Apr 2022</Time>
                                        <Company>Team AIBOD Inc.</Company>
                                        <Role>Software Engineer 2</Role>
                                        <Description>
                                            Led end-to-end development of
                                            several full-stack projects,
                                            including a microservice that
                                            handles biometric payments for an
                                            unmanned stored and a search system
                                            for Kyushu Electric that allowed
                                            their employees to manage inspection
                                            information about buildings.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            <SlideUp>
                                <Bullet>
                                    <DotSecondary>
                                        <DotCore />
                                    </DotSecondary>
                                    <Info>
                                        <Time>Jul 2020 - Oct 2021</Time>
                                        <Role>Software Engineer 1</Role>
                                        <Description>
                                            Contributed to projects in various
                                            capacities, including backend
                                            development with NodeJS and Python,
                                            Web GUI using React and TypeScript
                                            and DevOps flows with AWS using EC2,
                                            ECS, Docker and CloudWatch in a
                                            fast-paced Agile/SCRUM environment
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            <SlideUp>
                                <Bullet>
                                    <DotSecondary>
                                        <DotCore />
                                    </DotSecondary>
                                    <Info>
                                        <Time>Feb 2020 - Jun 2020</Time>
                                        <Role>Software Engineer Intern</Role>

                                        <Description>
                                            Conducted AI Experiments that
                                            resulted in a 7% accuracy
                                            improvement in the KNN-supervised
                                            classifier. Fine tuned a BERT-based
                                            model to automate support requests
                                            in an apartment intercom system.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                        </Infos>
                    </Item>
                </Items>
            </MaxWidthWrapper>
        </Wrapper>
    );
};

export const Role = styled.h4`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: calc(14 / 16 * 1rem);
    margin-bottom: 8px;

    ${QUERIES.tabletAndUp} {
        font-size: calc(16 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(18 / 16 * 1rem);
    }
`;

const Items = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 64px;

    ${QUERIES.tabletAndUp} {
        gap: 80px;
    }
`;

const SlideUpFirm = styled(SlideUp)`
    flex-shrink: 0;
`;

const Item = styled.div`
    display: flex;
    align-items: top;
    position: relative;
`;

const TimeLine = styled.div`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.text.light};

    left: 24px;

    ${QUERIES.tabletAndUp} {
        left: 264px;
    }

    ${QUERIES.desktopAndUp} {
        left: 296px;
    }
`;

const DotPrimary = styled.div`
    height: 32px;
    width: 32px;
    border: 1px solid ${({ theme }) => theme.colors.text.light};
    outline: 1px ${({ theme }) => theme.colors.text.light} solid;
    outline-offset: 8px;
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;

    margin: 8px;
    margin-top: 32px;
    margin-right: 24px;

    ${QUERIES.tabletAndUp} {
        margin: 84px 48px;
    }

    ${QUERIES.desktopAndUp} {
        margin: 84px 80px;
    }
`;

const DotSecondary = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;

    margin: 8px;
    margin-top: 32px;
    margin-right: 24px;

    ${QUERIES.tabletAndUp} {
        margin: auto 48px;
    }

    ${QUERIES.desktopAndUp} {
        margin: auto 80px;
    }
`;

const Connector = styled.div`
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 32px;
    left: 32px;
    top: 48px;

    ${QUERIES.tabletAndUp} {
        top: 100px;
        left: 200px;
        width: 64px;
    }

    ${QUERIES.desktopAndUp} {
        width: 96px;
    }
`;

const Bullet = styled.div`
    display: flex;
    align-items: top;
    position: relative;
`;

const DotCore = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 32px;

    ${QUERIES.tabletAndUp} {
        gap: 40px;
    }
`;

const Info = styled.div``;

const Time = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.light};
    text-transform: uppercase;
    font-size: calc(12 / 16 * 1rem);
`;

const Description = styled.p`
    font-weight: 400;
    max-width: 650px;
`;

export const Company = styled.h4`
    font-size: calc(21 / 16 * 1rem);

    ${QUERIES.tabletAndUp} {
        font-size: calc(24 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(28 / 16 * 1rem);
    }
`;

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 64px;

    ${QUERIES.tabletAndUp} {
        padding: 64px 64px;
    }

    ${QUERIES.desktopAndUp} {
        gap: 32px;
    }
`;

const Image = styled.img`
    display: none;

    ${QUERIES.tabletAndUp} {
        display: initial;
    }

    height: 200px;
    width: 200px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const MobileImage = styled.img`
    display: initial;

    ${QUERIES.tabletAndUp} {
        display: none;
    }

    height: 100px;
    width: 100px;
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled(SectionTitle)``;
export default Experiences;
