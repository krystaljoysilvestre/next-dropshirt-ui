import { StyledPagination } from './style';

const Pagination = (props) => {
  return (
    <StyledPagination
      {...props}
      current={props.current}
      defaultPageSize={props.defaultPageSize}
      hideOnSinglePage={true}
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
