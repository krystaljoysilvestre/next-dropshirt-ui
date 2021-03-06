import styled from "styled-components";
import { Collapse, Alert } from 'antd';
import { Button } from "components";

const { Panel } = Collapse;

export const Container = styled.div`
  padding: 2.5% 12% 10% 12%;

  @media (max-width: 500px) {
    padding: 2.5% 5% 10% 5%;
  }
`;

export const StyleCode = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.text.lightGray};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 21px;
  margin: 5px 0;
`;

export const Price = styled.div`
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 3px;
  transition: color 0.5s ease;

  ${props => props.highlight ? `
    color: ${props.theme.status.success};
  ` : `
    color: ${props.theme.text.default};
  `}
`;

export const Tags = styled.div`
  font-size: 12px;
  line-height: 21px;
  color: ${props => props.theme.text.lightGray};
`;

export const ColorSelection = styled.div`
  margin-top: 30px;
`;

export const FinishingSelection = styled.div`
  margin-top: 20px;
`;

export const SizeSelection = styled.div`
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  height: 48px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 16px !important;
    margin-top: 5px;
  }
`;

export const DetailsContainer = styled.div`
  margin-top: 50px;
`;

export const AppearsInContainer = styled.div`
  margin-top: 20px;
`;

export const DesignsContainer = styled(Collapse)`
  margin-top: 30px;
  border-top: 1px solid ${props => props.theme.border.default};
  border-radius: 0px;
  background: ${props => props.theme.background.light};
`;

export const Design = styled(Panel)`
  padding: 30px 0;

  .ant-collapse-header {
    padding: 0 !important;

    .anticon {
      display: none !important;
    }
  }

  .ant-collapse-content-box {
    padding: 15px 0 0 0 !important;
    margin-bottom: -10px;
  }
`;

export const StyledAlert = styled(Alert)`
  border: none;
  position: fixed;
  top: 4%;
  left: 15%;
  width: 70%;
  z-index: 9999;
  height: 40px;
  font-size: 14px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.status.success};

  .ant-alert-message {
    color: ${props => props.theme.text.light};
    display: flex;
    align-items: center;

    .anticon {
      font-size: 22px;
      margin-left: 5px;
      margin-right: 15px;
    }
  }
`;
