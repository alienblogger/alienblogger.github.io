import getWallpapers from 'lib/get-wallpapers';
import Layout from 'components/Layout';
import Router from 'next/router';
import Spacer from 'components/Spacer';
import Head from 'components/head';

const Blog = ({ walls }) => {
  return (
    <>
      <Head>
        <title>Wallpapers | Reaper</title>
      </Head>
      <Layout>
        <div className="container">
          <ul className="card-border min-width-150-px">
            {walls.map(({ name, link }, index) => {
              return (
                <li key={index}>
                  <a
                    className="flex flex-col just-center align-center"
                    target="_blank"
                    href={`/wallpapers/${link}`}
                  >
                    <img src={`/wallpapers/${link}`} />
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <Spacer y={1}></Spacer>
          <button
            className="margin-top-sm  align-start button black outline-btn"
            onClick={() => Router.push('/')}
          >
            Back
          </button>
          <Spacer y={2}></Spacer>
        </div>
      </Layout>
      <style jsx>{`
        img {
          height: 100px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  const walls = await getWallpapers();
  return {
    props: {
      walls,
    },
  };
}

export default Blog;
