import styled from "styled-components";
import theme from "../../styles/theme";

export const Button = styled.button`
  font-family: 'Montserrat';
  background-color: ${theme.dark.buttonColor};
  border: none;
  border-bottom: 3px solid #6C00F5;
  padding: 1rem 3.5rem;
  border-radius: 5px;
  color: ${theme.dark.textButton};
  font-size: 18px;
  font-weight: 700;
  margin-top: 1rem;
  cursor: pointer;
  opacity: 1;
  
    :hover{
      opacity: 0.9;
    }

  /* X-Small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px){
    zoom: 0.7;
  }

  /* Small devices (landscape phones, less than 768px)*/
  @media (min-width: 576px) and (max-width: 767.98px){
    zoom: 0.85;
  }
`

export const ButtonContact = styled.button`
  font-family: 'Montserrat';
  background-color: ${theme.dark.buttonColor};
  border: none;
  border-bottom: 3px solid #6C00F5;
  padding: 1rem;
  border-radius: 5px;
  color: ${theme.dark.textButton};
  font-size: 18px;
  font-weight: 700;
  margin-top: 1rem;
  cursor: pointer;
  opacity: 1;
  
    :hover{
      opacity: 0.9;
    }
  
  /* X-Small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px){
    zoom: 0.7;
  }

  /* Small devices (landscape phones, less than 768px)*/
  @media (min-width: 576px) and (max-width: 767.98px){
    zoom: 0.85;
  }
`