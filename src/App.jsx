import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Home, Resume, Projects, Error } from "./pages";
import Wrapper from "./assets/wrappers/App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
