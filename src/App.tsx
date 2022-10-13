import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostsContextProvider } from "./context/PostsContext";
import { Router } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App(){

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextProvider>
          <Router />
        </PostsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

