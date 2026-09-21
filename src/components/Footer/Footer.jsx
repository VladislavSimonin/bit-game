import '../Footer/Footer.css'

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='footer-content'>
                <div className='footer-section-nav'>
                    <h3>О проекте</h3>
                </div>
                <div className='social'>
                    <h3>Контакты</h3>
                    <a className='social-img' href='https://github.com/VladislavSimonin' target='_blank' rel='noopener noreferrer'>
                        <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub"></img>
                    </a>
                    <a className='social-img' href='https://t.me/vlad_fq14085' target='_blank' rel='noopener noreferrer'>
                        <img src={`${import.meta.env.BASE_URL}telegram.png`} alt="Telegram"></img>
                    </a>
                    <a className='social-img' href='mailto:vladislavforworkmail@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <img src={`${import.meta.env.BASE_URL}gmail.png`} alt="Gmail"></img>
                    </a>
                </div>
            </div>


        </footer>
    )
}