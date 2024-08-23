import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Home - Taiwan Olympiad in Linguistics",
};

export default function Home() {
  const typedHello = `
  let typed = new Typed('#greeting-text', {
    strings: ["你好", "Hello", "Saluton", "Bonjour", "Hola", "こんにちは", "Guten Tag", "Здравствуйте", "སྐུ་ཁམས་བཟང་།", "Ahoj", "გამარჯობა", "สวัสดี"],
    typeSpeed: 50,
    backDelay: 1500,
    loop: true
  });`;
  return (
    <>
      {/* "background-image: url(/img/cover-paint.jpg); background-size: cover;" */}
      <section
        id="hero"
        style={{
          backgroundImage: "url(/img/cover-paint.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center"
          style={{ height: "100vh" }}
        >
          <h2 style={{ color: "#0054c4" }}>
            <span id="greeting-text"></span>
          </h2>
          <p style={{ color: "#0054c4" }} className="fs-3">
            We are TOL
          </p>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6">
              <h2>Explore the wonders of language!</h2>
                {/* <!-- <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3> --> */}
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  The International Linguistics Olympiad (IOL) is 
                  one of the 12 international academic competitions for high school students worldwide. 
                  Since 2003, the IOL has been held annually in different countries.
                </p>
                <p>
                The Olympiad doesn't require knowledge of multiple languages or advanced linguistics, it only needs you to:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    Understand how to analyze and solve puzzles,
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    Use logical reasoning,
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    Pay attention to every detail.
                  </li>
                </ul>
                <p>
                  Let's dive in the vast world of languages!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="icon-box">
                  <i className="bi bi-newspaper"></i>
                  <h4>
                    <a href="/en/recent">Recent</a>
                  </h4>
                  <p>Information on various activities and important announcements.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-blockquote-left"></i>
                  <h4>
                    <a href="/en/about-tol">About TOL</a>
                  </h4>
                  <p>What is TOL and how does it work?</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-backpack-fill"></i>
                  <h4>
                    <a href="/en/student/learning-resources">
                      For Students
                    </a>
                  </h4>
                  <p>Learning resources and registration details.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-binoculars-fill"></i>
                  <h4>
                    <a href="/en/previous-results">
                      Previous Results
                    </a>
                  </h4>
                  <p>See the achievements of previous contestants.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-camera-video-fill"></i>
                  <h4>
                    <a href="/en/promotions">
                      Promotions
                    </a>
                  </h4>
                  <p>Past activities and video clips.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-question-circle-fill"></i>
                  <h4>
                    <a href="/en/faq">FAQ</a>
                  </h4>
                  <p>Frequently Asked Questions.</p>
                </div>
              </div>
              {/* <!-- <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-people-fill"></i>
                <h4><a href="/zh/about-us">籌辦單位</a></h4>
                <p>台灣語奧委員會以及相關單位</p>
              </div>
              </div>
            </div> --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Clients Section =======  --> */}
        <section id="clients" className="clients section-bg">
          <h2 style={{ fontWeight: 700 }}>Our Sponsors</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <a href="https://www.aca.ntu.edu.tw/w/aca/index">
                  <img
                    src="/img/clients/ntu.png"
                    className="img-fluid"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <a href="https://linguist.tw/zh-tw/">
                  <img
                    src="/img/clients/lst.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <a href="http://www.bookman.com.tw/">
                  <img
                    src="/img/clients/bookman.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <a href="https://www.lttc.ntu.edu.tw/">
                  <img
                    src="/img/clients/lttc.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}
      </main>
      {/* <!-- End #main --> */}

      <Script
        id="typedHello"
        strategy="afterInteractive"
      >
        {typedHello}
      </Script>
    </>
  );
}
