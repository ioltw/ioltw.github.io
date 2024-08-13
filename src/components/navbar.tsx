export default function NavBar() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto">
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="/" className="logo me-auto"><img src="/img/header_and_footer/logo_from_fb.jpg" alt="" className="img-fluid"/></a>
        <a href="/"> Taiwan Olympiad in Linguistics </a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="/" className="active">首頁</a></li>
            <li><a href="recent.html">最新消息</a></li>
            <li><a href="about.html">關於TOL</a></li>
            <li className="dropdown"><a href="#"><span>學生專區</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
              <li><a href="student/previous-problems.html">歷屆試題</a></li>
              <li><a href="student/learning-resources.html">學習資源</a></li>
              <li><a href="student/calender.html">行事曆</a></li>
              <li><a href="student/register-information.html">報名方式</a></li>
              </ul>
            </li>
            <li><a href="previous-results.html">歷年表現</a></li>
            <li><a href="promotions.html">推廣影音</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="aboutus.html">籌辦單位</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}