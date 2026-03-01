import { Metadata } from "next";

export const metadata: Metadata = {
  title: "籌辦單位 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function AboutUs() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>籌辦單位</h2>
          <ol>
            <li><a href="/zh/">首頁</a></li>
            <li>籌辦單位</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= Clients Section =======  --> */}
    <section id="clients" className="clients section-bg">

      <div className="container">

        <h2 style={{fontWeight: "700"}}>主辦單位</h2>
        
        <div className="row d-flex justify-content-center">
          
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://homepage.ntu.edu.tw/~gilntu/">
              <img src="/img/clients/ntugil.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 style={{fontWeight: "600"}}>國立臺灣大學語言學研究所</h4>
          </div>
      
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
              <img src="/img/clients/ntugil.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            <h4 style={{fontWeight: "600"}}>臺灣語⾔⽂化與資訊協會</h4>
          </div>
        </div>

        <h2 style={{fontWeight: "700"}}>指導單位</h2>
        
        <div className="row d-flex justify-content-center">
             
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://www.k12ea.gov.tw/ap/index.aspx">
              <img src="/img/clients/edu.png" className="img-fluid" alt="" style={{width: "100px"}}/>
            </a>
            <h4 style={{fontWeight: "600"}}>教育部國教署</h4>
          </div>
       </div>

        <h2 style={{fontWeight: "700"}}>協辦單位</h2>
        
        <div className="row d-flex justify-content-center">

          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://liberal.ntu.edu.tw/home.jsp?lang=tw">
              <img src="/img/clients/ntu.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 style={{fontWeight: "600"}}>臺灣語⾔學學會</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://liberal.ntu.edu.tw/home.jsp?lang=tw">
              <img src="/img/clients/ntu.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 style={{fontWeight: "600"}}>國立臺灣大學文學院</h4>
          </div>
      
          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://fll.fcu.edu.tw/">
              <img src="/img/clients/Feng_Chia.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 style={{fontWeight: "600"}}>逢甲大學外國語文學系</h4>
          </div>
      
         
          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://zephyr.nsysu.edu.tw/index.php">
              <img src="/img/clients/Sun_Yat-Sen.jpg" className="img-fluid" alt="" style={{width: "100px"}}/>
            </a>
            <h4 style={{fontWeight: "600"}}>國立中山大學外國語文學系</h4>
          </div>
        </div>
          
      </div>
    </section>

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Our Team</h2>
          <p >台灣語奧委員會</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Janice_Fon.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>馮怡蓁</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Shu-Kai_Hsieh.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>謝舒凱</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Grace_Kuo.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>郭貞秀</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Haowen_Jiang.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>江豪文</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>蕭素英</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Li-Bang_Chen.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>陳立邦</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>

         <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>黃師緯</h4>
                <span>行政培訓組</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Anya_Ho.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>何婷嵐</h4>
                <span>財務公關組</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>賴彥甫</h4>
                <span>推廣組</span>
              </div>
            </div>
          </div>


          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>雷翔宇</h4>
                <span>命題組</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    </main>
  );
}
