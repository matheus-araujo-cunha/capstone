import { ToastContainer } from "react-toastify";
import { Routes } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
