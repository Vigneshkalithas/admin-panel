import React from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export function Pages() {
  return <div className="pages">{/* <h1>Pages</h1> */}</div>;
}

export function BlankPage() {
  return (
    <>
      <div class="container-fluid">
        <h1 className="h3 mb-4 text-gray-800 dashboard">Blank Page</h1>
      </div>
    </>
  );
}

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="text-center">
          <div className="error-top-img">
            <img
              className="err-img"
              alt="404"
              src="https://www.yogaleela.org/wp-content/uploads/2021/09/CodePen-404-Page.gif"
            />
          </div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <a  className="color-primary" onClick={() => navigate("/dashboard")}>← Back to Dashboard</a>
        </div>
      </div>
    </>
  );
}

export function ForgetPassword() {
  const navigate = useNavigate();
  return (
    <div className="container forgetpassword-container">
      <section className="forget text-center">
        <div className="image"></div>
        <div className="content">
          <h4>Forgot Your Password?</h4>
          <p className="card-info">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p>
          <div>
            <div className="d-grid gap-1">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="forget-form"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </Form.Group>
              </Form>

              <a
                className="btn btn-primary btn-user btn-block forget-form"
                onClick={() => navigate("/dashboard")}
              >
                Reset Password
              </a>
            </div>
            <div>
              <div className="new-account-foger-form">
                <div className="createAcoount">Create an Account!</div>
                <div className="createAcoount">Already have an Account.?</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="container login-container">
      <section className="forget text-center">
        <div className="image-login"></div>
        <div className="content-login">
          <h4 className="loginhead">Welcome Back!</h4>
          <div>
            <form>
              <div className="form-box">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the mail adress"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="message">
                  <input className="login-checkbox" type="checkbox" />
                  Remember me
                </div>

                <div className="d-grid gap-2">
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login
                  </a>
                  <a
                    className="btn btn-danger btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login with Google
                  </a>
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login with Facebook
                  </a>
                </div>
                <div className="mt-3">
                  <a className="text-decoration-none " href="#">
                    Forgot password ?
                  </a>
                </div>
                <div className="mt-2">
                  <a className="text-decoration-none" href="#">
                    Create An Account !
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Register() {
  const navigate = useNavigate();

  return (
    <div className="container login-container">
      <section className="forget text-center">
        <div className="image-register"></div>
        <div className="content-register">
          <h4 className="register-head">Create An Account!</h4>
          <div className="login-inputs">
            <form>
              <div className="form-box-name">
                <div className="fname-head-login">
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="input-group mb-3 ms-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>

                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the mail adress"
                  />
                </div>
                <div className="fname-head-login">
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group mb-3 ms-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Repeat Password"
                  />
                </div>

                </div>
                 <div className="d-grid gap-2">
        <a
          className="btn btn-primary btn-user btn-block login-form"
          onClick={() => navigate("/dashboard")}
        >
          Register
        </a>
        <a
          className="btn btn-danger btn-user btn-block login-form"
          onClick={() => navigate("/dashboard")}
        >
          Register with Google
        </a>
        <a
          className="btn btn-primary btn-user btn-block login-form"
          onClick={() => navigate("/dashboard")}
        >
          Register with Facebook
        </a>
      </div>
      <div className="mt-3"><a className="text-decoration-none " href="#">Forgot password ?</a></div>
      <div className="mt-2"><a className="text-decoration-none" href="#">Already have An Account ? Login !</a></div>
    
                
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}





