import styled from "styled-components";

export const Label = styled.div`
  color: ${props => props.theme.text.lightGray};
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  b {
    font-weight: 700;
    color: ${props => props.theme.text.default};
    margin-right: 5px;
  }
`;
