import '../Header/Header.css'

export default function Header() {
    return (
        <header>
            <img className='img-logo' src='/public/android-chrome-192x192.png' />
            
            <div className='nav-icons'>
                <img className='img-icons' src='/public/search.png' />
                <img className='img-icons' src='/public/align-justify_25181.png' />
            </div>
        </header>
    )
}