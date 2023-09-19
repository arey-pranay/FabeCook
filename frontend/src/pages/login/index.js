import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";
import { useState } from "react";

export default function Login() {
  const [visible, setVisible] = useState(false);
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
    <div className={interacted ? "login slider-thumb2" : "login slider-thumb"}>
      <div className="login_wrapper ">
        <LoginForm setVisible={setVisible} />
        {visible && <RegisterForm setVisible={setVisible} />}
        <Footer />
      </div>
    </div>
  );
}
