import { useState } from 'react'
import Home from "./components/Home/Home";
import SecureScreen from "./components/SecureScreen/SecureScreen";
import BlockScreen from "./components/BlockScreen/BlockScreen";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoute() {

  const [socket, setSocket] = useState(null)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home setSocket={setSocket} />} />
        <Route path="/home" element={<Home setSocket={setSocket} />} />
        <Route path="/secure" element={<SecureScreen socket={socket}/>} />
        <Route path="/block" element={<BlockScreen socket={socket}/>} />
        <Route component={NotFound} /> {/* Rota de fallback para 404 */}
      </Routes>
    </Router>
  );
}

export default AppRoute;
