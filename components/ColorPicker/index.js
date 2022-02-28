import hexRgb from "hex-rgb";
import { Tooltip } from "antd";

import theme from "styles/theme";
import { Label, Radio, Inner, Container } from "./style";

const ColorPicker = ({ colors, selectedColor, onSelect }) => {
  const isLightColor = (hex) => {
    const RGB = hexRgb(hex);
    const { red, green, blue } = RGB;
    const colorValue = red + green + blue;
    return colorValue > 700;
  };


  return (
    <>
      <Label>
        <b>Color</b>
        {selectedColor.name}
      </Label>

      <Container>
        {colors?.map((color, index) => (
          <Tooltip
            key={index} 
            title={color.name} 
            color={color.hex}
            overlayInnerStyle={{
              fontSize: '12px',
              color: `${isLightColor(color.hex) ? theme.text.default : theme.text.light}`
            }}
          >
            <Radio
              onClick={() => onSelect(color)}
              color={color.hex}
              isLightColor={isLightColor(color.hex)}
              tooltip={color.name}
            >
              {selectedColor.name === color.name && (
                <Inner 
                  style={{
                    background: `${isLightColor(color.hex) ? theme.text.gray : theme.text.light}`
                  }}
                />
              )}
            </Radio>
          </Tooltip>
        ))}
      </Container>
    </>
  )
};

export default ColorPicker;
