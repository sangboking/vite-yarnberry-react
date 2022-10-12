import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Test from "./test";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
