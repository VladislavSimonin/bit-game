import '../Footer/Footer.css'

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='footer-content'>
                <div className='social'>
                    <a className='social-img' href='https://github.com/VladislavSimonin' target='_blank' rel='noopener noreferrer'>
                        <img className='social-icons' src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub"></img>
                    </a>
                    <a className='social-img' href='https://t.me/vlad_fq14085' target='_blank' rel='noopener noreferrer'>
                        <img className='social-icons' src={`${import.meta.env.BASE_URL}telegram.png`} alt="Telegram"></img>
                    </a>
                    <a className='social-img' href='mailto:vladislavforworkmail@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <img className='social-icons' src={`${import.meta.env.BASE_URL}gmail.png`} alt="Gmail"></img>
                    </a>
                </div>

                <div className='footer-section-bottom'>
                     <p className='copyright'>&copy; 2026 Bit Game. Все права защищены.</p>
                </div>
            </div>


        </footer>
    )
}