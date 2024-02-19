import { QUERIES } from "breakpoints";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import SlideUp from "../SlideUp";

export interface IProps {
    degree: string;
    school: string;
    courses: string[];
    start: number;
    end: number;
    gpa: string;
    imgSrc: string;
    side: "left" | "right";
}

const College: React.FC<IProps> = ({
    degree,
    school,
    courses,
    start,
    end,
    gpa,
    imgSrc,
    side,
    ...delegated
}) => {
    const smallImg = imgSrc.replace(".png", "-small.png");

    return (
        <Wrapper side={side} {...delegated}>
            <SlideUp>
                <Stretch>
                    <Tilt
                        tiltMaxAngleX={3}
                        tiltMaxAngleY={3}
                        glareEnable={true}
                        glarePosition="top"
                        glareMaxOpacity={0.3}
                        glareBorderRadius="8px"
                    >
                        <Image src={imgSrc} alt={school} />
                    </Tilt>
                </Stretch>
            </SlideUp>
            <Info side={side}>
                <SlideUp delay={200}>
                    <SmallImage src={smallImg} alt={school} />
                </SlideUp>
                <SlideUp delay={200}>
                    <Degree side={side}>{degree}</Degree>
                </SlideUp>
                <SlideUp delay={200}>
                    <School side={side}>{school}</School>
                </SlideUp>
                <Courses side={side}>
                    <Title>Courses</Title>
                    {courses.map((course, i) => (
                        <Course key={i}>{course}</Course>
                    ))}
                </Courses>
                <SlideUp delay={200}>
                    <Data side={side}>
                        <Time>
                            {start} - {end}
                        </Time>
                        <GPA>GPA: {gpa}</GPA>
                    </Data>
                </SlideUp>
            </Info>
        </Wrapper>
    );
};

interface StyledProps {
    side: "left" | "right";
}

export const Wrapper = styled.div<StyledProps>`
    display: flex;
    isolation: isolate;
    justify-content: center;
    flex-direction: column;

    ${QUERIES.desktopAndUp} {
        flex-direction: ${({ side }) =>
            side === "left" ? "row" : "row-reverse"};
    }
`;

export const Stretch = styled.div`
    /* margin-left: -32px;
    margin-right: -32px; */

    ${QUERIES.desktopAndUp} {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 650px;
    max-height: 500px;
    object-fit: cover;
    z-index: 1;
    line-height: 0;

    ${QUERIES.tabletAndUp} {
        display: none;
    }

    ${QUERIES.desktopAndUp} {
        display: block;
        border-radius: 8px;
    }
`;

const SmallImage = styled.img`
    display: none;
    height: 120px;
    width: 120px;
    position: absolute;
    right: 32px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;

    ${QUERIES.tabletAndUp} {
        display: block;
    }

    ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

export const Info = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;

    ${QUERIES.desktopAndUp} {
        width: 500px;
        align-items: ${({ side }) =>
            side === "left" ? "flex-end" : "flex-start"};
        margin-left: ${({ side }) => (side === "left" ? "-32px" : "0")};
        margin-right: ${({ side }) => (side === "right" ? "-32px" : "0")};
        margin-top: auto;
        margin-bottom: auto;
    }
`;

export const Degree = styled.h4<StyledProps>`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: calc(14 / 16 * 1rem);
    margin-top: 16px;

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
        font-size: calc(16 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(18 / 16 * 1rem);
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
    }
`;

export const School = styled.h4<StyledProps>`
    margin-bottom: 16px;
    font-size: calc(21 / 16 * 1rem);

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
        font-size: calc(24 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(28 / 16 * 1rem);
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
    }
`;

export const Courses = styled.ul<StyledProps>`
    background-color: ${({ theme }) => theme.colors.background.light};
    padding: 32px;

    display: flex;
    flex-direction: column;
    margin-left: -32px;
    margin-right: -32px;

    ${QUERIES.tabletAndUp} {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        border-radius: 8px;
    }

    ${QUERIES.desktopAndUp} {
        align-items: ${({ side }) =>
            side === "left" ? "flex-end" : "flex-start"};
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`;

const Course = styled.li`
    font-weight: 400;
`;

export const Data = styled.ul<StyledProps>`
    margin-top: 16px;
    display: flex;
    gap: 64px;
    font-size: calc(20 / 16 * 1rem);

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
    }

    ${QUERIES.desktopAndUp} {
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
        align-self: ${({ side }) =>
            side === "left" ? "flex-end" : "flex-start"};
    }
`;

const Time = styled.p`
    font-weight: 400;
`;

const GPA = styled.p`
    color: ${({ theme }) => theme.colors.primary};
`;

export default College;
