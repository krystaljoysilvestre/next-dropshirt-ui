import { useSelector, useDispatch } from 'react-redux';

import { setOrientation } from "lib/editorSlice";
import { Orientation, FrontCanvas, BackCanvas } from "./components";

import { 
  Wrapper, 
  Topbar,
  CanvasContainer 
} from "./style";

const ProductPreview = ({ images, isEditable }) => {
  const dispatch = useDispatch();
  const { orientation } = useSelector((state) => state.editor);

  return (
    <Wrapper id="product-preview">
      <Topbar>
        <Orientation
          selected={orientation} 
          onSelect={(orientation) => dispatch(setOrientation(orientation))}
        />
      </Topbar>

      <CanvasContainer>
        <FrontCanvas 
          visible={orientation === 'Front'} 
          isEditable={isEditable} 
          image={images?.length > 0 ? images[0] : ''} 
        />
        <BackCanvas 
          visible={orientation === 'Back'} 
          isEditable={isEditable} 
          image={images?.length > 0 ? images[1] : ''} 
        />
      </CanvasContainer>
    </Wrapper>
  )
};

export default ProductPreview;
