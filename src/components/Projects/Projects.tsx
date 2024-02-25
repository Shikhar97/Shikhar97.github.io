import {QUERIES} from "breakpoints";
import styled from "styled-components";
import {ContraintedTitle, MaxWidthWrapper} from "../Education/Education";
import Project from "../Project/Project";
import ProjectGrid from "../ProjectGrid";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const PROJECTS = [
    {
        name: "Guardian Angel",
        techs: ["Kotlin", "Python", "MongoDB", "AWS"],
        description:
            "An innovative Android application designed to enhance the well-being and safety of users by monitoring and " +
            "providing personalized suggestions for various aspects of their daily lives.",
        github: "https://github.com/Shikhar97/Guardian-Angel",
        website: "",
        imgSrc: "/images/diashield.jpeg",
        type: "Featured Project",
    },
    {
        name: "CloudVision: Serverless Video Analysis Platform",
        techs: [
            "Python",
            "Go",
            "DynamoDB",
            "OpenFaas",
            "Ceph",
            "AWS",
            "Docker",
            "Kubernetes",
        ],
        description:
            "This project involves the integration of AWS services, OpenFaaS, Ceph, and other tools to perform cloud-based video processing and data analysis. " +
            "The primary goal is to develop a system that can handle automated video analysis tasks, such as face recognition, using serverless " +
            "functions and distributed storage.",
        github: "https://github.com/Shikhar97/Hybrid-Cloud",
        website: "",
        imgSrc: "/images/cloudvidpro.jpg",
        type: "Featured Project",
    },

    {
        name: "Generating Visualization Using Large Language Models",
        techs: ["Python", "D3.js", "HTML", "CSS", "GPT", "Vega-Lite"],
        description:
            "An automated system that generates high-quality visualizations based on user requirements utilizing GPT-3 and VegaLite.",
        github: "",
        website: "https://www.youtube.com/watch?v=rs1GStvE9x0",
        imgSrc: "/images/llmvis.png",
        type: "Side Project",
    },

    {
        name: "JSRT organ segmentation using U-Net",
        techs: ["TailwindCSS", "NextJS", "Vercel", "Typescript"],
        description: "",
        github: "",
        website: "",
        imgSrc: "/images/janke12ngu.png",
        type: "Side Project",
    },
    {
        name: "Spatial Analysis and Hot Spot Identification",
        techs: ["HTML", "CSS", "figma"],
        description:
            "",
        github: "",
        website: "",
        imgSrc: "/images/productprevie1.png",
        type: "Side Project",
    },
    {
        name: "Innovative Visualizations using D3",
        techs: ["D3.js", "HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
        description:
            "The project goes beyond common chart types and presents the data in a creative manner, making it interesting and informative for a general audience. The visualization is designed for museum visitors and effectively communicates information about the exoplanets discovered by NASA missions.",
        github: "https://github.com/Shikhar97/D3-Innovative-Visualization",
        website: "",
        imgSrc: "/images/skilled1.png",
        type: "Side Project",
    },
    {
        name: "Google-Dino using CNN",
        techs: ["Python", "NumPy", "Pandas", "PyTorch", "OpenCV"],
        description:
            "Google-Dino uses Convolutional Neural Networks (CNN) to train an AI model to play the popular Google Chrome Dinosaur game, achieving high scores and demonstrating sophisticated decision-making capabilities.",
        github: "https://github.com/Shikhar97/Google-dragon",
        website: "",
        imgSrc: "/images/dino.jpeg",
        type: "Side Project",
    },
    {
        name: "InstaClone",
        techs: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
        description:
            "A webapp to implement the basic functionality of instagram using flask.",
        github: "https://github.com/Shikhar97/Mini-Instagram",
        website: "",
        imgSrc: "/images/instaclone.png",
        type: "Side Project",
    },
];

const Projects: React.FC = () => {
    return (
        <Wrapper id="projects">
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Things I've Built" side="left"/>
                </SlideUp>
                <Project project={PROJECTS[0]} side="left"/>
            </MaxWidthWrapper>
            <Project project={PROJECTS[1]} side="right"/>

            <ProjectGrid projects={PROJECTS.slice(2)}/>
        </Wrapper>
    );
};

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

const Title = styled(SectionTitle)``;
export default Projects;
