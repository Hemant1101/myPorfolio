import './App.css'
import MainBody from './MainBody'
import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <LeftBar />
      <MainBody />
    </div>
  )
}

export default App
