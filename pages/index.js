import { Row, Col, Empty } from 'antd';
import { useState } from 'react';
import { Card, Filters, Gallery, Pagination, Search, Loader } from 'components';
import { useGetProductListQuery } from 'lib/productApi';

import { Container } from './style';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(48);
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductListQuery({ page, limit, searchTerm });

  const pageSizeOptions = [24, 48, 96];
  const total = products?.metadata?.pagination.totalRecords;

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const searchResultsString = total
    ? `${total} Result/s for '${searchTerm}'`
    : 'No items found for this search';

  const productList = products?.data.map((product) => (
    <Col key={product.productId} lg={8} md={12} xs={24}>
      <Card item={product} loading={isFetching} />
    </Col>
  ));

  if (isLoading) {
    return <Loader height="85vh" tip="Loading..." />;
  } else if (!isLoading && !products?.data) {
    return (
      <Row style={{ height: '85vh' }} justify="center" align="middle">
        <Empty description="No products found" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Row>
    );
  } else if (products?.data) {
    return (
      <Container>
        <Search handleSearch={handleSearch} label="All Products" />
        <Filters />
        {!isFetching && searchTerm && searchResultsString}
        <Gallery items={productList} />
        <Pagination
          setPage={setPage}
          setLimit={setLimit}
          current={page}
          defaultPageSize={limit}
          pageSizeOptions={pageSizeOptions}
          total={total}
        />
      </Container>
    );
  }
};

export default Catalog;
