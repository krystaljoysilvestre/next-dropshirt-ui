import styled from "styled-components";

export const StyledButtonGroup = styled.div`
  ${props => props.block ? 'width: 100%;' : 'width: auto;'}

  button {
    border-radius: 0px;

    span {
      font-size: 12px !important;
    }

    &:first-child {
      border-radius: 32px 0 0 32px;
    }

    &:last-child {
      border-radius: 0 32px 32px 0;
    }
  }
`;
