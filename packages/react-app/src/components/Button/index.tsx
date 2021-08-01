import styled from "styled-components";
import { Wrapper as AdminToolbarWrapper } from "../OptionsContainer/AdminToolbar/styles";

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  padding: 12px 24px;

  ${AdminToolbarWrapper} & {
    padding: 12px 12px;
    min-width: 150px;
  }

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;

export default Button;