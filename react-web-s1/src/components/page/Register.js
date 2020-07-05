import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainRegister>
      <div id="from-login" className="container">
        <div className="py-4 center">
          <h1>Đăng kí</h1>
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
            <div class="form-group">
              <label for="exampleInputPassword1">Nhập lại Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Nhập lại Password"
              />
            </div>

            <Link to="/">
              <button type="submit" class="btn btn-primary">
                Đăng kí
              </button>
            </Link>
            <Link to="/">
              <button type="submit" class="btn btn-primary">
                Đăng Nhập
              </button>
            </Link>
          </form>
        </div>
      </div>
    </MainRegister>
  );
};
const MainRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(100%, 550px);
  margin: 0 auto;
  padding-top: 2rem;
`;
export default Register;
