import styled from "styled-components";

export const SectionAbout = styled.section`
  padding: 3rem 5rem;
  background: ${({theme}) => theme.backgroundAbout};

  /* X-Small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px){
    padding: 3rem 1.5rem;
  }

  /* Small devices (landscape phones, less than 768px)*/
  @media (min-width: 576px) and (max-width: 767.98px){
    padding: 3rem 2rem;
  }
`