import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormattedIcon  from '@/components/icons/formattedIcon';
import styled from 'styled-components';
import mixins from '@/styles/mixins';
import theme from '@/styles/theme';
import media from '@/styles/media';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: white;
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;

`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;
const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const Footer = () => {
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
        <StyledContainer>
            <StyledSocial>
                <StyledSocialList>
                            <li key="0">
                                <StyledSocialLink
                                    href="https://github.com/Shikhar97"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="Shikhar Gupta">
                                    <FormattedIcon name="GitHub" />
                                </StyledSocialLink>
                            </li>
                </StyledSocialList>
            </StyledSocial>
            <StyledMetadata>
                <StyledGitHubLink
                    href="https://github.com/Shikhar97/Shikhar97.github.io/tree/v2"
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    <div>
                        Designed &amp; Built by Shikhar Gupta<br></br><br></br>
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
            </StyledMetadata>
        </StyledContainer>
    );
};

Footer.propTypes = {
    githubInfo: PropTypes.object,
};

export default Footer;