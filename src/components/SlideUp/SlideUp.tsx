import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export interface IProps {
    delegated?: any;
    delay?: number;
    fullWidth?: boolean;
    zIndex?: number;
}

const SlideUp: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    delay,
    fullWidth,
    zIndex,
    ...delegated
}) => {
    const [ref, inView, entry] = useInView({ threshold: 0 });
    const [visible, setVisible] = React.useState(false);

    // Visible should be set to true when the element is in view and then stay true
    React.useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <Wrapper
            {...delegated}
            visible={visible}
            ref={ref}
            delay={delay}
            fullWidth={fullWidth}
            zIndex={zIndex}
        >
            {children}
        </Wrapper>
    );
};

interface StyledProps {
    visible?: boolean;
    delay?: number;
    fullWidth?: boolean;
    zIndex?: number;
}

const Wrapper = styled.div<StyledProps>`
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(min(50%, 40px));
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    // Only apply the animation if user has not set prefer-reduced-motion
    @media (prefers-reduced-motion: no-preference) {
        opacity: 0;
        animation: ${({ visible }) =>
            visible ? "slideUp 0.5s ease-in forwards" : ""};
        animation-delay: ${({ delay }) =>
            delay ? `${delay + 100}ms` : "100ms"};
        height: fit-content;
        z-index: ${({ zIndex }) => (zIndex ? zIndex : 0)};
    }

    will-change: opacity, transform;
`;

export default SlideUp;
