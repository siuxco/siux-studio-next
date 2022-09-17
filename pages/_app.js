import Head from 'next/head'
import { Footer } from '../components/Footer';

// SIUX Studio @ CSS Extend
import '../public/siux/assets/css/siux.extend.css';
import '../public/siux/assets/css/siux.icon.remixicon.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SIUX Studio + Next.js Integration</title>
        {/* Replace with your brand configuration */}
        <link href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.css" type="text/css" rel="stylesheet" />
        <link href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.responsive.css" type="text/css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900|Overpass+Mono:400" type="text/css" rel="stylesheet" />
        {/* Replace with your brand configuration */}
        <meta name="description" content="SIUX Studio + Next.js Integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
