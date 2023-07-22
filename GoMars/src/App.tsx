
import { QueryClient, QueryClientProvider } from "react-query";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalstyle";
import Nav from "./shared/route";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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

const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  > div > * {
    margin-top: 20px;
  }
`;
