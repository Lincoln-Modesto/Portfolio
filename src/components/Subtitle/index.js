import styled from "styled-components";
import theme from "../../styles/theme";

export const Subtitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 18px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: ${theme.dark.subtitleColor};
`
export const SubtitleItalic = styled.h4`
  margin-top: 1rem;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: ${theme.dark.subtitleColor};
`
export const SubtitleItem = styled.h6`
  font-family: 'Montserrat';
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0.12em;
  text-align: center;
  color: ${theme.dark.subtitleColor};
`