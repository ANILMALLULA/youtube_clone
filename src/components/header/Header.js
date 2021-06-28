import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { useHistory } from "react-router-dom";

const Header = ({ handleSidebar }) => {
  const [inpVal, setInpVal] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${inpVal}`);
  };

  return (
    <div className='border border-dark header'>
      <FaBars
        className='header__menu'
        size={26}
        onClick={() => handleSidebar()}
      />
      <img
        src='https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png'
        alt=''
        className='header__logo'
      />
      <form onSubmit={submitHandler}>
        <input
          type='search'
          placeholder='Search here'
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
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
