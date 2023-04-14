import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/board/:id" element={<BoardPage/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default App
