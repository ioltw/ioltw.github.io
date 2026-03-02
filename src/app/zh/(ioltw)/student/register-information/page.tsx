import { Metadata } from "next";

export const metadata: Metadata = {
  title: "報名方式 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function RegisterInformation() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>報名方式</h2>
          <ol>
            <li><a href="/zh/">首頁</a></li>
            <li>學生專區</li>
            <li>報名方式</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="section-title col-lg-7">
            <p>台灣語奧報名方式</p>
          </div>
          <div className="col-lg-5">
            <ul>
              <li><i className="ri-check-double-line"></i> 想要與國際語言學好手比拼，為國爭光。</li>
              <li><i className="ri-check-double-line"></i> 想要繼續解更多不同類型的語言學謎題。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    {/* <!-- ======= Steps Section ======= --> */}
    <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="icon-box">
                <h3>1. 參加國手選拔初賽</h3>
                <h4>線上報名繳費後，確認參賽資格，始得角逐一階國手資格。</h4>
                <div style={{display: "flex", justifyContent: "center", gap: "40px", alignItems: "center"}}>
                  <a href="/pdf/2026TOL_rules.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">閱讀 【台灣國手選拔辦法】 👀</a>
                  <a href="https://forms.gle/KNzQQDBM4wLgk3yM9" className="btn btn-outline-danger">前往 台灣語奧全國初選報名系統</a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Repeat for other years --> */}
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="icon-box">
                <h3>2. 完成一階國手培訓課程以及參加國手選拔複賽</h3>
                <h4>經由初賽或學校推薦入選一階國手者，必須參加一階國手培訓課程，始得參加複賽。</h4>
              </div>
            </div>
          </div>
          {/* <!-- New Added In 2026 --> */}
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="icon-box">
                <h3>3. 參加選拔決賽</h3>
                <h4>晉級決賽（即亞太語奧競賽）成績計算為「100%複賽成績」或「20%初賽成績+80%複賽成績」擇優採計。正式國手將以決賽成績遴選，並公告名單。</h4>
                <a href="https://aplo.asia/" className="btn btn-outline-danger" style={{marginLeft: "80px"}}>APLO 亞太語奧</a>
              </div>
            </div>
          </div>
          {/* <!-- Repeat for 2022 --> */}
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="icon-box">
                <h3>4. 參與二階國手培訓課程＆集訓</h3>
                <h4>成為正式國手者，須參加二階國手培訓課程＆賽前集訓，進行出國比賽前的各種模擬競賽與團隊合作訓練。</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
  </main>
  );
}
