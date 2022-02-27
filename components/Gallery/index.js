import { Row } from 'antd';

const Gallery = ({ items }) => {
  return <Row gutter={[35, 35]}>{items}</Row>;
};

export default Gallery;
