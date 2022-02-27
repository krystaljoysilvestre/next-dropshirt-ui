import styled from "styled-components";
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  span {
    color: ${props => props.theme.text.gray};
    font-weight: 300;
  }

  ${props => props.type === 'primary' && `
    border: none;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
    color: ${props.theme.text.light};
    font-weight: 300;
    font-size: 14px !important;

    span {
      color: ${props.theme.text.light} !important;
    }

    &:hover, &:focus, &:active {
      border: none;
    } 
  `}

  ${props => props.type === 'default' && `
    &:hover, &:active, &:focus {
      border: 1px solid ${props.theme.border.default} !important;
      span {
        color: rgba(0, 0, 0, 0.85) !important;
      }
    }
  `}

  ${props => props.type === 'text' && `
    &:hover {
      background-image: none !important;
      span {
        color: rgba(0, 0, 0, 0.85) !important;
      }
    }
  `}

  ${props => props.gradient === 'true' && `
    ${props.type !== 'text' ? `
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      );
    ` : ''}

    linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
    background-origin: border-box !important;
    border: 1px solid transparent !important;
    box-shadow: 1000px 0 #ffffff inset !important;

    span {
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.001);
      font-weight: 300;
      font-size: 14px !important;

      &:hover, &:active, &:focus {
        background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        );
        linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.001) !important;
      }
    }

    &:hover, &:focus, &:active {
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      );
      linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
      background-origin: border-box !important;
      border: 1px solid transparent !important;
      box-shadow: 1000px 0 #ffffff inset !important;
    }
  `}


  ${props => props.color && `
    border: 1px solid ${props.color};
    span {
      color: ${props.color};
    }

    &:hover, &:focus, &:active {
      border: 1px solid ${props.color};
      span {
        color: ${props.color};
      }
    }
  `}
`;
