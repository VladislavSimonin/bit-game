import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../Layout/Layout.css'

export default function Layout() {
    return(
        <>
            <Header />
            <main className='main-page'>
                <Outlet /> {/* Сюда подставится текущая страница */}
            </main>
            <Footer />
        </>
    )
}

