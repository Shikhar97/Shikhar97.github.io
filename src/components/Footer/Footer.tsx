import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormattedIcon  from '@/components/Icons/formattedIcon';
import styled from "styled-components";

export interface IProps {
    delegated?: any;
}

const Footer = ({ ...delegated }) => {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch('https://api.github.com/repos/Shikhar97/Shikhar97.github.io')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <Wrapper>
            <StyledGitHubLink
                href="https://github.com/Shikhar97/Shikhar97.github.io/tree/v2"
                target="_blank"
                rel="nofollow noopener noreferrer">
                <div>
                    Designed &amp; Built by <strong>Shikhar Gupta</strong>
                </div>
            {githubInfo.stars && githubInfo.forks && (
                <StyledGitHubInfo>
              <span>
                <FormattedIcon name="Star" />
                <span>{githubInfo.stars}</span>
              </span>
                    <span>
                <FormattedIcon name="Fork" />
                <span>{githubInfo.forks}</span>
              </span>
                </StyledGitHubInfo>
            )}
            </StyledGitHubLink>
        </Wrapper>
    );
};


const StyledGitHubLink = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  padding: 5px;
  margin: auto;
  width: 25%;
  display: block;

  & > * {
    transition: var(--transition);
  }
  
  &:hover > * {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
    transform: scale(1.1) translateY(-2px);
  }
`;

const StyledGitHubInfo = styled.div`
  margin-top: 4px;
  
  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    fill: ${({ theme }) => theme.colors.text.light};
    margin-right: 4px;
  }
`;

const Wrapper = styled.div`
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.text.light};
    padding: 16px;
    text-align: center;
    font-size: calc(14 / 16 * 1rem);
`;


Footer.propTypes = {
    githubInfo: PropTypes.object,
};

export default Footer;