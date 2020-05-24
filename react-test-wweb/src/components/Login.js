import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <MainLogin>
      <div className="container">
        <div id="from-login" className="py-4 center">
          <h1>Đăng nhập</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <Link to="/home">
              <button type="submit" class="btn btn-primary">
                Đăng nhập
              </button>
            </Link>

            
          </form>
        </div>
      </div>
    </MainLogin>
  );
};

const MainLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(100%, 550px);
  margin: 0 auto;
  padding-top: 2rem;
`;

export default Login;
