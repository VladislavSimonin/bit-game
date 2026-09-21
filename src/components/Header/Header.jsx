import { useEffect, useState } from 'react'
import '../Header/Header.css'

export default function Header() {

    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsMenuClicked(prev => !prev)
        setIsSearchClicked(false)
    }
    const toggleSearch = (e) => {
        e.stopPropagation()
        setIsSearchClicked(prev => !prev)
        setIsMenuClicked(false)
    }


    const closeMenu = () => {
        setIsMenuClicked(false)
    }
    const closeSearch = () => {
        setIsSearchClicked(false)
    }

    // закрытие выпадающего меню при клике вне его
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuClicked && !event.target.closest('.dropdown-menu') && !event.target.closest('.menu-button')) {
                closeMenu()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuClicked])


    return (
        <header>
            <a href='/bit-game/MainPage'>
                <img className='img-logo' src={`${import.meta.env.BASE_URL}android-chrome-192x192.png`} alt='bit-game' />
            </a>

            <nav className='nav-icons'>
                <button className='menu-button' onClick={toggleMenu}>
                    <img className='img-icons' src={`${import.meta.env.BASE_URL}align-justify_25181.png`} alt='menu' />
                </button>
                <button className='nav-search-button' onClick={toggleSearch}>
                    <img className='img-icons' src={`${import.meta.env.BASE_URL}search.png`} alt='search' />
                </button>
            </nav>

            <div className={`menu-overlay ${isMenuClicked ? 'open' : ''}`} onClick={closeMenu}></div>
            <nav className={`dropdown-menu ${isMenuClicked ? 'open' : ''}`}>
                <div className='menu-section'>
                    <a href='/bit-game/AlreadyPlayed' onClick={closeMenu}><img className='img-icons' src={`${import.meta.env.BASE_URL}playlist.png`} alt='my-games' />
                        <h4>Пройденные</h4>
                    </a>

                    <a href='/bit-game/WantToPlay' onClick={closeMenu}><img className='img-icons' src={`${import.meta.env.BASE_URL}heart.png`} alt='liked' />
                        <h4>Хочу пройти</h4>
                    </a>

                    <a href='/bit-game/AboutProject' onClick={closeMenu}><img className='img-icons' src={`${import.meta.env.BASE_URL}info.png`} alt='about' />
                        <h4>О проекте</h4>
                    </a>
                </div>
            </nav>


            <search className={`search-section ${isSearchClicked ? 'open' : ''}`}>
                <form action={'/search'} autoComplete='off' method='get'>
                    <input className='text-area' type='search' name='game_name'></input>
                    <button className='search-button' onClick={closeSearch}>
                        <img className='img-icons-small' src={`${import.meta.env.BASE_URL}search.png`} alt='search' />
                    </button>
                </form>
            </search>

        </header>
    )
}