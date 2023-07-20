import React from 'react';
import "./login.css";
export const Login = () => {
    return (
        <>
<link rel="icon" type="image/png" href="https://colorlib.com/etc/lf/Login_v9/images/icons/favicon.ico" ></link>
<link rel="stylesheet" type="text/css" href="https://colorlib.com/etc/lf/Login_v9/vendor/bootstrap/css/bootstrap.min.css"></link>
<link rel="stylesheet" type="text/css" href="https://colorlib.com/etc/lf/Login_v9/fonts/font-awesome-4.7.0/css/font-awesome.min.css"></link>
<link rel="stylesheet" type="text/css" href="https://colorlib.com/etc/lf/Login_v9/css/util.css"></link>
<link rel="stylesheet" type="text/css" href="https://colorlib.com/etc/lf/Login_v9/css/main.css"></link>
        <div className="container-login100" >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
    <form className="login100-form validate-form">
        <span className="login100-form-title p-b-37">
        Sign In
        </span>
        <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
        <input className="input100" type="text" name="username" placeholder="Username or email" />
        <span className="focus-input100"></span>
        </div>
        <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
        <input className="input100" type="password" name="pass" placeholder="Password" />
        <span className="focus-input100"></span>
        </div>
        <div className="container-login100-form-btn">
        <button className="login100-form-btn">
        Sign In
        </button>
        </div>
        <div className="text-center p-t-57 p-b-20">
        <span className="txt1">
        Or login with
        </span>
        </div>
        <div className="flex-c p-b-112">
        <div className="login100-social-item">
        <i className="fa fa-facebook-f"></i>
        </div>
        <div className="login100-social-item">
        <img src="https://colorlib.com/etc/lf/Login_v9/images/icons/icon-google.png" alt="GOOGLE" />
        </div>
        </div>
        <div className="text-center">
        <div className="txt2 hov1">
        Sign Up
        </div>
        </div>
        </form>
            </div>
        </div>
        
        <div id="dropDownSelect1"></div>
        </>
    )
  }
  export default Login;