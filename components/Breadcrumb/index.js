import { Breadcrumb as ANTDBreadcrumb } from 'antd';

import { StyledBreadcrumb } from "./style";

const Breadcrumb = (props) => {
  return (
    <StyledBreadcrumb {...props}>
      {props.items.map((item, index) => (
        <ANTDBreadcrumb.Item key={index}>{item}</ANTDBreadcrumb.Item>
      ))}
    </StyledBreadcrumb>
  )
};

export default Breadcrumb;
