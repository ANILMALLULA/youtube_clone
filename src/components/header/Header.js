import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

const Header = () => {
  return (
    <div className='border border-dark header'>
      <FaBars className='header__menu' size={26} />
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
        alt=''
        className='header__logo'
      />
      <form action=''>
        <input type='search' placeholder='Search here' />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className='header__icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src='https://www.w3schools.com/howto/img_avatar.png'
          alt='avatar_img'
        />
      </div>
    </div>
  );
};

export default Header;
