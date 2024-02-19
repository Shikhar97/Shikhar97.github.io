import styled from "styled-components";

export interface IProps {
    delegated?: any;
}

const Template: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {
    return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div``;

export default Template;
