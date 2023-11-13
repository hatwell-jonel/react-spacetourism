import {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/shared/logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaTimes} from "react-icons/fa"


const navLinks = ["home", "destination", "crew", "technology"];

function Header() {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

  return (
    <header className='header'>

        <Link to="/home">
            <img src={logo} className='header__img' alt="space tourism logo" />
        </Link>

        <button className='header__hamburger' onClick={handleShowLinks}>
            {
                showLinks ? <FaTimes /> : <GiHamburgerMenu />
            }
        </button>

        <div className={`header__links ${showLinks ? "header__links--active" : ""}`}>
            <ul className='header__links--list'>
                {
                    navLinks.map((item, index) => (
                        <li key={index}> 
                            <NavLink to={`/${item}`}>
                                <span>{`0${index} `}</span>{item}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>

    </header>
  )
}

export default Header