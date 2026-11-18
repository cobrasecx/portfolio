import { Routes, Route } from 'react-router-dom'
import * as Components from './index/indexComponents'
import { NavBar } from './components/container/NavBar'
import { Footer } from './components/container/Footer'

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <NavBar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Components.Home />} />

          <Route path="/contact" element={<Components.Contact />} />

          <Route path="/about" element={<Components.About />} />

          <Route
            path="/certifications"
            element={<Components.Certifications />}
          />

          <Route path="/donations" element={<Components.Donations />} />

          <Route path="/news" element={<Components.News />} />

          <Route path="/writeups" element={<Components.WriteUps />} />

          <Route path="*" element={<Components.Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
