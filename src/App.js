import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Index from "./pages/Index";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Index />}>
          <Route path="customer" element={<Customer />} />
          <Route path="company" element={<Company />} />
          <Route path="home" element={<Home />} />
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
