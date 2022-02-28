import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Empty } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { products } from 'constants/pathname';
import { useGetProductByIdQuery } from "lib/productApi";
import { setId, setColor, setFinish, setSize, reset } from "lib/selectedProductSlice";
import useFilteredVariants from "lib/hooks/useFilteredVariants";
import theme from 'styles/theme';

import { 
  Breadcrumb, 
  ColorPicker, 
  FinishingPicker, 
  SizePicker, 
  Button,
  ProductPreview,
  DetailsList,
  AppearsInList,
  Loader
} from 'components';

import { 
  Container, 
  StyleCode, 
  Name, 
  Description, 
  Price, 
  Tags,
  ColorSelection,
  FinishingSelection,
  SizeSelection,
  StyledButton,
  DetailsContainer,
  AppearsInContainer
} from './style';

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const productId = router.query?.id;

  const { isLoading, isError, currentData } = useGetProductByIdQuery(productId);
  const productDetails = currentData?.data;

  const { color, finish, size, id } = useSelector((state) => state.selectedProduct);

  const selectedVariant = useFilteredVariants(productDetails?.variants, {
    color,
    finish,
    size
  })[0];

  const printVariant = useFilteredVariants(productDetails?.variants, {
    color,
    finish: 'Print',
    size
  })[0];

  const embroideryVariant = useFilteredVariants(productDetails?.variants, {
    color,
    finish: 'Embroidery',
    size
  })[0];

  const initializeSelectedProduct = useCallback(() => {
    if (productDetails) {
      !color.code && dispatch(setColor(productDetails.options.color[0]));  
      !finish && dispatch(setFinish(productDetails.options.finish[0]));
      !size && dispatch(setSize(productDetails.options.size[0]));
    }
  }, [dispatch, productDetails, color, finish, size]);

  useEffect(() => {    
    if (productId && productId !== id) {
      dispatch(reset());
      dispatch(setId(productId));
    }
    initializeSelectedProduct();
  }, [dispatch, productId, id, initializeSelectedProduct]);
  
  if (isLoading) {
    return <Loader height="85vh" tip="Loading..." />;
  } else if (!isLoading && !productDetails){
    return (
      <Row style={{ height: '85vh' }} justify="center" align="middle">
        <Empty description={`No product found for "${productId}"`} image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Row>
    );
  } else if (productDetails) {
    return (
      <Container>
        {/* <Breadcrumb items={['Men', 'Shirts + Sweatshirts', 'Oversized', 'Freestyler']} /> */}

        <Row>
          <Col sm={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }} style={{ paddingRight: '30px' }}>
            <StyleCode>{productDetails.styleCode}</StyleCode>
            <Name>{productDetails.name}</Name>
            <Price>€{selectedVariant?.price}</Price>
            <Description>{productDetails.metadata.shortDescription}</Description>

            <ColorSelection>
              <ColorPicker
                colors={productDetails.options.color}
                onSelect={(color) => dispatch(setColor(color))}
                selectedColor={color}
              />
            </ColorSelection>

            <FinishingSelection>
              <FinishingPicker 
                finishes={productDetails.options.finish}
                onSelect={(finish) => dispatch(setFinish(finish))}
                selectedFinish={finish}
                embroideryPriceDifference={
                  Number(embroideryVariant?.price - printVariant?.price).toFixed(2)
                }
              />
            </FinishingSelection>

            <SizeSelection>
              <SizePicker
                sizes={productDetails.options.size}
                onSelect={(size) => dispatch(setSize(size))}
                selectedSize={size}
              />
            </SizeSelection>

            <Row style={{ marginTop: '50px' }}>
              <Link href={`${products}/${productId}/customize`} passHref>
                <StyledButton 
                  type="primary" 
                  size="large" 
                  shape="round"
                  block
                >
                  Make a Design
                </StyledButton>
              </Link>
            </Row>

            {/* <Row style={{ marginTop: '10px' }}>
              <Button
                size="large"
                shape="circle"
                color={theme.palette.dsMagenta}
                style={{ 
                  height: '48px', 
                  width: '48px',
                  marginLeft: '10px'
                }}
                icon={<HeartOutlined style={{ fontSize: '22px' }} />}
              />
            </Row> */}
              
            <DetailsContainer>
              <DetailsList
                detailItems={productDetails.description.split('\n')}
              />
            </DetailsContainer>

            <AppearsInContainer>
              <AppearsInList />
            </AppearsInContainer>
          </Col> 
          <Col sm={{ span: 24, order: 1 }} md={{ span: 16, order: 2 }}>
            <ProductPreview
              images={selectedVariant?.images}
            />
          </Col>
      </Row>
    </Container>
    )
  }
};

export default Product;
