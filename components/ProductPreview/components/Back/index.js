import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import FabricJSCanvas from '../FabricJSCanvas';
import useFabricJSEditor from 'lib/hooks/useFabricJSEditor';

import { Container, Background, ImageContainer, Loader, DesignArea } from './style';

const BackCanvas = ({ image, visible, isEditable }) => {
  const { onReady, showBoundingBox, editor } = useFabricJSEditor();

  const backCanvas = useSelector((state) => state.editor.back.canvas);
  const { objects } = backCanvas;

  const [isCanvasLoading, setIsCanvasLoading] = useState(true);

  useEffect(() => {
    setIsCanvasLoading(true);
  }, [image]);

  useEffect(() => {
    if (objects.length > 0) {
      editor?.clearCanvas().then(() => {
        objects.map((object) => {
          if (object.type === 'image') {
            editor?.addImgObject(object.url);
          }
        });
      });
    } else {
      editor?.clearCanvas()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objects]);

  return (
    <Container visible={visible}>
      {isCanvasLoading && (
        <Loader>
          <LoadingOutlined />
          Loading...
        </Loader>
      )}

      <Background>
        {isEditable && (
          <DesignArea 
            showBoundingBox={showBoundingBox}
            style={{
              width: '34.5%',
              height: '54%',
              left: '33%',
              top: '25%'
            }}
          >
            <FabricJSCanvas onReady={onReady} />
          </DesignArea>
        )}

        <ImageContainer hidden={isCanvasLoading}>
          <Image 
            alt="back-canvas"
            src={image}
            preview={false}
            onLoad={() => setIsCanvasLoading(false)}
          />
        </ImageContainer>
      </Background>
    </Container>
  )
};

export default BackCanvas;
