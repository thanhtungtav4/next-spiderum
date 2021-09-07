import { ThemeProvider } from 'next-themes';
import '../public/assets/css/style.css';
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }

export default MyApp