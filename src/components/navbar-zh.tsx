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
        <a href="/zh" className="brand-mark"><img src="/img/header_and_footer/logo_from_fb.png" alt="" className="img-fluid"/></a>
        <a href="/zh" className="brand-title">Taiwan Olympiad in Linguistics</a>
        </h1>

        <nav id="navbar" className={`navbar${isMobileOpen ? " navbar-mobile" : ""}`}>
          <ul>
            <li><a href="/zh" className="active">首頁</a></li>
            <li><a href="/zh/recent">最新消息</a></li>
            <li><a href="/zh/about-tol">關於TOL</a></li>
            <li className="dropdown"><a href="#" aria-expanded={isMobileOpen && isStudentOpen} onClick={(event) => toggleMobileDropdown(event, setIsStudentOpen)}><span>學生專區</span> <i className="bi bi-chevron-down"></i></a>
              <ul className={isStudentOpen ? "dropdown-active" : undefined}>
              <li><a href="/zh/student/previous-problems">歷屆試題</a></li>
              <li><a href="/zh/student/learning-resources">學習資源</a></li>
              <li><a href="/zh/student/calendar">行事曆</a></li>
              <li><a href="/zh/student/register-information">報名方式</a></li>
              </ul>
            </li>
            <li><a href="/zh/previous-results">歷年表現</a></li>
            <li><a href="/zh/gallery">推廣影音</a></li>
            <li><a href="/zh/faq">FAQ</a></li>
            <li><a href="/zh/about-us">籌辦單位</a></li>
            {/* <li><a href="/en/" className="switchlanguage">English</a></li> */}
            <li className="dropdown"><a aria-expanded={isMobileOpen && isLanguageOpen} onClick={(event) => toggleMobileDropdown(event, setIsLanguageOpen)}><i className="bi bi-globe" style={{fontSize: "120%"}}></i><i className="bi bi-chevron-down"></i></a>
              <ul className={isLanguageOpen ? "dropdown-active" : undefined}>
                <li><a href="#">中文</a></li>
                <li><a href="/en">English</a></li>
              </ul>
            </li>
          </ul>
          <button
            className={`bi ${isMobileOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            type="button"
            aria-label={isMobileOpen ? "關閉導覽選單" : "開啟導覽選單"}
            aria-expanded={isMobileOpen}
            onClick={toggleMobileNav}
          ></button>
        </nav>
      </div>
    </header>
  );
}
