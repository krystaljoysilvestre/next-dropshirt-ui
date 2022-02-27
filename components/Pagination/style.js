import styled from 'styled-components';
import { Pagination } from 'antd';

export const StyledPagination = styled(Pagination)`
  margin: 50px 0;

  .ant-pagination-item {
    border: 1px solid ${props => props.theme.border.default};
    border-radius: 4px;

    a {
      color: ${props => props.theme.text.lightGray};
    }

    &-active {
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
      background-origin: border-box !important;
      border: 1px solid transparent !important;
      box-shadow: 1000px 0 #ffffff inset !important;

      a {
        background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
        height: inherit;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.001);
      }
    }

    &:hover a {
      color: rgba(0, 0, 0, 0.85) !important;
    }
  }

  .ant-pagination-item-link {
    border-radius: 4px;
  }

  li:not(.ant-pagination-disabled) {
    .ant-pagination-item-link {
      color: ${props => props.theme.text.lightGray};

      &:hover {
        border: 1px solid ${props => props.theme.border.default};
        color: rgba(0, 0, 0, 0.85) !important;
      }
    }
  }
`;
