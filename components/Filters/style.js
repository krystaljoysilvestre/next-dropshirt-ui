import styled from "styled-components";
import { Tag } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersSelection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

export const DropdownButton = styled.button`
  border: none;
  background: ${props => props.theme.background.light};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;

  .anticon {
    margin-left: 5px;
    font-size: 8px;
  }
`;

export const DropdownContainer = styled.div`
  border: 1px solid ${props => props.theme.border.default};
  background: ${props => props.theme.background.light};
  padding: 15px;
  min-width: 194px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  max-height: 400px;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 30px);

  span {
    color: ${props => props.theme.text.lightGray};
  }
`;

export const Colors = styled.div`
  width: 407px;
  max-height: 386px;
  padding: 15px 15px 5px 15px;
  background: ${props => props.theme.background.light};
  border: 1px solid ${props => props.theme.border.default};
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 771px) {
    width: calc(100% - 60px);
    margin-left: 30px;
  }
`;

export const ColorItem = styled.div`
  width: 50%;
  margin-bottom: 10px;
  padding-right: 10px;

  span {
    overflow: hidden;
    white-space: nowrap;
    width: 140px;
    text-overflow: ellipsis;
  }
`;

export const Radio = styled.div`
  background-color: ${props => props.color};
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border-radius: 16px;
`;

export const ActiveFilters = styled.div`
  margin-bottom: 10px;
`;

export const StyledTag = styled(Tag)`
  border: 1px solid ${props => props.theme.border.default};
  border-radius: 15px;
  padding: 0 10px;
  cursor: pointer;
  height: 24px;
  line-height: 23px;
  color: ${props => props.theme.text.gray};
  background: ${props => props.theme.background.light};

  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`;
