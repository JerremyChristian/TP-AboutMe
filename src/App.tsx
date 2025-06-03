import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './page/AboutMe'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename="/TP-AboutMe">
        <div>
          <Routes>
            <Route path="/" element={<AboutMe/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
