import { Routes, Route } from "react-router-dom";
import * as Components from "./index/indexComponents";
import { NavBar } from "./components/container/NavBar";

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Components.Home />} />

        <Route path="/contact" element={<Components.Contact />} />

        <Route path="/about" element={<Components.About />} />

        <Route path="/achievements" element={<Components.Achievements />} />

        <Route path="*" element={<Components.Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
