import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Empty } from 'antd';

import { useGetProductByIdQuery } from "lib/productApi";
import { setId, setColor, setFinish, setSize, reset } from "lib/selectedProductSlice";
import useFilteredVariants from "lib/hooks/useFilteredVariants";

import { 
  Breadcrumb, 
  ColorPicker, 
  FinishingPicker, 
  SizePicker,
  ProductPreview,
  Checkbox,
  ImageUpload,
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
  DesignsContainer,
  Design
} from './style';

const CustomizeProduct = () => {
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

  const [expandedUploadContainers, setExpandedUploadContainers] = useState(['Front']);

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

            <DesignsContainer 
              bordered={false} 
              defaultActiveKey={['Front']}
              onChange={(keys) => setExpandedUploadContainers(keys)}
            >
              <Design
                key="Front" 
                header={
                  <Checkbox checked={expandedUploadContainers.includes('Front')}>
                    <b>Front Design</b>
                  </Checkbox>
                }
              >
                <ImageUpload
                  showDPI
                  onChange={(img) => console.log("IMG", img)}
                />
              </Design>
              <Design 
                key="Back" 
                header={
                  <Checkbox checked={expandedUploadContainers.includes('Back')}>
                    <b>Back Design</b>
                  </Checkbox>
                }
              >
                <ImageUpload
                  showDPI
                  onChange={(img) => console.log("IMG", img)}
                />
              </Design>
            </DesignsContainer>
          </Col> 
          <Col sm={{ span: 24, order: 1 }} md={{ span: 16, order: 2 }}>
            <ProductPreview
              images={selectedVariant?.images}
              isEditable
            />
          </Col>
        </Row>
      </Container>
    )
  }
};

export default CustomizeProduct;
