import styled from "styled-components";

export const TitleDark = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 1rem;
  color: ${({theme}) => theme.titleColor};

  /* X-Small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px){
    font-size: 18px;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 1rem;
  color: ${({theme}) => theme.titleColor};

   /* X-Small devices (portrait phones, less than 576px)*/
   @media (max-width: 575.98px){
    font-size: 18px;
  }
`

export const TitleDescription = styled.h2`
  font-family: 'Montserrat';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0.5rem;
  color: ${({theme}) => theme.titleColor};

   /* X-Small devices (portrait phones, less than 576px)*/
   @media (max-width: 575.98px){
    font-size: 14px;
  }
`