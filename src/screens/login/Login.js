import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png'
          alt=''
        />
        <button onClick={loginHandler}>Login with Google</button>
        <p>This Project made using Youtube Data API</p>
      </div>
    </div>
  );
};

export default Login;
