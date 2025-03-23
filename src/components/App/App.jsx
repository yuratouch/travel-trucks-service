import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Header from "@/components/Header/Header";
import { Suspense, lazy } from "react";
import CamperDetailsPage from "@/pages/CamperDetailsPage/CamperDetailsPage";
import Loader from "@/components/Loader/Loader";
import CamperFeatures from "@/components/CamperDetails/CamperFeatures/CamperFeatures";
import CamperReviews from "@/components/CamperDetails/CamperReviews/CamperReviews";

const Catalog = lazy(() => import("@/pages/Catalog/Catalog"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="/catalog/:truckId" element={<CamperDetailsPage />}>
            <Route index element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
