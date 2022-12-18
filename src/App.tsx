import { Header } from "./components/Header"
import { Hello } from "./pages/Hello"

function App() {
  return (
    <div className="App">
			<Header />

			{/* Temporário. Será assim para testes, enquanto não implemento o React Router DOM */}
			<Hello />
    </div>
  )
}

export default App
