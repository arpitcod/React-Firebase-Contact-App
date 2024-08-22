import React, { useState } from "react";
import { IoLogoFirebase } from "react-icons/io5";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <IoLogoFirebase className="icons" />
          <h1>Firebase Contact App</h1>  
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
