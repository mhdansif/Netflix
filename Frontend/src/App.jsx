import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./component/Loginpage";
import Successfull from "./pages/Successfull";
import Failed from "./pages/Failed";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ minHeight: "100vh", paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/success" element={<Successfull />} />
          <Route path="/failed" element={<Failed />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
