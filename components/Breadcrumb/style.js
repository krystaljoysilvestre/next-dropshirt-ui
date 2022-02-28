import styled from "styled-components";
import { Breadcrumb } from 'antd';

export const StyledBreadcrumb = styled(Breadcrumb)`
  font-size: 12px;
  color: ${props => props.theme.text.lightGray};
  margin-bottom: 30px;

  > span:last-child {
    color: ${props => props.theme.text.lightGray};
  }
`;
