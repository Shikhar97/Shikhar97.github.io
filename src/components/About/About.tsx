"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH } from "breakpoints";
import styles from "./About.module.css";
import { useTheme } from "@/context/ThemeContext";
import SlideUp from "../SlideUp";


interface Props {
    delegated?: any;
}

const About = ({ ...delegated }: Props) => {
    const downloadResume = () => {
        window.open("/resume", "_blank");
    };

    const { aboutUrl, aboutUrlSmall } = useTheme();

    return (
        <div className={styles.about} {...delegated} id="about">
            <div className={styles.aboutme}>
                <SectionTitle side={"left"}>About Me</SectionTitle>
                <p className={styles.description}>
                    Hi there! My name is Shikhar Gupta, and I have recently graduated from Arizona State University
                    with a Masters in Computer Science. As I embark on the next chapter of my career, I am exploring
                    new opportunities for full-time roles in Full-stack Development, Machine Learning, or
                    Cloud Infrastructure.

                </p>
                <p className={styles.description}>
                    What I Bring to the Table:<br/>
                    - 3+ Years of Professional Experience<br/>
                    - Proficiency in Python, GoLang, Java, C++, JavaScript, and various libraries and frameworks,
                    including D3.js, NodeJS, ReactJS, Django, Flask, and FastAPI.<br/>
                    - Expertise in Machine Learning with a strong foundation in TensorFlow, PyTorch, and Keras.<br/>
                    - Certifications and Accreditations - AWS Certified Solutions Architect and Cloud Practitioner,
                    Azure Databricks<br/>
                </p>
                <Button className={styles.download} onClick={downloadResume}>
                    Download Resume
                </Button>
            </div>
            <picture className={styles.picture}>
                <source media={MIN_WIDTH.desktop} srcSet={aboutUrl} />
                <source media={MIN_WIDTH.tablet} srcSet={aboutUrlSmall} />
                <img src={aboutUrl} alt="Shikhar Gupta" />
            </picture>
        </div>
    );
};

export default About;


//
// export interface IProps {
//     delegated?: any;
//     theme: "dark" | "light";
// }
//
// const About: React.FC<React.PropsWithChildren<IProps>> = ({
//                                                               children,
//                                                               theme,
//                                                               ...delegated
//                                                           }) => {
//     const downloadResume = () => {
//         window.open("/resume", "_blank");
//     };
//
//     const aboutUrl =
//         theme === "light" ? "images/shikhar-3.jpeg" : "images/shikhar-3.jpeg";
//     return (
//         <Wrapper {...delegated} id="about">
//             <AboutMe>
//                 <SlideUp>
//                     <SectionTitle label={"About Me "} side={"left"}/>
//                 </SlideUp>
//                 <SlideUp>
//                     <Description>
//                         Hi there! My name is Shikhar Gupta, and I am currently pursuing a Master's in Computer Science
//                         at ASU, set to graduate in May 2024.
//                     </Description>
//                 </SlideUp>
//                 <SlideUp>
//                     <Description>
//                         I have worked as a Software Engineer at Aruba Networks for 3 years as a full-stack developer,
//                         and I am well-versed in Python, C++, Docker, Kubernetes, ML frameworks, and Linux along with an
//                         in-depth understanding of SQL/NoSQL databases software systems.
//                     </Description>
//                 </SlideUp>
//                 <SlideUp>
//                     <Description>
//                         Creativity and innovation drive my problem-solving
//                         approach, as I enjoy building products that positively impact society and automating repetitive
//                         tasks in my life.
//                     </Description>
//                 </SlideUp>
//                 <SlideUp>
//                     <Download onClick={downloadResume}>
//                         Download Resume
//                     </Download>
//                 </SlideUp>
//             </AboutMe>
//             <Picture>
//                 <Source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
//                 <Source
//                     media={MIN_WIDTH.tablet}
//                     srcSet="images/shikhar-3.jpeg"
//                 />
//                 <Image src={aboutUrl} alt="Shikhar Gupta"/>
//             </Picture>
//         </Wrapper>
//     );
// };
//
