import styled from "styled-components";

export const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0.04em;
  text-align: justify;
  color: ${({theme}) => theme.subtitleColor};

`