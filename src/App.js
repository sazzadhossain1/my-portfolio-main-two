import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PracticeProblem from "./components/PracticeProblem/PracticeProblem";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

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
        {
          path: "/logo",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
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
