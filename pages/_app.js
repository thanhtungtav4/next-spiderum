import { ThemeProvider } from 'next-themes';
import '../public/assets/css/style.css';
import Layout from "../components/layout/layout";
import AuthProvider from "../services/AuthProvider";

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </AuthProvider>
      </ThemeProvider>
    )
  }

export default MyApp