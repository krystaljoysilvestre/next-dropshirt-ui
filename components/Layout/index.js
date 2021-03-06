import Head from 'next/head';

import PublicLayout from './Public';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>DropShirt</title>
        <meta name="description" content="Generated by create next app" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <PublicLayout>{children}</PublicLayout>
    </>
  )
};

export default Layout;
