import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 10px;
  color: white;
  padding: 20px;
`;

export const Input = styled.input.attrs({
  type: 'text'
})`
  background-color: white;
  border: 1px solid #333;
  height: 30px;
  border-radius: 8px;
  font-size: 1.6rem;
  padding: 20px 12px;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`