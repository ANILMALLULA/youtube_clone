import React from "react";
import "./_login.scss";

const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png'
          alt=''
        />
        <button>Login with Google</button>
        <p>This Project made using Youtube Data API</p>
      </div>
    </div>
  );
};

export default Login;
