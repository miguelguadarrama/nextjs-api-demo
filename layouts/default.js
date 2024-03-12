import Head from "next/head";

const DefaultLayout = ({ children, container = 'container' }) => {
  return (
    <div>
      <Head>
        <title>Demo Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={container}>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;