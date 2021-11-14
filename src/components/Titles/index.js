import styled from "styled-components";

export const TitleDark = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 1rem;
  color: ${({theme}) => theme.titleColor}
`

export const Title = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 1rem;
  color: ${({theme}) => theme.titleColor}
`

export const TitleDescription = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0.5rem;
  color: ${({theme}) => theme.titleColor}
`