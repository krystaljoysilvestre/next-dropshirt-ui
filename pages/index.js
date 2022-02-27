import { Col } from 'antd';
import { useState } from 'react';
import { Card, Filters, Gallery, Pagination, Search } from 'components';
import { useGetProductListQuery } from 'lib/productApi';

import { Container } from './style';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(48);
  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductListQuery({ page, limit });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!products?.data) {
    return <div>No products :(</div>;
  }

  const productList = products.data.map((product) => (
    <Col key={product.productId} lg={8} md={12} xs={24}>
      <Card item={product} loading={isFetching} />
    </Col>
  ));

  return (
    <Container>
      <Search label="All Products" />
      <Filters />
      <Gallery items={productList} />
      <Pagination
        setPage={setPage}
        setLimit={setLimit}
        defaultPageSize={limit}
        pageSizeOptions={[24, 48, 96]}
        total={products.metadata?.pagination.totalRecords}
      />
    </Container>
  );
};

export default Catalog;
