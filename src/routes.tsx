import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Test = React.lazy(() => import("@/pages/auth/test"));
const App = React.lazy(() => import("@/App"));

const routes = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default routes;
