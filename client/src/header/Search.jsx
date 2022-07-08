import React from 'react';
import logo from './logo.png'
import { NavLink} from 'react-router-dom';

const Search = () => {
    return (
        <div className='search'>
            <div className="wrapper"> 
                <NavLink to='/'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                </NavLink>
                <div className="search-box">
                    
                    <input name='query' placeholder='Поиск товаров' type='text' autoComplete='off'></input>
                    <i className='fa fa-search'></i>
                </div>
                <div className='cart'>
                    <NavLink to='/cart'>
                        <i className='fa fa-shopping-cart'></i>
                        <span>0</span>
                    </NavLink>
                </div>       
            </div>    
        </div>
    );
}

export default Search;