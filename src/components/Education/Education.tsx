import College from "@/components/College";
import { QUERIES } from "breakpoints";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const COLLEGES = [
    {
        degree: "Master of Science in Software Engineering",
        school: "Carnegie Mellon University",
        courses: [
            "Cloud Computing",
            "Foundations of Software Engineering",
            "Data Science for Software Engineering",
            "Software Requirements & Ix Design",
            // "Software Engineering Methods",
            "Software Verification & Testing",
            "HCI & User Experience",
        ],
        start: 2022,
        end: 2023,
        gpa: "4.0",
        imgSrc: "images/cmusv.png",
    },
    {
        degree: "Bachelor of Engineering in Computer Science",
        school: "NMAM Institute of Technology",
        courses: [
            "Data Structures & Algorithms",
            "Object Oriented Modeling & Design",
            "Operating Systems",
            "Computer Networks",
            "Database Systems",
        ],
        start: 2016,
        end: 2020,
        gpa: "4.0",
        imgSrc: "images/nmamit.png",
    },
];

const Education: React.FC = () => {
    return (
        <Wrapper>
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Education" side="left" />
                </SlideUp>
                <College {...COLLEGES[0]} side="left" />
            </MaxWidthWrapper>
            <College {...COLLEGES[1]} side="right" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    ${QUERIES.tabletAndUp} {
        padding: 64px 64px;
    }
`;

export const ContraintedTitle = styled(SectionTitle)`
    width: 100%;
    margin-bottom: 32px;
    ${QUERIES.desktopAndUp} {
        max-width: 650px;
    }
`;

export const MaxWidthWrapper = styled.div`
    ${QUERIES.desktopAndUp} {
        max-width: max-content;
        align-self: center;
    }
`;

const Title = styled(SectionTitle)`
    margin-bottom: 32px;
`;

export default Education;
