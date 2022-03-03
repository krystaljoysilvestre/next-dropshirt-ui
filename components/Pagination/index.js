import { StyledPagination } from './style';

const Pagination = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledPagination
      {...props}
      current={props.current}
      defaultPageSize={props.defaultPageSize}
      hideOnSinglePage
      onChange={(page, pageSize) => {
        props.setPage(page);
        props.setLimit(pageSize);
        scrollToTop();
      }}
      showTotal={(total, range) => `${range[1]} / ${total} items`}
      total={props.total}
      showSizeChanger={false}
    />
  );
};

export default Pagination;
