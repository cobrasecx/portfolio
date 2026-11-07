import { Routes, Route } from 'react-router-dom'
import * as Components from './index/indexComponents'
import { NavBar } from './components/container/NavBar'

function App() {
  return (
    <div className="App min-vh-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Components.Home />} />

        <Route path="/contact" element={<Components.Contact />} />

        <Route path="/about" element={<Components.About />} />

        <Route path="/certifications" element={<Components.Certifications />} />

        <Route path="/donations" element={<Components.Donations />} />

        <Route path="/news" element={<Components.News />} />

        <Route path="*" element={<Components.Error404 />} />
      </Routes>
    </div>
  )
}

export default App
