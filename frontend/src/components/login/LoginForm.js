import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
import { useState } from "react";

const loginInfos = {
  email: "",
  password: "",
};

export default function LoginForm({ setVisible }) {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email Address is needed bruh")
      .email("That's an invalid Email"),
    password: Yup.string().required("You sure you don't need a password ?"),
  });
  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/loggg.png" alt="" />
        <span className="login_subheader">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to ViMeet
          <p>The place where VITians meet</p>
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={loginValidation}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Enter Your VIT Email"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Enter Your ViMeet Password"
                  onChange={handleLoginChange}
                />
                <button type="submit" className="purple_btn">
                  Log In
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Forgot Password ??
          </Link>
          <div className="sign_splitter"></div>
          <button
            className="purple_btn open_signup"
            onClick={() => {
              setVisible(true);
              console.log("object");
            }}
          >
            Create Account
          </button>
        </div>
        {/* <Link to="/" className="sign_extra">
              <b>Create a Page</b> &nbsp; for your club or community
            </Link> */}
      </div>
    </div>
  );
}
