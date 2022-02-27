import { Header, Footer } from "components";

import { Layout, Content } from './style';

const PublicLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
};

export default PublicLayout;
