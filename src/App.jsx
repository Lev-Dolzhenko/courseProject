//pages
import ScrollToTop from "./components/ScrollToTop";
import CalculatorPage from "./pages/CalculatorPage";
import InfoPage from "./pages/InfoPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/calculatorPage" element={<CalculatorPage />} />
          <Route path="/infoPage" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
