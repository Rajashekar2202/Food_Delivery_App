import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  /* OPEN LOGIN */
  const openLoginPopup = useCallback(() => {
    setShowLogin(true);
  }, []);

  /* CLOSE LOGIN */
  const closeLoginPopup = useCallback(() => {
    setShowLogin(false);
  }, []);

  return (
    <>
      {/* LOGIN MODAL */}
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} onClose={closeLoginPopup} />
      )}

      {/* APP LAYOUT */}
      <div className="app">
        {/* NAVBAR */}
        <Navbar setShowLogin={openLoginPopup} />

        {/* PAGE CONTENT */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
