import Button from "@/components/Button/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {MIN_WIDTH, QUERIES} from "breakpoints";
import styled from "styled-components";
import SlideUp from "../SlideUp";

export interface IProps {
    delegated?: any;
    theme: "dark" | "light";
}

const About: React.FC<React.PropsWithChildren<IProps>> = ({
                                                              children,
                                                              theme,
                                                              ...delegated
                                                          }) => {
    const downloadResume = () => {
        window.open("resume.pdf", "_blank");
    };

    const aboutUrl =
        theme === "light" ? "images/shikhar-3.jpeg" : "images/shikhar-3.jpeg";
    // const aboutUrlSmall =
    //     theme === "light"
    //         ? "images/pawan-small-light.png"
    //         : "images/pawan-small.png";

    return (
        <Wrapper {...delegated} id="about">
            <AboutMe>
                <SlideUp>
                    <SectionTitle label={"About Me "} side={"left"}/>
                </SlideUp>
                <SlideUp>
                    <Description>
                        Hi there! My name is Shikhar Gupta, and I am currently pursuing a Master's in Computer Science
                        at ASU, set to graduate in May 2024.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                        I have worked as a Software Engineer at Aruba Networks for 3 years as a full-stack developer,
                        and I am well-versed in Python, C++, Docker, Kubernetes, ML frameworks, and Linux along with an
                        in-depth understanding of SQL/NoSQL databases software systems.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                        Creativity and innovation drive my problem-solving
                        approach, as I enjoy building products that positively impact society and automating repetitive
                        tasks in my life.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Download onClick={downloadResume}>
                        Download Resume
                    </Download>
                </SlideUp>
            </AboutMe>
            <Picture>
                <Source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
                <Source
                    media={MIN_WIDTH.tablet}
                    srcSet="images/shikhar-3.jpeg"
                />
                <Image src={aboutUrl} alt="Shikhar Gupta"/>
            </Picture>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  padding: 32px;
  padding-bottom: 0px;
  row-gap: 80px;
  grid-template-areas:
        "aboutme"
        "picture";

  ${QUERIES.tabletAndUp} {
    grid-template-areas: "picture aboutme";
    grid-template-columns: 1fr 1fr;
    column-gap: 0px;
    padding: 64px;
  }

  ${QUERIES.desktopAndUp} {
    column-gap: 80px;
    padding-bottom: 0px;
  }
`;

const AboutMe = styled.div`
  grid-area: aboutme;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${QUERIES.tabletAndUp} {
    justify-self: start;
    max-width: min(400px, 100%);
  }
`;

const Description = styled.p`
  font-weight: 400;
`;

const Picture = styled.picture`
  grid-area: picture;
  justify-self: center;
  width: 300px;

  ${QUERIES.tabletAndUp} {
    width: min(50vw, 250px);
  }

  ${QUERIES.desktopAndUp} {
    justify-self: end;
    width: min(50vw, 500px);
  }
`;

const Source = styled.source``;

const Image = styled.img``;

const Download = styled(Button)`
  align-self: start;
  margin-top: 32px;
`;

export default About;
