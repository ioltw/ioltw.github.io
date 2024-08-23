export default function NavBar() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto">
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="/zh/" className="logo me-auto"><img src="/img/header_and_footer/logo_from_fb.png" alt="" className="img-fluid"/></a>
        <a href="/zh/"> Taiwan Olympiad in Linguistics </a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="/zh/" className="active">首頁</a></li>
            <li><a href="/zh/recent">最新消息</a></li>
            <li><a href="/zh/about-tol">關於TOL</a></li>
            <li className="dropdown"><a href="#"><span>學生專區</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
              <li><a href="/zh/student/previous-problems">歷屆試題</a></li>
              <li><a href="/zh/student/learning-resources">學習資源</a></li>
              <li><a href="/zh/student/calendar">行事曆</a></li>
              <li><a href="/zh/student/register-information">報名方式</a></li>
              </ul>
            </li>
            <li><a href="/zh/previous-results">歷年表現</a></li>
            <li><a href="/zh/promotions">推廣影音</a></li>
            <li><a href="/zh/faq">FAQ</a></li>
            <li><a href="/zh/about-us">籌辦單位</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}