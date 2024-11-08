import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Course from "./components/Course.jsx";
import Projects from "./components/Projects.jsx";
import AppLayout from "./layouts/AppLayout.jsx";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },

    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
