import * as React from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

const HomePage = React.lazy(() => import("@/pages/Home"));
const ShipsPage = React.lazy(() => import("@/pages/Ships"));
const EquipmentsPage = React.lazy(() => import("@/pages/Equipments"));

const App = () => {
  return (
    <Box sx={{ maxWidth: "xl" }}>
      <Header />
      <Box sx={{ p: "10px" }}>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ships" element={<ShipsPage />} />
            <Route path="/equipments" element={<EquipmentsPage />} />
          </Routes>
        </React.Suspense>
      </Box>
    </Box>
  );
};

export default App;
