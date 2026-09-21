import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import MainPage from './components/MainPage/MainPage'
import AboutProject from './components/AboutProject/AboutProject'
import AlreadyPlayed from './components/AlreadyPlayed/AlreadyPlayed'
import WantToPlay from './components/WantToPlay/WantToPlay'


export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          {/* Страницы с Header и Footer */}
          <Route element={<Layout />}>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/GamePage/:id' element={<GamePage />}></Route>
              <Route path='/AboutProject' element={<AboutProject />}></Route>
              <Route path='/AlreadyPlayed' element={<AlreadyPlayed />}></Route>
              <Route path='/WantToPlay' element={<WantToPlay />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}


