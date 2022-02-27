import styled from "styled-components";
import { Card, Image } from 'antd';
import { Button } from 'components';


export const StyledImage = styled(Image)`
  height: auto;
  transform: scale(1.4) translate(-14.5%, 3%);
  transition: 0.3s all ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  height: 316px;
`;

export const StyledCard = styled(Card)`
  border: 1px solid ${props => props.theme.border.default};

  .ant-card-cover {
    margin-top: 0 !important;
    margin-left: 0 !important;
  }

  .ant-card-body {
    padding: 24px 15px !important;
  }

  &:hover {
    ${StyledImage} {
      height: 317px;
      width: auto;
      transform: scale(1) translate(0%, 0%);
    }

    ${Container} {
      justify-content: center;
    }
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-style: italic;
`;

export const Price = styled(Button)`
  font-weight: 700;
  font-style: none;
`;

export const Cover = styled.div`
  border-bottom: 1px solid ${props => props.theme.border.default};
  height: 318px;
  overflow: hidden;
`;

export const CoverPlaceholder = styled.div`
  background: rgba(190,190,190,.2);
  height: 100%;
`;
