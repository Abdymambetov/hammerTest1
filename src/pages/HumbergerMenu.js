import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setPage } from '../redux/slices/UsersSlice';


function HumbergerMenu() {
    const {isOpen} = useSelector(state => state.person)
    const dispatch = useDispatch()
  const toggleMenu = () => {
    dispatch(setIsOpen());
  };

  const navigateToPage = () => {
    dispatch(setPage())
  };
  return (
    <div className='menu'>
        <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className="menuContent">
            <p onClick={navigateToPage}>Клиент</p>
        </div>
      )}
    </div>
  )
}

export default HumbergerMenu