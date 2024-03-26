import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";
import HomePage from "./pages/HomePage/Homepage"; // Correction de l'importation
import About from "./pages/AboutPage/Aboutpage.component";
import LogementPage from "./pages/Logementpage/logementpage";
import Error404 from "./pages/ErrorPage/Errorpage";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<LogementPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
