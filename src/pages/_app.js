// 1. import `NextUIProvider` component
import "../styles/global.scss"
function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
      <Component {...pageProps} />
  );
}

export default MyApp;
