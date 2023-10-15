import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
};

export default Router;
