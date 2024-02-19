import { QUERIES } from "breakpoints";
import { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";
import { SKILLS } from "./skills";

const Technical: React.FC = () => {
    const sortedSkills = SKILLS.sort((a, b) => b.level - a.level);
    const [active, setActive] = useState(0);
    const activeSkill = sortedSkills[active];

    const Stars = [];
    for (let i = 0; i < activeSkill.level; i++) {
        Stars.push(<Star key={i} />);
    }

    for (let i = 0; i < 5 - activeSkill.level; i++) {
        Stars.push(<EmptyStar key={i} />);
    }

    return (
        <Wrapper>
            <SlideUp>
                <Display>
                    <Title>{activeSkill.name}</Title>
                    <Content>{activeSkill.content}</Content>
                    <Level>{Stars}</Level>
                </Display>
            </SlideUp>
            <SkillList>
                <SlideUp>
                    <TechnicalTitleDesktop
                        label="Technical Skills"
                        side="right"
                    />
                    <TechnicalTitleMobile
                        label="Technical Skills"
                        side="left"
                    />
                </SlideUp>
                <SlideUp>
                    <Options>
                        {sortedSkills.map((skill, index) => (
                            <Option
                                key={skill.name}
                                onClick={() => setActive(index)}
                                onMouseEnter={() => setActive(index)}
                                active={index === active}
                            >
                                {skill.name}
                            </Option>
                        ))}
                    </Options>
                </SlideUp>
            </SkillList>
        </Wrapper>
    );
};

interface OptionProps {
    active: boolean;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px;

    ${QUERIES.tabletAndUp} {
        padding: 64px;
    }

    ${QUERIES.desktopAndUp} {
        flex-direction: row;
    }
`;

const TechnicalTitle = styled(SectionTitle)`
    width: 100%;
    margin-bottom: 32px;
`;

const TechnicalTitleDesktop = styled(TechnicalTitle)`
    display: none;

    ${QUERIES.desktopAndUp} {
        display: flex;
    }
`;

const TechnicalTitleMobile = styled(TechnicalTitle)`
    display: flex;

    ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const Display = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${({ theme }) => theme.colors.background.light};

    padding: 32px;
    height: 320px;

    margin-left: -32px;
    margin-right: -32px;
    border-radius: 0px;

    ${QUERIES.tabletAndUp} {
        margin-left: 0;
        margin-right: 0;
        border-radius: 8px;
    }

    ${QUERIES.desktopAndUp} {
        max-width: 700px;
        padding-right: 250px;
    }
`;

const Title = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.p`
    font-weight: 400;
`;

const Level = styled.div`
    display: flex;
    margin-top: auto;
    gap: 8px;
`;

const SkillList = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;

    ${QUERIES.desktopAndUp} {
        max-width: 600px;
        margin-left: -232px;
    }
`;

const Options = styled.ul`
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    ${QUERIES.desktopAndUp} {
        justify-content: flex-end;
    }
`;

const Option = styled.li<OptionProps>`
    cursor: pointer;
    background-color: ${({ theme, active }) =>
        active ? theme.colors.primary : theme.colors.text.light};
    color: ${({ theme }) => theme.colors.background.dark};
    text-align: center;
    padding: 4px 12px;
    font-size: calc(12 / 16 * 1rem);
    transition: var(--transition);
    border-radius: 2px;

    ${QUERIES.tabletAndUp} {
        padding: 4px 32px;
        font-size: calc(14 / 16 * 1rem);
    }
`;

const Star = styled.div`
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    margin-right: 4px;
`;

const EmptyStar = styled(Star)`
    background-color: ${({ theme }) => theme.colors.text.light};
`;

export default Technical;
