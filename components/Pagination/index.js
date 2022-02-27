import { StyledPagination } from "./style";

const Pagination = (props) => {
  return (
    <StyledPagination {...props} defaultCurrent={1} total={50} />
  )
};

export default Pagination;
