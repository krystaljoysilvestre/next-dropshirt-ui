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

export const SizeGroup = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

export const Size = styled.div`
  border: 1px solid ${props => props.theme.border.default};
  min-height: 24px;
  cursor: pointer;
  min-width: 24px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.text.gray};
  text-transform: uppercase;

  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }

  ${props => props.selected && `
    border: 1px solid ${props.theme.border.dark};
    color: ${props.theme.text.default};
  `}

  ${props => props.disabled && `
    color: ${props.theme.text.lightGray};
    opacity: 0.6;

    &:hover {
      color: ${props.theme.text.lightGray};
    }
  `}
`;
