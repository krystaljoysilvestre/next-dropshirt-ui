import styled from "styled-components";
import { Menu } from 'antd';

export const Wrapper = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #DCDCDC;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 42px;
  z-index: 1;
`;

export const Center = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
`;

export const StyledMenu = styled(Menu)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

export const StyledMenuItem = styled(Menu.Item)`
  text-transform: uppercase;

  &:hover {
    color: ${props => props.theme.text.default} !important;

    &:after {
      display: none !important;
    }
  }

  &.ant-menu-item-selected {
    color: ${props => props.theme.text.default} !important;
    font-weight: 600;

    &:after {
      display: none !important;
    }
  }
`;
