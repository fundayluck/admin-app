import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
