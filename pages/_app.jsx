import { Footer } from '../components/Footer';

// SIUX Studio @ CSS Extend
import '../public/siux/assets/css/siux.extend.css';
import '../public/siux/assets/css/siux.icon.remixicon.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
