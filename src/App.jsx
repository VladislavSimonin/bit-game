import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'
import AboutProject from './pages/AboutProject/AboutProject.jsx'
import AlreadyPlayed from './pages/AlreadyPlayed/AlreadyPlayed.jsx'
import WantToPlay from './pages/WantToPlay/WantToPlay.jsx'
import GamePage from './pages/GamePage/GamePage.jsx'


export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          {/* Страницы с Header и Footer */}
          <Route element={<Layout />}>
              <Route path='/' element={<MainPage />} />
              <Route path='/GamePage/:id' element={<GamePage />} />
              <Route path='/AboutProject' element={<AboutProject />} />
              <Route path='/AlreadyPlayed' element={<AlreadyPlayed />} />
              <Route path='/WantToPlay' element={<WantToPlay />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}


