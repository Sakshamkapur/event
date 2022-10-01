import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../shared/styles";
import colors from "../data/colors";

const App = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={{ colors }}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
