import { SSRProvider } from '@react-aria/ssr';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

import { Layout } from 'components';

import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SSRProvider>
  );
}
