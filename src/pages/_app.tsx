// 1. import `NextUIProvider` component
import "../styles/global.scss"
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/Theme';


function MyApp({ Component, pageProps }: any) {
  return (
    // 2. Use at the root of your app
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
