import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout() {
    return(
        <>
            <Header />
            <main>
                <Outlet /> {/* Сюда подставится текущая страница */}
            </main>
            <Footer />
        </>
    )
}

