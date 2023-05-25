import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Landing/landing";
import Choosing from "./pages/Choosing/choosing";
import Booking from "./pages/Booking/booking";
import NavLinks from "./shared/components/NavLinks";
import Footer from "./shared/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth/Auth";
import { AuthContext } from "./shared/contexts/auth-context";
import { useState, useEffect } from "react";
import Record from "./pages/Record/record";
import ScrollToTop from "./shared/components/ScrollToTop";

import "./App.css";

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Cancel the event
      event.preventDefault();
      return (event.returnValue = "Are you sure you want to leave this site?");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
  };

  const setUsername = (username: string) => {
    setLoggedInUser(username);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    loggedInUser: loggedInUser,
    login: loginHandler,
    logout: logoutHandler,
    setLoggedInUser: setUsername,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <ScrollToTop />
        <NavLinks />
        <Routes>
          <Route path="/landing" element={<Home />}></Route>
          <Route path="/choosing" element={<Choosing />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
