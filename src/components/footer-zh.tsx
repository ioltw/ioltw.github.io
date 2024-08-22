export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

          <div className="col-lg-4 col-md-12">
            <div className="footer-info">
            <h3>臺灣語言學奧林匹亞</h3>
            <p>
              <strong>Email:</strong> ioltwtwiol@gmail.com<br/>
              <strong>主辦單位:</strong> 國立台灣大學語言學研究所<br/>
              <strong>協辦單位:</strong> 國立台灣大學文學院<br/>
              <strong>指導單位:</strong> 教育部國教署
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
            <h4>相關連結</h4>
            <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://ioltw.github.io/scifair-2024/">第三屆語言科學科展 (2024)</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://ioling.org/">國際語奧</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://aplo.asia/">亞太語奧</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>請支持臺灣語奧！</h4>
            <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics">追蹤 FB 粉專</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://shukai.typeform.com/to/xHgP9m">加入團隊</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/donation">捐款贊助</a></li>
            </ul>
          </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; 台灣語言學奧林匹亞競賽, 2024. 最近更新日期：2024/8/22
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