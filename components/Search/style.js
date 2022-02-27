import styled, { keyframes } from 'styled-components';
import { Input, Button } from 'antd';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 10%, 0);
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -10%, 0);
    transform: translate3d(0, -10%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -10%, 0);
    transform: translate3d(0, -10%, 0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 10%, 0);
    transform: translate3d(0, 10%, 0);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .anticon {
    font-size: 20px;
    cursor: pointer;
  }
  
  &.fadeInUp {
    -webkit-animation: ${fadeInUp} .35s linear;
    animation: ${fadeInUp} .35s linear;
  }

  &.fadeInDown {
    -webkit-animation: ${fadeInDown} .3s linear;
    animation: ${fadeInDown} .3s linear;
  }

  &.fadeOutUp {
    -webkit-animation: ${fadeOutUp} .3s linear;
    animation: ${fadeOutUp} .3s linear;
  }

  &.fadeOutDown {
    -webkit-animation: ${fadeOutDown} .3s linear;
    animation: ${fadeOutDown} .3s linear;
  }

  &.hidden {
    display: none;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
  height: 61px;
  overflow: hidden;

  ${props => props.isActive ? 
    `border-bottom: 2px solid ${props.theme.border.dark}` 
    : `border-bottom: 1px solid ${props.theme.border.default}`
  };
`;

export const Label = styled.h3`
  font-weight: 700;
  font-size: 32px;
  margin: 5px 0;
`;

export const StyledInput = styled(Input)`
  margin-right: 30px;
  border: none;
  margin-left: -10px;

  input {
    font-size: 32px;
    border: none;
    outline: none;
    font-weight: 700;
    padding: 0;
  }

  &.ant-input-affix-wrapper-focused {
    border: none !important;
    box-shadow: none;
  }

  .ant-input-suffix .anticon {
    font-size: 16px;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.theme.text.gray};

  &:hover, &:active, &:focus {
    border: 1px solid ${props => props.theme.border.default};
    color: rgba(0, 0, 0, 0.85);
  }
`;
