import { Wrapper, RadioButton, Inner, Text } from './style';

const Radio = ({ children, checked, onChange, block, color }) => (
  <Wrapper onClick={onChange} block={block}>
    <RadioButton color={color}>
      {checked && <Inner />}
    </RadioButton>
    <Text>{children}</Text>
  </Wrapper>
);

export default Radio;
