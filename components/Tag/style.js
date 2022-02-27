import styled from 'styled-components';
import { Tag } from 'antd';

export const StyledTag = styled(Tag)`
  border: none;
  background: ${props => props.theme.background.gray};
  border-radius: 15px;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  color: ${props => props.theme.text.gray};
`;
