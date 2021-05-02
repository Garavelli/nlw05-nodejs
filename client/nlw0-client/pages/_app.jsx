/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Layout from '../components/Layout';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// App.propTypes = {
//   Component: PropTypes.func.isRequired,
//   pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
// };
