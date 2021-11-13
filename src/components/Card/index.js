import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.a`
  margin-top: 3rem;
  background: ${theme.dark.cardColor};
  border-radius: 5px;
  max-width: 520px;
  max-height: 600px;
  height: 600px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
`