import { Form, Formik } from "formik";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import * as Yup from "yup";
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
export default function RegisterForm({ setVisible }) {
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };
  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("What's your First name ?")
      // .min(2, "Fisrt name must be between 2 and 16 characters.")
      // .max(16, "Fisrt name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Only alphabets please."),
    last_name: Yup.string()
      .required("What's your Last name ?")
      // .min(2, "Last name must be between 2 and 16 characters.")
      // .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Only alphabets please."),
    email: Yup.string()
      .required("You'll need this when you log in.")
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks."
      )
      .min(6, "At least 6 characters please")
      .max(36, "Woah Woah 36 characters at most"),
  });
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerSubmmit = async () => {
    try {
      setSuccess("");
      setError("");
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }
      );
      setLoading(false);
      setSuccess("Registered Successfully ! Please verify your email ");
      setError("");
      //storing data in cookies by redux
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
        Cookies.setItem("user", JSON.stringify(rest));
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i
            className="exit_icon"
            onClick={() => {
              setVisible(false);
            }}
          ></i>
          <span>Sign Up</span>
          <span>
            An Amazing Adventure Awaits <strong className="YOUU">You</strong>
          </span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date();
            let picked_date = new Date(bYear, bMonth - 1, bDay);
            let atleast14 = new Date(1970 + 14, 0, 1);
            let noMoreThan70 = new Date(1970 + 70, 0, 1);
            if (current_date - picked_date < atleast14) {
              setDateError("Bruv, you underage !");
            } else if (current_date - picked_date > noMoreThan70) {
              setDateError("Nah sir, ya too old for this shit n all");
            } else if (gender === "") {
              setDateError("");
              setGenderError(
                "Please choose a gender. You can change who can see this later."
              );
            } else {
              setDateError("");
              setGenderError("");
              registerSubmmit();
            }
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line register_names_div">
                <RegisterInput
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="VIT Email Address"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="New password"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <DateOfBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>

                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              {/* <div className="reg_infos">
                By clicking Sign Up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div> */}
              <div className="reg_btn_wrapper">
                <button className="blue_btn open_signup">Sign Up</button>
              </div>
              {error && <div className="error_text">{error}</div>}
              {success && <div className="success_text">{success}</div>}
              <HashLoader
                color={"#6807b3"}
                loading={loading}
                // cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />{" "}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
