import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Header from "@/components/Header/Header";
import { Suspense, lazy } from "react";

const Catalog = lazy(() => import("@/pages/Catalog/Catalog"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
