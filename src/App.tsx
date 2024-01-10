import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Wrapper } from "./App.styles";
import HomePage from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Details from "./pages/details/details";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/countries/details/:code",
    element: <Details />,
    errorElement: <NotFound />,
  },
  { path: "*", element: <NotFound /> },
]);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: true,
      retry: false,
    },
  },
});

const App: React.FC = () => (
  <QueryClientProvider client={client}>
    <Wrapper>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Wrapper>
  </QueryClientProvider>
);

export default App;
