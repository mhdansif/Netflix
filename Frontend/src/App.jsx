import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./component/Loginpage";
import Successfull from "./pages/Successfull";
import Failed from "./pages/Failed";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/success" element={<Successfull />} />
            <Route path="/failed" element={<Failed />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
