import { SSRProvider } from '@react-aria/ssr';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Layout } from 'components';
import { store } from 'lib/store';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </SSRProvider>
  );
}
