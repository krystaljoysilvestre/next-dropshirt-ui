import { StyledTag } from "./style";

const Tag = (props) => {
  return (
    <StyledTag {...props}>
      {props.children}
    </StyledTag>
  )
};

export default Tag;
