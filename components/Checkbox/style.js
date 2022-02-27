import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: default;
  justify-content: center;

  ${props => props.block && 'width: 100%;'}
`;

export const Check = styled.div`
  border: 1px solid #d9d9d9;
  background: ${props => props.theme.text.light};
  height: 16px;
  width: 16px;
  border-radius: 2px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.checked && `
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
    background-origin: border-box !important;
    border: none;
    color: ${props => props.theme.text.light};
    font-size: 10px;
  
  `}
`;
