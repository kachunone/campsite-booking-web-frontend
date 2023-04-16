import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Landing/landing";
import Choosing from "./pages/Choosing/choosing";
import Booking from "./pages/Booking/booking";
import NavLinks from "./shared/components/NavLinks";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavLinks />
      <Routes>
        <Route path="/landing" element={<Home />}></Route>
        <Route path="/choosing" element={<Choosing />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
