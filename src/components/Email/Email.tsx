import { QUERIES } from "breakpoints";
import styled from "styled-components";

const Email: React.FC = () => {
    return (
        <Wrapper>
            <Link href="mailto:sgupt330@asu.edu">sgupt330@asu.edu</Link>
            <Line />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    display: none;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    width: 24px;
    z-index: 50;

    bottom: 0;
    color: ${({ theme }) => theme.colors.text.light};
    cursor: pointer;

    ${QUERIES.tabletAndUp} {
        display: flex;
        right: 16px;
    }

    ${QUERIES.desktopAndUp} {
        right: 32px;
    }
`;

const Link = styled.a`
    color: ${({ theme }) => theme.colors.text.light};
    transform: rotate(-90deg) translateX(50%) translateY(-10%);
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;
    transition: var(--transition);

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: rotate(-90deg) translateX(50%) translateY(-10%)
            translateX(8px) scale(1.05);
    }
`;

const Line = styled.div`
    ${QUERIES.tabletAndUp} {
        border: 1px solid ${({ theme }) => theme.colors.text.light};
        height: 100px;
        width: 0px;
    }
`;

export default Email;
