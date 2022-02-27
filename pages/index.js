import { Container } from './style';

import { Search, Filters, Gallery, Pagination } from 'components';

const Catalog = () => {
  return (
    <Container>
      <Search label="All Products" />
      <Filters />
      <Gallery loading />
      <Pagination />
    </Container>
  )
};

export default Catalog;
