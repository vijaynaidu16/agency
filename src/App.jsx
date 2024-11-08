import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import Projects from "./components/Projects";
import AppLayout from "./layouts/AppLayout";


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
