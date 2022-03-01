import styled from "styled-components";
import { Spin } from 'antd';

export const Wrapper = styled.div`
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpin = styled(Spin)`
  color: ${props => props.theme.text.gray};

  .anticon {
    font-size: 40px;
    margin-bottom: 15px;
    color: ${props => props.theme.border.default};
  }
`;
