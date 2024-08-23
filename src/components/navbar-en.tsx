export default function NavBar() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto">
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="/en/" className="logo me-auto"><img src="/img/header_and_footer/logo_from_fb.png" alt="" className="img-fluid"/></a>
        <a href="/en/"> Taiwan Olympiad in Linguistics </a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="/en/" className="active">Home</a></li>
            <li><a href="/en/recent">News</a></li>
            <li><a href="/en/about-tol">About TOL</a></li>
            <li className="dropdown"><a href="#"><span>For Students</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
              <li><a href="/en/student/previous-problems">Past Problems</a></li>
              <li><a href="/en/student/learning-resources">Resources</a></li>
              <li><a href="/en/student/calendar">Calendar</a></li>
              <li><a href="/en/student/register-information">Registration</a></li>
              </ul>
            </li>
            <li><a href="/en/previous-results">Results</a></li>
            <li><a href="/en/promotions">Promotions</a></li>
            <li><a href="/en/faq">FAQ</a></li>
            <li><a href="/en/about-us">About Us</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}