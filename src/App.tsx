import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header"
import { About } from './pages/About'
import { Hello } from "./pages/Hello"

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Hello />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
    </div>
  )
}

export default App
