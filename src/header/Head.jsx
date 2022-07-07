import React from 'react';
import { NavLink } from 'react-router-dom';

const Head = () => {
    return (
        <div className='head'>
            <div className="wrapper">
            <div className='info'>
                    <ul>
                        <li><NavLink to='/sale'>Акции</NavLink></li>
                        <li><NavLink to='/shipment'>Доставка и оплата</NavLink></li>
                        <li><NavLink to='/contacts'>Контакты</NavLink></li>
                    </ul>
            </div>
            <div className="socials">
                   <i class="fa-brands fa-instagram-square"></i>
                   <i class="fa-brands fa-vk"></i> 
            </div>
            <div className="phone"> 
                    <i className='fa fa-phone'></i>
                    <label>+7-931-22-33-44-2</label>
            </div>
           <div className='login'>
           <button>Войти</button>
           <i class="fa-solid fa-arrow-right-to-bracket"></i>
           </div>
           </div>  
        </div>
    );
}

export default Head;