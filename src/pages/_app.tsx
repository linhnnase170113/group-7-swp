// 1. import `NextUIProvider` component
import "../styles/global.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";
import AuthProvider from "@/component/login/AuthContext";
import AlertPopup from "@/component/AlertPopup";
import { store } from "@/feature/ReduxStore";
import { Provider } from "react-redux";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: any) {
  return (
    
    // 2. Use at the root of your app
    <Provider store={store}>
      <NextSeo
        title="TiemHommie"
        description="Decoration and Gift"
        openGraph={{
          images: [
            {
              url: 'https://group-7-swp.vercel.app/assets/images/banner.jpg',
            },
          ],
        }}
      />
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <AlertPopup>
        <Component {...pageProps} />
        </AlertPopup>
      </AuthProvider>
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
