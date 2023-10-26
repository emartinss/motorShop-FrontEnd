import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/RegisterPage/registerPage";
import HomePage from "./pages/HomePage/homePage";
import ProductDetail from "./pages/ProductDetail/productDetail";
import UserPage from "./pages/UserPage/userPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/users/:id" element={<UserPage />}></Route>
    </Routes>
  );
};

export default Router;
