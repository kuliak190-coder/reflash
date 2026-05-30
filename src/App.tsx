import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeV1 from "./pages/HomeV1";
import HomeV2 from "./pages/HomeV2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeV1 />} />
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
