import "./vip.css";
import React from "react";
import whatsapp from "./whatsapp.png";
import arrow from "./arrow.jpeg";
import mpesa from "./mpesa.png";
import { useState, useContext } from "react";
import { subscribedContext } from "../../../App";

export default function Vip() {
  const { isSubscribed, setIsSubscribed, vipSectiom } =
    useContext(subscribedContext);

  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  const filled = `Am ${vipSectiom}`;
  function wrongPassword() {
    const val = document.getElementById("validation");
    const val2 = document.getElementById("validation-true");
    val2.style.display = "none";
    val.style.display = "block";
  }
  function correctPassword() {
    const val = document.getElementById("validation-true");
    const val2 = document.getElementById("validation");
    val2.style.display = "none";
    val.style.display = "block";
  }
  function handleButtonSubmit() {
    filled === input?
            (setIsSubscribed(function (prevValue) {
                return !prevValue;
              })
             
      )
      : wrongPassword();
  }
  function isTrue(){
  return  isSubscribed ? correctPassword() : null
  }
  isTrue()
  return (
    <>
      <div className="teen-gift join-vip">
        <h1>
          TO JOIN VIP{" "}
          <span>
            <img src={arrow} />
          </span>
        </h1>
        <div>
          <h1>INSTRUCTIONS TO JOIN VIP </h1>
          <ol>
            <li>
              {" "}
              <h3>VIP costs ksh 100 : validity 2 months </h3>{" "}
            </li>
            <li>
              {" "}
              <h3>New movies get uploaded weekly</h3>{" "}
            </li>
            <li>
              <h3>
                To join , send ksh 100 to MPESA number
                <span>0110641770</span> to get your <br/>
                <span>ACTIVATION CODE</span>
                <a href="https://wa.me/+254110641770">
                  <img src={mpesa}/>
                </a>
              </h3>
            </li>
            <li>
              <h3>
                Forward the Confirmation message <br/>
                 to the same Whatsapp number
                <span>0110641770</span> <br /> or click the whatsapp icon below
                <a href="https://wa.me/+254110641770"><img src={whatsapp} /></a>
              </h3>
            </li>
            <li>
              <h3>
                You will receive a code on your Whatsapp, <br/> Input the code in the
                input below and <br />
                the VIP section will unlock
              </h3>
            </li>
          </ol>
          <div className="form">
            <form htmlFor="password">
              <input
                type="text"
                id="password"
                onChange={handleChange}
                value={input}
                required
              />
            </form>
            <button onClick={handleButtonSubmit}>
              <h4>SUBMIT</h4>
            </button>
          </div>
          <h5 className="validation" id="validation">
            WRONG PASSWORD
          </h5>
          <h5 className="validation-true" id="validation-true">
            VIP UNLOCKED
          </h5>
        </div>
      </div>
    </>
  );
}
