import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.a`
  margin-top: 3rem;
  background: ${theme?.cardColor};
  border-radius: 5px;
  max-width: 520px;
  max-height: 600px;
  height: 600px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.9;
  margin-left: 1rem;

  :hover{
    opacity: 1;
  }

  
/* X-Small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px){
  height: 500px;
  max-width: 360px;
}
  
/* Large devices (desktops, less than 1200px)*/
@media (min-width: 992px) and (max-width: 1199.98px){
  height: 550px;
}

/* Large devices (desktops, less than 1200px)*/
@media (min-width: 992px) and (max-width: 1199.98px){
  height: 600px;
}
`