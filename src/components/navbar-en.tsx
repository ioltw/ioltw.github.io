"use client";

import {
  useState,
  type Dispatch,
  type MouseEvent,
  type SetStateAction,
} from "react";

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleMobileNav = () => {
    if (isMobileOpen) {
      setIsStudentOpen(false);
      setIsLanguageOpen(false);
    }
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleMobileDropdown = (
    event: MouseEvent<HTMLAnchorElement>,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (!isMobileOpen) return;
    event.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto">
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="/en" className="brand-mark"><img src="/img/header_and_footer/logo_from_fb.png" alt="" className="img-fluid"/></a>
        <a href="/en" className="brand-title">Taiwan Olympiad in Linguistics</a>
        </h1>

        <nav id="navbar" className={`navbar${isMobileOpen ? " navbar-mobile" : ""}`}>
          <ul>
            <li><a href="/en" className="active">Home</a></li>
            <li><a href="/en/recent">News</a></li>
            <li><a href="/en/about-tol">About TOL</a></li>
            <li className="dropdown"><a href="#" aria-expanded={isMobileOpen && isStudentOpen} onClick={(event) => toggleMobileDropdown(event, setIsStudentOpen)}><span>For Students</span> <i className="bi bi-chevron-down"></i></a>
              <ul className={isStudentOpen ? "dropdown-active" : undefined}>
              <li><a href="/en/student/previous-problems">Past Problems</a></li>
              <li><a href="/en/student/learning-resources">Resources</a></li>
              <li><a href="/en/student/calendar">Calendar</a></li>
              <li><a href="/en/student/register-information">Registration</a></li>
              </ul>
            </li>
            <li><a href="/en/previous-results">Results</a></li>
            <li><a href="/en/gallery">Gallery</a></li>
            <li><a href="/en/faq">FAQ</a></li>
            <li><a href="/en/about-us">About Us</a></li>
            {/* <li><a href="/zh/" className="switchlanguage">中文</a></li> */}
            <li className="dropdown"><a aria-expanded={isMobileOpen && isLanguageOpen} onClick={(event) => toggleMobileDropdown(event, setIsLanguageOpen)}><i className="bi bi-globe" style={{fontSize: "120%"}}></i><i className="bi bi-chevron-down"></i></a>
              <ul className={isLanguageOpen ? "dropdown-active" : undefined}>
                <li><a href="/zh">中文</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </li>
          </ul>
          <button
            className={`bi ${isMobileOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            type="button"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            onClick={toggleMobileNav}
          ></button>
        </nav>
      </div>
    </header>
  );
}
