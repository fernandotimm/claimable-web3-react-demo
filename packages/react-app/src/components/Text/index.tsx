import styled from "styled-components";
import { Wrapper as WalletContainerWrapper} from "../WalletContainer/styles";
import { Wrapper as OptionsContainerWrapper} from "../OptionsContainer/styles";

const Text = styled.span`
  color: #282c34;
  font-size: 1.6rem;
  text-decoration: none;

  ${WalletContainerWrapper} & {
    color: #ffffff;
    font-size: 1.8rem;
  }

  ${OptionsContainerWrapper} & {
    color: #ffffff;
    font-size: 1.8rem;
  }


`;

export default Text;