import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PracticeProblem from "./components/PracticeProblem/PracticeProblem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/practiceProblem",
          element: <PracticeProblem></PracticeProblem>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
