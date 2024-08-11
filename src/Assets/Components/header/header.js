import React from "react";
import "./header.css";
import avatar from "../../Images/asset/avatar.jpg";
import { Outlet, NavLink } from "react-router-dom";
import vip from "../../Images/asset/user.png";
import close from "./close.png"
import hamburger from "./hamburger.png"
export default function () {
  function addClass (){
     const bar = document.getElementById("nav-links")
     bar.classList.toggle("expanded")
  }
  function removeClass (){
     const bar = document.getElementById("nav-links")
    return (bar.classList.contains("expanded") ? bar.classList.remove("expanded") : null )
  }
  return (
    <>
      <nav className="navbar">
        <div className="cover"  onClick={removeClass} >  </div>
        <ul>
          <li>
            <NavLink to="/">
              <h1>DJ AFRO MOVIES HUB</h1>
            </NavLink>
          </li>
          <li>
            <div className="nav-links" id="nav-links">
            <li> <img src={close} onClick={addClass} id="close"/></li>
              <li>
                <NavLink to="/indian">
                  <button>Indian Movies</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/teen">
                  <button>Teen Movies</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/vip-movies">
                  <div className="vip-logos">
                    <button>VIP</button>
                    <img src={vip} alt="dj afro vip" className="vip-logo" />
                  </div>
                </NavLink>
                
              </li>
              <li>
                <NavLink to="/vip-section">
                  <div className="vip-logos">
                    <button>JOIN VIP</button>
                    <img src={vip} alt="dj afro vip" className="vip-logo" />
                  </div>
                </NavLink>
                
              </li>
            </div>
          </li>
          <div>
            
            <li > <img onClick={addClass} src={hamburger} className="hamburger"/> </li>
            
          </div>
          <li>
          <NavLink to="/vip-section">
          <img className="avatar" src={avatar} alt="dj afro - avatar" />
          </NavLink>
          </li>
            
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
