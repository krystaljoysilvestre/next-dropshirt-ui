import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;  
`;

export const Text= styled.div`
  width: calc(100% - 21px);
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Inner = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;

export const RadioButton = styled.div`
  background: ${props => props.color ?? props.theme.background.light};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
  border: 1px solid ${props => props.color ?? props.theme.border.default};

  ${Inner} {
    ${props => props.color ? `
      background:  ${props.theme.background.light};
    ` : `
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
    `}
  }
`;
