import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.border.default};
  width: 100%;
  position: relative;
  min-height: 350px;
  overflow: hidden;
`;

export const Topbar = styled.div`
  margin-top: 15px;
  position: absolute;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

export const CanvasContainer = styled.div`
  position: relative;
`;
