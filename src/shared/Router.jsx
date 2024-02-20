import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Auth from "../pages/Auth";
import MyPage from "../pages/MyPage";
import Protected from "./Protected";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="/profile" element={<MyPage />} />
          </Route>
          <Route path="*" element={<Navigate raplace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
