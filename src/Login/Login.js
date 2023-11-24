import { Link } from 'react-router-dom';
import React from 'react';
import { Image } from "react-bootstrap";
import myImage from './ycflogo.png';

function Login() {
  return (
      <div className='container'>
        <div className='mt-5'></div>
        {/* <div>
      <Image src={myImage} alt="ycflogo" fluid style={{height:'200px',width:'200px'}}/>
    </div> */}
        <div class="row gap-5">
          <div class="col-sm">
            <img src="https://img.freepik.com/free-vector/nerdy-boy-searching-laptop-with-education-icon-cartoon-style-isolated-white-background_1308-45397.jpg" class="img-fluid mt-5 d-none d-sm-block" alt="doctor-patient" />
          </div>
          <div class="col-sm">
            <div className="mb-0">
            <Image src={myImage} alt="ycflogo" fluid style={{height:'200px',width:'200px'}}/>
            </div>
            <form class='w-75 mx-auto p-5 text-start border shadow bg-light'>
              <div class="mb-3 mt-0">
                <h5 style={{marginLeft:'10%', color:'darkblue' ,fontFamily:'cursive'}} className='mb-4'>Learning Management System</h5>
                <label for="useremail" class="form-label align-items-start">Email address</label>
                <input type="email" class="form-control" id="useremail" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="d-flex justify-content-center gap-3">
                <Link to="/login">
                  <button type="submit" class="btn btn-primary mt-4 align-items-center">Login</button>
                </Link>
                <Link to="/register">
                  <button class="btn btn-danger mt-4 align-items-center">Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;