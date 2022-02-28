import { Card as ANTDCard, Skeleton, Row } from 'antd';
import Link from 'next/link';
import { products } from 'constants/pathname';

import {
  StyledCard,
  Caption,
  Name,
  Price,
  Cover,
  Container,
  StyledImage,
  CoverPlaceholder,
} from './style';

const { Meta } = ANTDCard;

const Card = ({ item, loading }) => {
  const renderCover = () => {
    return (
      <Cover>
        {loading ? (
          <CoverPlaceholder />
        ) : (
          <Container>
            <Link href={`${products}/${item.productId}`}>
              <a>
                <StyledImage
                  src={item.display.images[0]}
                  preview={false}
                  placeholder={
                    <StyledImage preview={false} src={item.display.images[0]} />
                  }
                />
              </a>
            </Link>
          </Container>
        )}
      </Cover>
    );
  };

  const renderTitle = () => {
    if (loading) {
      return (
        <Row justify="space-between" style={{ margin: '-3.5px 0' }}>
          <Skeleton.Button active style={{ width: 150 }} />
          <Skeleton.Button active style={{ width: 75 }} />
        </Row>
      );
    } else {
      return (
        <Caption>
          <Name>{item.name}</Name>
          <Link href={`${products}/${item.productId}`}>
            <a>
              <Price type="primary" gradient="true" shape="round" size="small">
                €{item.display.price}
              </Price>
            </a>
          </Link>
        </Caption>
      );
    }
  };

  return (
    <StyledCard hoverable={!loading} cover={renderCover()}>
      <Meta title={renderTitle()} />
    </StyledCard>
  );
};

export default Card;
