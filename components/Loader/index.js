import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Wrapper, StyledSpin } from "./style";

const Loader = ({ height, tip }) => {
  return (
    <Wrapper height={height}>
      <StyledSpin tip={tip} indicator={<LoadingOutlined />} />
    </Wrapper>
  )
};

export default Loader;
