import { Card as ANTDCard, Skeleton, Row } from 'antd';

import { 
  StyledCard, 
  Caption, 
  Name, 
  Price, 
  Cover, 
  Container, 
  StyledImage, 
  CoverPlaceholder 
} from "./style";

const { Meta } = ANTDCard;

const Card = ({ loading }) => {
  const renderCover = () => {

    return (
      <Cover>
        {loading ? (
          <CoverPlaceholder />
        ) : (
          <Container>
            <StyledImage
              src={`https://cdn-staging.dropshirt.nl/PFM0_STTB918_C001.jpg?v=1645276685?w=3840&q=75`}
              preview={false}
              placeholder={
                <StyledImage
                  preview={false}
                  src="https://cdn-staging.dropshirt.nl/PFM0_STTB918_C001.jpg?v=1645276685?w=3840&q=75"
                />
              }
            />
          </Container>
        )}
      </Cover>
    )
  };

  const renderTitle = () => {
    if (loading) {
      return (
        <Row justify="space-between" style={{ margin: '-3.5px 0' }}>
          <Skeleton.Button active style={{ width: 150 }} />
          <Skeleton.Button active style={{ width: 75 }} />
        </Row>
      )
    } else {
      return (
        <Caption>
          <Name>Baby Creator</Name>
          <Price gradient shape="round" size="small">€30.00</Price>
        </Caption>
      )
    }
  };

  return (
    <StyledCard hoverable={!loading} cover={renderCover()}>
      <Meta title={renderTitle()} />
    </StyledCard>
  );
};

export default Card;
