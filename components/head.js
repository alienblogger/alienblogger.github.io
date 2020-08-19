import _Head from 'next/head';

const Head = ({ children }) => {
  return (
    <>
      <_Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="https://reaper.im/logo.svg" />
        {children}
      </_Head>
    </>
  );
};

export default Head;
