
export default function Footer() {
    return (
        <footer>
            <div className='social'>
                <a href='https://github.com/VladislavSimonin'>
                    <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub"></img>
                </a>
                <a href='https://t.me/vlad_fq14085'>
                    <img src={`${import.meta.env.BASE_URL}telegram.png`} alt="Telegram"></img>
                </a>
                <a href='mailto:vladislavforworkmail@gmail.com'>
                    <img src={`${import.meta.env.BASE_URL}gmail.png`} alt="Gmail"></img>
                </a>
            </div>
        </footer>
    )
}