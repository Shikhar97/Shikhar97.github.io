import { QUERIES } from "breakpoints";
import { RxFigmaLogo } from "react-icons/rx";
import styled from "styled-components";
import { Title } from "../College/College";
import SlideUp from "../SlideUp";
import { HoverIconLink } from "../Socials/Socials";
export interface IProps {
    imgSrc: string;
    description: string;
    name: string;
    url: string;
    index: number;
    side: "left" | "right";
}

const Design: React.FC<IProps> = ({
    imgSrc,
    description,
    name,
    url,
    side,
    index,
}) => {
    return (
        <Wrapper side={side}>
            <ImageWrapper href={url} target="_blank">
                <Image src={imgSrc} alt={description} />
                <Overlay>
                    <RxFigmaLogo size={56} />
                </Overlay>
            </ImageWrapper>
            <SlideUp delay={index * 100 + 200}>
                <OuterWrapper>
                    <NameAndLink>
                        <RegularTitle>{name}</RegularTitle>
                        <HoverIconLink href={url} target="_blank">
                            <RxFigmaLogo size={32} />
                        </HoverIconLink>
                    </NameAndLink>
                    <Description side={side}>
                        <DesignName>{name}</DesignName>
                        {description}
                    </Description>
                </OuterWrapper>
            </SlideUp>
        </Wrapper>
    );
};

interface StyledProps {
    side: "left" | "right";
}

const RegularTitle = styled(Title)`
    font-size: calc(20 / 16 * 1rem);
`;

const Wrapper = styled.div<StyledProps>`
    isolation: isolate;
    display: flex;
    align-items: center;
    position: relative;

    flex-direction: ${({ side }) => (side === "left" ? "row" : "row-reverse")};

    ${QUERIES.tabletAndUp} {
    }

    ${QUERIES.desktopAndUp} {
        flex-direction: column;
        width: 300px;
    }
`;

const DesignName = styled(Title)`
    margin-bottom: 16px;

    ${QUERIES.tabletAndUp} {
        display: none;
    }
`;

const NameAndLink = styled.div`
    display: none;
    font-size: calc(24 / 16 * 1rem);
    padding: 0px 32px;
    align-items: center;
    justify-content: space-between;

    ${QUERIES.tabletAndUp} {
        display: flex;
        margin-bottom: 16px;
    }

    ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const ImageWrapper = styled.a`
    position: static;
    flex-shrink: 0;

    ${QUERIES.desktopAndUp} {
        position: relative;

        z-index: 2;
        border-radius: 8px;
        overflow: hidden;
        object-fit: cover;
        line-height: 0;

        width: 100px;
        height: 100px;

        top: 0px;
        margin-top: -44px;
        width: 270px;
        height: 250px;

        transition: var(--transition);
        &:hover {
            transform: translateY(-8px);
        }
    }

    ${QUERIES.tabletAndUp} {
        margin-top: 0px;
        width: 250px;
        height: 250px;
    }
`;

const Overlay = styled.div`
    display: none;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: black;
    background-color: ${({ theme }) => theme.colors.background.hover};
    transition: var(--transition);

    &:hover {
        opacity: 1;
    }

    ${QUERIES.desktopAndUp} {
        display: grid;
        place-items: center;
    }
`;

const Image = styled.img`
    flex-shrink: 0;
    z-index: 2;
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
    line-height: 0;

    width: 100px;
    height: 100px;

    position: absolute;
    right: 32px;
    top: 0px;
    margin-top: -44px;
    border: 2px solid ${({ theme }) => theme.colors.primary};

    ${QUERIES.tabletAndUp} {
        margin-top: 0px;
        width: 250px;
        height: 250px;
        position: static;
        border: none;
    }

    ${QUERIES.desktopAndUp} {
        width: 270px;
        height: 250px;
    }
`;

const OuterWrapper = styled.div`
    margin-bottom: 16px;
`;

const Description = styled.div<StyledProps>`
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.background.light};
    font-weight: 400;
    width: 100%;
    padding: 32px;

    ${QUERIES.tabletAndUp} {
        padding-top: 32px;

        border-top-left-radius: ${({ side }) =>
            side === "right" ? "8px" : "0"};
        border-bottom-left-radius: ${({ side }) =>
            side === "right" ? "8px" : "0"};
        border-top-right-radius: ${({ side }) =>
            side === "left" ? "8px" : "0"};
        border-bottom-right-radius: ${({ side }) =>
            side === "left" ? "8px" : "0"};
    }

    ${QUERIES.desktopAndUp} {
        padding-left: 32px;
        margin-left: 0;
        margin-top: -32px;
        height: 220px;
        padding-top: 48px;
        border-radius: 8px;
    }
`;

export default Design;
