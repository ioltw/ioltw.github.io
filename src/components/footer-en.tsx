export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

          <div className="col-lg-4 col-md-12">
            <div className="footer-info">
            <h3>Taiwan Olympiad in Linguistics</h3>
            <p>
              <strong>Email:</strong> ioltwtwiol@gmail.com<br/>
              <strong>Organizer:</strong> Graduate Institute of Linguistics, National Taiwan University<br/>
              <strong>Co-organizer:</strong> College of Liberal Arts, National Taiwan University<br/>
              <strong>Advisor:</strong> K-12 Education Administration, Ministry of Education
            </p>
            <div className="social-links mt-3">
              <a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/taiwan.olympiad.in.linguistics/" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="https://www.youtube.com/@ioltw" className="youtube"><i className="bx bxl-youtube"></i></a>
            </div>
            </div>
          </div>

          {/* <!-- <div className="col-lg-2 col-md-6 footer-links">
            <h4>網站導覽</h4>
            <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://ioling.org/">國際語奧官網</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://aplo.asia/">亞太語奧官網</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div> --> */}

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Links</h4>
            <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://ioltw.github.io/scifair-2024/">The 3rd High School Language Science Fair in Taiwan (2024)</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://ioling.org/">International Linguistics Olympiad</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://aplo.asia/">Asia Pacific Linguistics Olympiad</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Support TOL</h4>
            <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics">Follow us on Facebook</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://shukai.typeform.com/to/xHgP9m">Join our team</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/donation">Donate</a></li>
            </ul>
          </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Taiwan Olympiad in Linguistics, 2024. Last Updated 2024/8/22
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ --> */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}