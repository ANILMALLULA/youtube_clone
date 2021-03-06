import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";

const SiderBar = ({ sidebar, handleSidebar }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOut());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleSidebar()}
    >
      <Link to='/'>
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>
         <Link to='/feed/subscriptions'>
            <li>
               <MdSubscriptions size={23} />
               <span>Subscriptions</span>
            </li>
         </Link>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>
      <hr />
      <li onClick={logoutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default SiderBar;
