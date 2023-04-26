import './Footer.scss'
import Logo from 'components/Logo/Logo'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer_container">
            <div className="footer-logo_container">
                <Logo />
            </div>
            <div className="about-us_container">
                <div className="about_us">
                    <div className="about_us-title">Про нас</div>
                    <p className="about_us-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptate rerum quos alias et corporis officia eos
                        praesentium consectetur nesciunt nulla, voluptas,
                        pariatur hic veritatis placeat excepturi delectus a
                        mollitia, at quibusdam maiores ab laborum. Enim
                        perspiciatis corrupti eius quod ea deleniti illo
                        corporis voluptatibus aliquam, modi quae! At, earum
                        nemo!
                    </p>
                </div>
                <div className="contacts">
                    <div className="contacts-title">Контакти</div>
                    <div className="contacts-content">
                        <div className="phone_container">
                            <div className="phone_logo"></div>
                            <p className="footer_contacts">
                                +38 (096)-083-13-01
                            </p>
                        </div>
                        <div className="gmail_container">
                            <div className="gmail_logo"></div>
                            <p className="footer_contacts">
                                shopsomik@gmail.com
                            </p>
                        </div>
                        <div className="instagram_container">
                            <div className="instagram_logo"></div>
                            <p className="footer_contacts">somik.ua</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="rights">© Somik.ua 2023. Всі права захищені</p>
        </div>
    )
}

export default Footer
