import { Row, Col } from 'antd';
import { Card } from "components";

const Gallery = ({ loading }) => {
  return (
    <Row gutter={[35, 35]}>
      <Col lg={8} md={12} xs={24}>
        <Card loading={loading} />
      </Col>
      <Col lg={8} md={12} xs={24}>  
        <Card loading={loading} />
      </Col>
      <Col lg={8} md={12} xs={24}>
        <Card loading={loading} />
      </Col>
      <Col lg={8} md={12} xs={24}>
        <Card />
      </Col>
      <Col lg={8} md={12} xs={24}>  
        <Card />
      </Col>
      <Col lg={8} md={12} xs={24}>
        <Card />
      </Col>
      <Col lg={8} md={12} xs={24}>
        <Card />
      </Col>
      <Col lg={8} md={12} xs={24}>  
        <Card />
      </Col>
      <Col lg={8} md={12} xs={24}>
        <Card />
      </Col>
    </Row>
  );
};

export default  Gallery;
