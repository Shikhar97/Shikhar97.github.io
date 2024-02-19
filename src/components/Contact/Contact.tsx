import { QUERIES } from "breakpoints";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { MaxWidthWrapper } from "../Education/Education";
import Highlight from "../Highlight/Highlight";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

export interface IProps {
    delegated?: any;
}

const Contact: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {
    const [message, setMessage] = useState("");

    return (
        <Wrapper {...delegated} id="contact">
            <StretchedMaxWidthWrapper>
                <SlideUp>
                    <MobileTitle label="Get In Touch" side="left" />
                </SlideUp>
                <SlideUp>
                    <Notepad>
                        <Sticky />
                        <Input
                            placeholder="Type your message here..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </Notepad>
                </SlideUp>
            </StretchedMaxWidthWrapper>
            <Info>
                <SlideUp>
                    <DesktopTitle label="Get In Touch" side="left" />
                </SlideUp>
                <SlideUp zIndex={2}>
                    <Message>
                        If you would like to work together or discuss an
                        opportunity for work, please use the form or send me an
                        email on <Highlight>sgupt330@asu.edu</Highlight>
                    </Message>
                </SlideUp>
                <SlideUp>
                    <StyledButton
                        onClick={() => {
                            window.open(
                                `mailto:sgupt330@asu.edu?subject=Job Opportunity&body=${message}`
                            );
                        }}
                    >
                        Send
                    </StyledButton>
                </SlideUp>
            </Info>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    isolation: isolate;
    display: flex;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${QUERIES.tabletAndUp} {
        flex-direction: row;
        padding: 64px;
    }
`;

const Notepad = styled.div`
    z-index: 2;
    height: 300px;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    background-color: var(--color-sticky-content);
    width: 100%;
`;

const StretchedMaxWidthWrapper = styled(MaxWidthWrapper)`
    display: grid;
    place-items: center;
    align-self: stretch;
`;

const Sticky = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--color-sticky-top);
`;

const Input = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: none;
    height: 100%;
    padding: 32px;
    color: black;
    width: 100%;

    &:focus {
        outline: none;
    }

    ${QUERIES.tabletAndUp} {
        padding-right: 100px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${QUERIES.desktopAndUp} {
        gap: 32px;
    }
`;

const MobileTitle = styled(SectionTitle)`
    display: flex;
    width: 100%;
    margin-bottom: 32px;

    ${QUERIES.tabletAndUp} {
        display: none;
    }
`;

const DesktopTitle = styled(SectionTitle)`
    padding-left: 32px;
    display: none;

    ${QUERIES.tabletAndUp} {
        display: flex;
    }
`;

const Message = styled.p`
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px;
    margin-left: -32px;
    margin-right: -32px;
    font-weight: 600;
    padding-top: 48px;
    margin-top: -16px;

    ${QUERIES.tabletAndUp} {
        z-index: 2;
        padding-top: 32px;
        border-radius: 8px;
        margin-right: 0px;
        margin-left: -64px;
        margin-top: 0px;
        max-width: 500px;
    }
`;

const StyledButton = styled(Button)`
    align-self: flex-start;
    padding-left: 32px;
    padding-right: 32px;

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
    }
`;

export default Contact;
