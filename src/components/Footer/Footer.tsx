import styled from "styled-components";

export interface IProps {
    delegated?: any;
}

const Footer = ({ ...delegated }) => {
    return (
        <Wrapper>
            Designed and Developed by <strong> Pawan Bhandarkar</strong>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.primary};
    padding: 16px;
    text-align: center;
    font-size: calc(14 / 16 * 1rem);
`;

export default Footer;
