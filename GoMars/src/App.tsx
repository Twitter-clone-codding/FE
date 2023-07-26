import { QueryClient, QueryClientProvider } from "react-query";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import theme from "./styles/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalstyle";
import Nav from "./shared/route";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
