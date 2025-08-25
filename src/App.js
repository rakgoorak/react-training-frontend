import logo from "./logo.svg";
import "./App.css";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
