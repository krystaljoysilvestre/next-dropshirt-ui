import { Label, SizeGroup, Size } from "./style";

const SizePicker = ({ sizes, onSelect, selectedSize }) => {
  return (
    <>
      <Label>
        <b>Size</b>  
      </Label>

      <SizeGroup>
        {sizes.map((size, index) => (
          <Size 
            key={index} 
            onClick={() => onSelect(size)}
            selected={size === selectedSize}
          >
            {size}
          </Size>
        ))}
      </SizeGroup>
    </>
  )
};

export default SizePicker;
