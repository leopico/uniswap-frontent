import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter";

function App() {
  return <RouterProvider router={MainRouter} />;
}

export default App;
