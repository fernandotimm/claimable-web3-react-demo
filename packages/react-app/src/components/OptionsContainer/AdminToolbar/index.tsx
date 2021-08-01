import React from "react";
import { useCallback } from "react";
import Button from "../../Button";
import { Input, Wrapper, FieldGroup } from "./styles";

import { useWalletContext } from "../../../hooks/useWalletContext";
import { useClaimable } from "../../../hooks/useClaimable";

const AdminToolbar = () => {
  const { selectedAccount, provider } = useWalletContext();
  const claimable = useClaimable({ provider });

  const handleClick = useCallback((event) => {
    //TODO
  }, []);
  
  return (
    <Wrapper>
      <FieldGroup>
        <Input placeholder="Enter claimer address" />
        <Button onClick={handleClick}>Add claimer</Button>
      </FieldGroup>
      <FieldGroup>
        <Input placeholder="Enter claimer address" />
        <Button onClick={handleClick}>Remove claimer</Button>
      </FieldGroup>
    </Wrapper>
  );
}

export default AdminToolbar;

