import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Catalog from "@/pages/Catalog/Catalog";
import Header from "@/components/Header/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
