import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='categories_nav'>
            <div className="wrapper">
                <ul>
                    <li><NavLink to='/hookahs'>Кальяны</NavLink></li>
                    <li><NavLink to='/tobacco'>Табак</NavLink></li>
                    <li><NavLink to='/charcoal'>Уголь</NavLink></li>
                    <li><NavLink to='/accessories'>Аксессуары</NavLink></li>
                    <li><NavLink to='/disposablePODs'>Одноразки</NavLink></li>
                    <li><NavLink to='/PODs'>PODы</NavLink></li>
                    <li><NavLink to='/liquids'>Жидкости</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;