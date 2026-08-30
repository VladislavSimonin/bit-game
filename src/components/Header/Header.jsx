import { useEffect, useState } from 'react'
import '../Header/Header.css'

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsMenuOpen(prev => !prev)
    }
    

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // закрытие меню при клике вне его
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.dropdown-menu') && !event.target.closest('.menu-button')) {
                closeMenu()
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])


    return (
        <header>
            <a href='/MainPage'>
                <img className='img-logo' src='/public/android-chrome-192x192.png' />
            </a>

            <nav className='nav-icons'>
                <button className='menu-button' onClick={toggleMenu}>
                    <img className='img-icons' src='/public/align-justify_25181.png' alt='menu' />
                </button>
                <button className='searc-button'>
                    <img className='img-icons' src='/public/search.png' alt='search' />
                </button>
            </nav>

                <>
                    <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
                    <nav className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                        <div className='menu-section'>
                            <a href='/AlreadyPlayed' onClick={closeMenu}><img className='img-icons' src='/public/playlist.png' alt='my-games' />
                                <h4>Пройденные</h4>
                            </a>

                            <a href='/WantToPlay' onClick={closeMenu}><img className='img-icons' src='/public/heart.png' alt='liked' />
                                <h4>Хочу пройти</h4>
                            </a>

                            <a href='/AboutProject' onClick={closeMenu}><img className='img-icons' src='/public/info.png' alt='about' />
                                <h4>О проекте</h4>
                            </a>
                        </div>
                    </nav>
                </>
        </header>
    )
}