import { QUERIES } from "breakpoints";
import styled from "styled-components";

export interface IProps {
    onClick?: () => void;
    delegated?: any;
}

const Button: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.button`
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: 1px solid;
    border-radius: 8px;
    padding: 10px 16px;
    transition: var(--transition);

    ${QUERIES.tabletAndUp} {
        padding: 16px 32px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background.light};
    }
`;

export default Button;
