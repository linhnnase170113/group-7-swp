// 1. import `NextUIProvider` component
import "../styles/global.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";
import AuthProvider from "@/component/login/AuthContext";
import AlertPopup from "@/component/AlertPopup";
import { store } from "@/feature/ReduxStore";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: any) {
  return (
    // 2. Use at the root of your app
    <Provider store={store}>
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
