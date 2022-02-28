import { StyledButtonGroup } from "./style";

const ButtonGroup = (props) => {
  return (
    <StyledButtonGroup {...props}>
      {props.children}
    </StyledButtonGroup>
  )
};

export default ButtonGroup;
