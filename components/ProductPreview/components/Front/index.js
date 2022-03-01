import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Image } from 'antd';

import FabricJSCanvas from '../FabricJSCanvas';
import useFabricJSEditor from 'lib/hooks/useFabricJSEditor';

import { Container, Background, Loader } from './style';

const FrontCanvas = ({ image, isEditable, visible }) => {
  const { onReady, showBoundingBox } = useFabricJSEditor();
  // // const { editorContext } = useContext(EditorContext);

  const [isCanvasLoading, setIsCanvasLoading] = useState(true);

  useEffect(() => {
    setIsCanvasLoading(true);
  }, [image]);
  
  // const canvasObjects = editorContext.front.canvas.objects;

  // useEffect(() => {
  //   if (canvasObjects.length > 0) {
  //     editor?.clearCanvas().then(() => {
  //       canvasObjects.map((object) => {
  //         if (object.type === 'image') {
  //           editor?.addImgObject(object.url);
  //         }
  //       });
  //     });
  //   } else {
  //     editor?.clearCanvas()
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [canvasObjects]);

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
            alt="front-canvas"
            src={image}
            preview={false}
            onLoad={() => setIsCanvasLoading(false)}
          />
        </div>
      </Background>
    </Container>
  )
};

export default FrontCanvas;
