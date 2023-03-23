import './styles/header.css'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
    return (
        <>
            <nav className="header-nav">
                <div className="header-left-col">
                    <img src="https://thepencilapp.com/images/logo_black.svg" alt="pencil-logo" />
                </div>
                <div className="header-center-col">
                    <ul className="header-center-col-ul">
                        <li>
                            <a>
                                <span>PUBLISH</span>
                            </a>
                            <ul className="inner-ul">
                                <li>PUBLISH YOUR BOOK</li>
                                <li>ROYALTY CALCULATOR</li>
                                <li>PUBLISHING SERVICES</li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                <span>READ</span>
                            </a>
                            <ul className="inner-ul">
                                <li>ABOUT THE READER APP</li>
                                <li>SHOP FOR BOOKS</li>
                                <li>PENCIL INSIGHTS SUBSCRIPTION</li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                <span>MASTERCLASS</span>
                            </a>
                            <ul className="inner-ul">
                                <li>VIDEO COURSES</li>
                                <li>DISCOVER</li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                <span>CONNECT</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>CONTESTS</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header-right-col">
                    <p>
                        <button id="login-btn">LOGIN</button>
                    </p>
                    <p>
                        GET STARTED FOR FREE
                    </p>
                </div>
                <div id="nav-hamburger">
                    <RxHamburgerMenu />
                </div>
            </nav>
        </>
    )
}

export default Header;