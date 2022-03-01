import { SSRProvider } from '@react-aria/ssr';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { persistStore } from 'redux-persist';

import { Layout } from 'components';
import { store } from 'lib/store';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  
  return (
    <SSRProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SSRProvider>
  );
}
