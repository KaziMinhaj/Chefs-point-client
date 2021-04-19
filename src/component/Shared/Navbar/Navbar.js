import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light container-fluid bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          ChefsPortal
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item  mr-5">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active  ms-5" aria-current="page" href="#">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active  ms-5" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active  ms-5" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active  ms-5" aria-current="page" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
