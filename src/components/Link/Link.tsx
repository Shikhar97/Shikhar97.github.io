import styled from "styled-components";

export interface IProps {
    delegated?: any;
    href: string;
    target: string;
    rel: string;
}

const Link: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;
`;

export default Link;
