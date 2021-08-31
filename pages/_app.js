import { ThemeProvider } from 'next-themes'
import '../public/assets/css/style.css'

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

export default MyApp