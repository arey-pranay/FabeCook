import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
import { useState } from "react";
//imports related to submitting the form
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
const loginInfos = {
  email: "",
  password: "",
};

export default function LoginForm({ setVisible }) {
  //for going to home page
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
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
  const loginSubmitted = async () => {
    try {
      setLoading(true);
      setSuccess("");
      setError("");
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        { email, password }
      );
      setLoading(false);
      setSuccess("Hey, Welcome Back ! ");
      setError("");
      dispatch({ type: "LOGIN", payload: data });
      Cookies.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
      setError(error.response.data.message);
    }
  };
  const [interacted, setInteracted] = useState(false);
  document.getElementById("root").addEventListener("mouseenter", mouseEnter);
  // document.getElementById("root").addEventListener("click", mouseEnter);

  function mouseEnter() {
    setInteracted(true);
  }
  document.getElementById("root").addEventListener("mouseleave", mouseLeave);
  function mouseLeave() {
    setInteracted(false);
  }

  return (
    <div className="login_wrap">
      <div className="login_1">
        <img
          //check when mouse enters viewport or if the body gets hover class. set a boolean value and put it here in the below expression
          src={
            !interacted
              ? "../../icons/whloggg.png"
              : "../../icons/purple-icon.gif"
          }
          alt=""
        />
        <span
          className="login_subheader"
          style={
            !interacted
              ? { color: "white", transition: "0.5s" }
              : { color: "black ", transition: "0.5s" }
          }
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <strong>Welcome to ViMeet</strong>
          <p>The place where VITians meet</p>
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={loginValidation}
            onSubmit={() => {
              loginSubmitted();
            }}
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
          {error && <div className="error_text">{error}</div>}
          <HashLoader
            color={"#6807b3"}
            loading={loading}
            // cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          {success && <div className="success_text">{success}</div>}

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
