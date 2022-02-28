import { useState } from 'react';
import { Orientation, FrontCanvas, BackCanvas } from "./components";

import { 
  Wrapper, 
  CanvasTemplate, 
  Topbar,
  CanvasContainer 
} from "./style";

const ProductPreview = ({ images, isEditable }) => {
  const [selectedOrientation, setSelectedOrientation] = useState('Front');

  return (
    <Wrapper>
      <CanvasTemplate>
        <Topbar>
          <Orientation
            selected={selectedOrientation} 
            onSelect={(orientation) => setSelectedOrientation(orientation)}
          />
        </Topbar>

        <CanvasContainer>
          <FrontCanvas visible={selectedOrientation === 'Front'} isEditable={isEditable} image={images?.length > 0 ? images[0] : ''} />
          <BackCanvas visible={selectedOrientation === 'Back'} isEditable={isEditable} image={images?.length > 0 ? images[1] : ''} />
        </CanvasContainer>
      </CanvasTemplate>
    </Wrapper>
  )
};

export default ProductPreview;
