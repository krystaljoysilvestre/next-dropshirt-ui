import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Image } from 'antd';

import FabricJSCanvas from '../FabricJSCanvas';
import useFabricJSEditor from 'lib/hooks/useFabricJSEditor';

import { Container, Background, Loader } from './style';

const BackCanvas = ({ image, isEditable, visible }) => {
  const { onReady, showBoundingBox } = useFabricJSEditor();

  const [isCanvasLoading, setIsCanvasLoading] = useState(true);

  useEffect(() => {
    setIsCanvasLoading(true);
  }, [image]);

  return (
    <Container visible={visible}>
      {isCanvasLoading && (
        <Loader>
          <LoadingOutlined />
          Loading...
        </Loader>
      )}

      <Background hidden={isCanvasLoading}>
        {isEditable && (
          <div 
            style={{
              border: `1px solid ${showBoundingBox ? '#fff' : 'transparent'}`,
              position: 'absolute',
              zIndex: 1,
              width: '42%',
              height: '40%',
              left: '29%',
              top: '39%'
            }}
          >
            <FabricJSCanvas onReady={onReady} />
          </div>
        )}

        <div>
          <Image 
            alt="back-canvas"
            src={image}
            preview={false}
            onLoad={() => setIsCanvasLoading(false)}
          />
        </div>
      </Background>
    </Container>
  )
};

export default BackCanvas;
