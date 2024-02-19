import { QUERIES } from "breakpoints";
import { useState } from "react";
import styled from "styled-components";

export interface IProps {
    delegated?: any;
}

const Splash: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {
    setTimeout(() => {
        setDisplay(false);
    }, 5000);

    const [display, setDisplay] = useState(true);

    return display ? (
        <Wrapper show={display} {...delegated}>
            <Logo src="/images/logo.png" alt="Logo" />
        </Wrapper>
    ) : null;
};

interface SplashProps {
    show: boolean;
}

const Wrapper = styled.div<SplashProps>`
    position: fixed;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999;
    background-color: ${({ theme }) => theme.colors.background.dark};

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    pointer-events: none;
    animation: fadeOut 500ms 3s ease-in-out forwards;
`;

const Logo = styled.img`
    width: 104px;
    height: 100px;
    flex-shrink: 0;

    ${QUERIES.tabletAndUp} {
        width: 154px;
        height: 150px;
    }

    @keyframes zoomIn {
        0% {
            transform: scale(0);
        }
        70% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes zoomOut {
        0% {
            transform: scale(1);
        }
        30% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(0);
        }
    }

    animation: zoomIn 800ms ease-in-out, zoomOut 500ms 2s ease-in-out forwards;
`;

export default Splash;
