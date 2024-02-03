import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { store } from "./features/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
