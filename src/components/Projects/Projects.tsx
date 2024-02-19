import { QUERIES } from "breakpoints";
import styled from "styled-components";
import { ContraintedTitle, MaxWidthWrapper } from "../Education/Education";
import Project from "../Project/Project";
import ProjectGrid from "../ProjectGrid";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const PROJECTS = [
    {
        name: "Kanban Task Manager",
        techs: ["React", "Docker", "NodeJS", "MongoDB", "AWS"],
        description:
            "An accessible, responsive Kanban Task Manager built using Client-Server architecture with dynamic theming and drag-and-drop UI. Backend deployed on AWS and frontend on Netlify via CI/CD on using Github Actions. Security handled with HTTPS/SSL on AWS Application Load Balancer.",
        github: "https://github.com/BhandarkarPawan/kanban-task-management",
        website: "https://www.kanbhan.com/",
        imgSrc: "/images/kanban.png",
        type: "Featured Project",
    },
    {
        name: "Emergency Social Network",
        techs: ["HTML", "CSS", "NodeJS", "MongoDB", "figma"],
        description:
            "An emergency communication system for real-time SOS messaging during earthquakes. Built in a fast paced Agile environment with a team of 5. The app was designed and developed the project using Object Oriented Analysis and Programming principles.",
        github: "",
        website: "https://esn.onrender.com",
        imgSrc: "/images/esn-app.png",
        type: "Featured Project",
    },
    {
        name: "Refriendo",
        techs: [
            "React",
            "Typescript",
            "Go",
            "MongoDB",
            "Figma",
            "AWS",
            "Docker",
        ],
        description:
            "I am building a social media platform for people to create and host events in their neighbourhoods and friend circles. The involves several features such as a feed, event creation, event hosting, management, discovery, and more. For this project, I designed the UI/UX with Figma, Frontend with React, and Backend with Go and MongoDB. This is my most ambitious project yet and I am excited to see where it goes.",
        github: "https://github.com/BhandarkarPawan/refriendo",
        website: "https://refriendo.netlify.app/",
        imgSrc: "/images/refriendo-project.png",
        type: "Work in Progress",
    },
    {
        name: "Rock Paper Scissors Lizard Spock",
        techs: ["TailwindCSS", "NextJS", "Vercel", "Typescript"],
        description:
            "Built a Rock Paper Scissors Lizard Spock game based on a Frontend Mentor design. I worked on this project when I challenged myself to learn and apply NextJS in a project. The game includes a score tracker and can be played comfortably on either desktop or mobile.",
        github: "https://github.com/BhandarkarPawan/rock-paper-scissors",
        website: "https://jankengu.vercel.app/",
        imgSrc: "/images/jankengu.png",
        type: "Side Project",
    },
    {
        name: "Product Preview Card",
        techs: ["HTML", "CSS", "figma"],
        description:
            "At the very start of my CSS journey, I built this responsive product preview card. I used vanilla CSS to build this project diving into the world of flexbox and CSS variables. While the project is simple, it was a great learning experience for me and gave me the confidence to build more complex projects.",
        github: "https://github.com/BhandarkarPawan/product-preview-card-component",
        website:
            "https://bhandarkarpawan-product-preview-card-component.netlify.app/",
        imgSrc: "/images/productpreview.png",
        type: "Side Project",
    },
    {
        name: "Skilled Learning",
        techs: ["Styled Components", "React", "JavaScript"],
        description:
            "After mastering the basics of CSS, I wanted to learn a CSS-in-JS library. I chose Styled Components and built this landing page. I also used React to build the project and deployed it on Netlify. This project also helped me pick up some new CSS skills along the way, in the form of CSS Grids for responsive layouts.",
        github: "https://github.com/BhandarkarPawan/skilled-elearning-landing-page",
        website: "https://skilledlearning.netlify.app",
        imgSrc: "/images/skilled.png",
        type: "Side Project",
    },
    {
        name: "Splitter",
        techs: ["HTML", "TailwindCSS", "JavaScript"],
        description:
            "A tip calculator app built using TailwindCSS. Using this app, users are able to split the bill and tip amount between multiple people. The app is responsive and works on both desktop and mobile. I built this project to learn TailwindCSS and to get more comfortable with JavaScript. ",
        github: "https://github.com/BhandarkarPawan/tip-calculator",
        website: "https://tipped.netlify.app/",
        imgSrc: "/images/splitter.png",
        type: "Side Project",
    },
    {
        name: "Whatsapp UI Clone",
        techs: ["HTML", "CSS", "JavaScript"],
        description:
            "I literally have no idea why I did this. One day I decided to just build a pixel-perfect clone of the Whatsapp desktop UI and I did. I found this repo while cleaning up my Github and thought it was cool enough for my portfolio lol.",
        github: "https://github.com/BhandarkarPawan/WhatsappClone",
        website: "https://notwhatsapp.netlify.app/",
        imgSrc: "/images/notsapp.png",
        type: "It's Something",
    },
];

const Projects: React.FC = () => {
    return (
        <Wrapper id="projects">
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Things I've Built" side="left" />
                </SlideUp>
                <Project project={PROJECTS[0]} side="left" />
            </MaxWidthWrapper>
            <Project project={PROJECTS[1]} side="right" />

            <ProjectGrid projects={PROJECTS.slice(2)} />
        </Wrapper>
    );
};

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

const Title = styled(SectionTitle)``;
export default Projects;
