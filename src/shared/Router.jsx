import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "@pages/Home";
import Detail from "@pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<Navigate raplace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
