import styled from "styled-components";

export const Container = styled.div`
  ${props => !props.visible && 'visibility: hidden;'}
`;

export const Background = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 350px;
  display: flex;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  ${props => props.hidden && 'visibility: hidden;'}
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

export const DesignArea = styled.div`
  position: absolute;
  z-index: 100;

  ${props => props.showBoundingBox ? `
    border: 1px solid ${props.theme.border.light};
  ` : `
    border: 1px solid transparent;
  `}
`;
