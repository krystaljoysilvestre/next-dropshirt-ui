import { StyledPagination } from './style';

const Pagination = (props) => {
  return (
    <StyledPagination
      {...props}
      defaultCurrent={1}
      defaultPageSize={props.defaultPageSize}
      onChange={(page, pageSize) => {
        props.setPage(page);
        props.setLimit(pageSize);
      }}
      pageSizeOptions={props.pageSizeOptions}
      showTotal={(total, range) => `${range[0]}-${range[1]} / ${total} items`}
      total={props.total}
    />
  );
};

export default Pagination;
