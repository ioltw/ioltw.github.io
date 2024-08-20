import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "首頁 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
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
            我們是台灣語奧
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
                <h2>和我們一起，</h2>
                <h2>探索語言的奧妙吧！</h2>
                {/* <!-- <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3> --> */}
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  國際語言學奧林匹亞競賽 (IOL)
                  是屬於全世界中學生的 12
                  項國際學科競賽之一。從 2003 年開始， IOL
                  每年在不同國家輪流舉辦。
                </p>
                <p>
                  語奧不需要懂多國語言或是深奧的語言學知識，只需要你/妳:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    懂得分析語言的結構
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    運用邏輯推理
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    耐心觀察每個細節
                  </li>
                </ul>
                <p>
                  歡迎妳/你加入我們的行列，悠遊在語言的浩瀚世界中！
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
                    <a href="/zh/recent">最新消息</a>
                  </h4>
                  <p>各項活動及重要公告訊息</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-blockquote-left"></i>
                  <h4>
                    <a href="/zh/about-tol">關於TOL</a>
                  </h4>
                  <p>TOL是什麼、要怎麼玩？</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-backpack-fill"></i>
                  <h4>
                    <a href="/zh/student/learning-resources">
                      學生專區
                    </a>
                  </h4>
                  <p>報名的各項細節及學習資源</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-binoculars-fill"></i>
                  <h4>
                    <a href="/zh/previous-results">
                      歷年表現
                    </a>
                  </h4>
                  <p>來看看歷屆為國爭光的國手們吧</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-camera-video-fill"></i>
                  <h4>
                    <a href="/zh/promotions">
                      推廣資訊和影音
                    </a>
                  </h4>
                  <p>歷年舉辦過的活動以及影音片段</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-question-circle-fill"></i>
                  <h4>
                    <a href="/zh/faq">FAQ</a>
                  </h4>
                  <p>常見問題</p>
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
          <h2 style={{ fontWeight: 700 }}>贊助單位</h2>
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
