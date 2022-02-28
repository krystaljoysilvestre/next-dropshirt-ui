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

export const Radio = styled.button`
  border: none;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  margin-right: 5px;
  margin-bottom: 5px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.isLightColor && `
    border: 1px solid ${props.theme.border.default};
  `}
`;

export const Inner = styled.div`
  height: 8px;
  min-width: 8px;
  border-radius: 4px;
  background: ${props => props.theme.background.light};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
