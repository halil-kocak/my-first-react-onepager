import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa';
import './Navbar.css'
import logo from './logo/LogoLight.png';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navMenuItem = document.querySelector('.navMenuList');
    }

    render() {
        // hover Effect active an element (hover farben werte müssen geändert werden)
        function changeBackgroundHoverActive(e) {
            e.target.style.color = '#616ba2';
        }

        // hover Effect deactive an element (hover farben werte müssen geändert werden)
        function changeBackgroundHoverDeactive(e) {
            e.target.style.color = '#ffffff';
        }

        // collapse State changing (trigger) 
        function toggleNavCollapse(e) {
            document.querySelector('.navMenuList').classList.toggle('active');
            document.querySelector('.bars').classList.toggle('activate');
        }



        return (
            <>
                <nav className='nav'>

                    <figure className='logoBox'>
                        <img src={logo} alt="Logo" className='logoImg' />
                    </figure>

                    <div className='navMenuList'>
                        <a href='#home' onMouseOver={e => changeBackgroundHoverActive(e)} onMouseLeave={e => changeBackgroundHoverDeactive(e)}>Home</a>
                        <a href='#services' onMouseOver={e => changeBackgroundHoverActive(e)} onMouseLeave={e => changeBackgroundHoverDeactive(e)}>Services</a>
                        <a href='#projects' onMouseOver={e => changeBackgroundHoverActive(e)} onMouseLeave={e => changeBackgroundHoverDeactive(e)}>Projects</a>
                        <a href='#contact' onMouseOver={e => changeBackgroundHoverActive(e)} onMouseLeave={e => changeBackgroundHoverDeactive(e)}>Kontakt</a>
                    </div>

                    <FaBars className='bars' onClick={e => toggleNavCollapse(e)} ></FaBars>

                </nav>


            </>
        )
    }
}

export default Navbar

