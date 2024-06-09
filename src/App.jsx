//pages
import ScrollToTop from "./components/ScrollToTop";
import Authorization from "./pages/Authorization";
import CalculatorPage from "./pages/CalculatorPage";
import Catalog from "./pages/Catalog";
import Favourites from "./pages/Favourites";
import InfoPage from "./pages/InfoPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/flats/:id" element={<InfoPage />} />
          <Route path="/calculatorPage" element={<CalculatorPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
