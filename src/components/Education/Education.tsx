import College from "@/components/College";
import { QUERIES } from "breakpoints";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const COLLEGES = [
    {
        degree: "Master of Science in Computer Science",
        school: "Arizona State University",
        courses: [
            "Cloud Computing",
            "Data Visualization",
            "Data Processing at Scale",
            "Natural Language Processing",
            "Data Mining",
            "HCI & User Experience",
        ],
        start: 2022,
        end: 2024,
        gpa: "4.0",
        imgSrc: "images/asu.jpeg",
    },
    {
        degree: "Bachelor of Engineering in Computer Science",
        school: "PES University",
        courses: [
            "Data Structures & Algorithms",
            "Android Development",
            "Operating Systems",
            "Computer Networks",
            "Machine Learning",
        ],
        start: 2015,
        end: 2019,
        gpa: "3.7",
        imgSrc: "images/pesu.jpeg",
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
