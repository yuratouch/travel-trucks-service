import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Header from "@/components/Header/Header";
import { Suspense, lazy } from "react";
import TruckDetailsPage from "@/pages/TruckDetailsPage/TruckDetailsPage";
import Loader from "@/components/Loader/Loader";

const Catalog = lazy(() => import("@/pages/Catalog/Catalog"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="/catalog/:truckId"
            element={<TruckDetailsPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
