import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Empty } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { useGetProductByIdQuery } from "lib/productApi";
import { setId, setColor, setFinish, setSize, reset } from "lib/selectedProductSlice";
import { setOrientation, setFrontCanvasObjects, setBackCanvasObjects } from "lib/editorSlice";
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
  Design,
  StyledAlert
} from './style';

const CustomizeProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const productId = router.query?.id;

  const { isLoading, currentData } = useGetProductByIdQuery(productId);
  const productDetails = currentData?.data;

  const { color, finish, size, id } = useSelector((state) => state.selectedProduct);
  const hasFrontDesigns = useSelector((state) => state.editor.front.canvas.objects.length > 0);
  const hasBackDesigns = useSelector((state) => state.editor.back.canvas.objects.length > 0);

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
    window.onbeforeunload = function() {
      return "Are you sure you want to leave? The changes you made will be lost"
    }

    return () => {
      dispatch(setFrontCanvasObjects([]));
      dispatch(setBackCanvasObjects([]));
    }
  }, [dispatch]);

  useEffect(() => {    
    if (productId && productId !== id) {
      dispatch(reset());
      dispatch(setId(productId));
    }
    initializeSelectedProduct();
  }, [dispatch, productId, id, initializeSelectedProduct]);

  useEffect(() => {
    let price = Number(selectedVariant?.price).toFixed(2);
    if (hasFrontDesigns && hasBackDesigns) {
      price = +price + 2;
      setAlertMessage("Additional design added. Price updated.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setTotalPrice(price);
  }, [hasFrontDesigns, hasBackDesigns, selectedVariant]);

  const [expandedUploadContainers, setExpandedUploadContainers] = useState(['Front']);
  const [alertMessage, setAlertMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // dismiss alert
  if (alertMessage) {
    setTimeout(() => setAlertMessage(''), 2000);
  }

  if (isLoading || !productId) {
    return <Loader height="85vh" tip="Loading..." />;
  } else if (!isLoading && !productDetails && productId) {
    return (
      <Row style={{ height: '85vh' }} justify="center" align="middle">
        <Empty description={`No product found for "${productId}"`} image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Row>
    );
  } else if (productDetails) {
    return (
      <>
        <Container>
          {/* <Breadcrumb items={['Men', 'Shirts + Sweatshirts', 'Oversized', 'Freestyler']} /> */}

          <Row>
            <Col sm={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }} style={{ paddingRight: '30px' }}>
              <StyleCode>{productDetails.styleCode}</StyleCode>
              <Name>{productDetails.name}</Name>
              <Price highlight={alertMessage}>€{totalPrice}</Price>
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
                    onChange={(img) => {
                      if (img) {
                        dispatch(setFrontCanvasObjects([{ type: 'image', url: img }]));
                      } else {
                        dispatch(setFrontCanvasObjects([]));
                      }
                      dispatch(setOrientation("Front"));
                    }}
                    onRemove={() => setAlertMessage("Image deleted")}
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
                    onChange={(img) => {
                      if (img) {
                        dispatch(setBackCanvasObjects([{ type: 'image', url: img }]));
                      } else {
                        dispatch(setBackCanvasObjects([]));
                      }
                      dispatch(setOrientation("Back"));
                    }}
                    onRemove={() => setAlertMessage("Image deleted")}
                  />
                </Design>
              </DesignsContainer>
            </Col> 
            <Col sm={{ span: 24, order: 1 }} md={{ span: 16, order: 2 }}>
              <ProductPreview
                id="product-preview"
                images={selectedVariant?.images}
                isEditable
              />
            </Col>
          </Row>
        </Container>

        {alertMessage && (
          <StyledAlert 
            message={
              <>
                <ExclamationCircleFilled />
                {alertMessage}
              </>
            }
            type="success"
          />
        )}
      </>
    )
  }
};

export default CustomizeProduct;
