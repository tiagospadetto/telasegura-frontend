import Home from "./components/Home/Home";
import SecureScreen from "./components/SecureScreen/SecureScreen";
import BlockScreen from "./components/BlockScreen/BlockScreen";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/secure" element={<SecureScreen />} />
        <Route path="/block" element={<BlockScreen />} />
        <Route component={NotFound} /> {/* Rota de fallback para 404 */}
      </Routes>
    </Router>
  );
}

export default AppRoute;
