import { Suspense, useEffect } from "react";
import PokemonExample from "./components/PokemonDasboard";
import {
  RequireAuth,
  rootloader,
  RoutingErrorPage,
  UnauthorizedPage,
} from "./router";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import PokemonDashboard from "./components/PokemonDasboard";
import PokemonDetails from "./components/PokemonDetails";

function Root() {
  return <Outlet />;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PokemonDashboard />,
      errorElement: <RoutingErrorPage />,
      loader: rootloader,
      children: [
        {
          path: "details",
          element: (
            <RequireAuth>
              <Suspense fallback={<div>Lazy Loading...</div>}>
                <PokemonDetails />
              </Suspense>
            </RequireAuth>
          ),
        },
      ],
    },
    {
      // use UnauthorizedScreen
      path: "/unauthorized",
      element: <UnauthorizedPage />,
    },
  ],
  {
    // options to migrate from react router dom v6 to v7
  },
);

function App() {
  useEffect(() => {
    console.log("initiated...");
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
