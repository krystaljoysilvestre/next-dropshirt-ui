import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid transparent;
  min-height: 550px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  ${props => !props.visible && 'visibility: hidden;'}
`;

export const Background = styled.div`
  position: relative;
  width: 85%;
  margin: 0 auto;
  padding-top: 30px;
  min-width: 350px;
  margin-top: -7.5%;
  margin-bottom: -7.5%;
`;

export const Loader = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 350px;
  color: ${props => props.theme.text.gray};

  .anticon {
    font-size: 32px;
    color: ${props => props.theme.border.default};
    margin-bottom: 10px;
  }
`;
