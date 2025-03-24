import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "@/pages/Home/Home";
import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";
import CamperFeatures from "@/components/CamperDetails/CamperFeatures/CamperFeatures";
import CamperReviews from "@/components/CamperDetails/CamperReviews/CamperReviews";

const Catalog = lazy(() => import("@/pages/Catalog/Catalog"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));
const CamperDetailsPage = lazy(() =>
  import("@/pages/CamperDetailsPage/CamperDetailsPage")
);

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
