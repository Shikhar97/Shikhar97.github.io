import { QUERIES } from "breakpoints";
import styled from "styled-components";

export interface IProps {
    label: string;
    side: "left" | "right";
    delegated?: any;
}

const SectionTitle = ({ label, side, ...delegated }: IProps) => {
    return (
        <Wrapper {...delegated} side={side}>
            {label}
            <Line />
        </Wrapper>
    );
};

interface StyledProps {
    side: "left" | "right";
}

const Wrapper = styled.div<StyledProps>`
    font-size: calc(24 / 16 * 1rem);
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    flex-direction: ${({ side }) => (side === "left" ? "row" : "row-reverse")};
    gap: 16px;

    ${QUERIES.tabletAndUp} {
        gap: 32px;
    }
`;

const Line = styled.div`
    height: 1px;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export default SectionTitle;
