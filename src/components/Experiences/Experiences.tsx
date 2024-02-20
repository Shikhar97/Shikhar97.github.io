import {QUERIES} from "breakpoints";
import styled from "styled-components";
import {ContraintedTitle, MaxWidthWrapper} from "../Education/Education";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const Experiences: React.FC = () => {
    return (
        <Wrapper>
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Experiences" side="left"/>
                </SlideUp>
                <Items>
                    <TimeLine/>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/asu-small.jpeg"
                                alt="ASU"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/asu-small.jpeg"
                                    alt="ASU"
                                ></MobileImage>
                                <Time>Aug 2023 - Present</Time>
                                <Company>ASU School of Community Resources and Development </Company>
                                <Role>Research Aide</Role>
                                <Description>
                                    • Leading the development of a dashboard using React.js to provide a comprehensive
                                    view of climate and community,
                                    empowering users to build resilience and leverage actionable insights.<br></br>
                                    • Designing an interface featuring a GIS-based mapping and analytics tool using
                                    Leaflet with visualizations using D3.js.
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>

                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/aruba.jpeg"
                                alt="Aruba Networks"
                            ></Image>
                            <Connector/>
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore/>
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/aruba.jpeg"
                                            alt="Aruba Networks"
                                        ></MobileImage>
                                        <Time>May 2021 - July 2022</Time>
                                        <Company>Aruba Networks</Company>
                                        <Role>Software Engineer 2</Role>
                                        <Description>
                                            • Led the development of automated solutions resulting in an 80% reduction
                                            in person hours and accelerated product delivery.<br></br>
                                            • Engineered a Python-based tool for virtual machine deployment using
                                            Docker, Kubernetes, Terraform, Chef, and AWS services (EC2, S3, CloudWatch,
                                            VPC) resulting in a 60% efficient and streamlined virtual machine
                                            deployment.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            <SlideUp>
                                <Bullet>
                                    <DotSecondary>
                                        <DotCore/>
                                    </DotSecondary>
                                    <Info>
                                        <Time>July 2019 - April 2021</Time>
                                        <Role>Software Engineer 1</Role>
                                        <Description>
                                            • Restructured Linux-based monitoring and logging infrastructure using
                                            Logstash, Kibana, Filebeat, Grafana, and Influx DB, enhancing application
                                            performance visibility and reducing troubleshooting time by 50%.<br></br>
                                            • Built a multi-threaded C++-based RESTApi Load Testing tool, improving
                                            product performance by 10%.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            <SlideUp>
                                <Bullet>
                                    <DotSecondary>
                                        <DotCore/>
                                    </DotSecondary>
                                    <Info>
                                        <Time>Jan 2019 - Jun 2019</Time>
                                        <Role>Software Engineer Intern</Role>
                                        <Description>
                                            • Developed a GUI-based testing tool with Python and OpenCV, reducing QA
                                            person hours by 50%.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                        </Infos>
                    </Item>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/stylumia.jpeg"
                                alt="Stylumia"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/stylumia.jpeg"
                                    alt="Stylumia"
                                ></MobileImage>
                                <Time>Jun 2018 - Aug 2018</Time>
                                <Company>Stylumia</Company>
                                <Role>Software Engineer Intern</Role>
                                <Description>
                                    • Crafted a machine learning model for product classification and integrated it with
                                    a search bar, resulting in a 10% improvement in search efficiency.
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                </Items>
            </MaxWidthWrapper>
        </Wrapper>
    );
};

export const Role = styled.h4`
  color: ${({theme}) => theme.colors.primary};
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
  background-color: ${({theme}) => theme.colors.text.light};

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
  border: 1px solid ${({theme}) => theme.colors.text.light};
  outline: 1px ${({theme}) => theme.colors.text.light} solid;
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
  background-color: ${({theme}) => theme.colors.primary};
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
  background-color: ${({theme}) => theme.colors.primary};
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
  color: ${({theme}) => theme.colors.text.light};
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
  background-color: ${({theme}) => theme.colors.background.dark};
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
  border: 1px solid ${({theme}) => theme.colors.primary};
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
  border: 1px solid ${({theme}) => theme.colors.primary};
`;

const Title = styled(SectionTitle)``;
export default Experiences;
