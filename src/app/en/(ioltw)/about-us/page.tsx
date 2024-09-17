import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Taiwan Olympiad in Linguistics",
};

export default function AboutUs() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li><a href="/zh/">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= Clients Section =======  --> */}
    <section id="clients" className="clients section-bg">
      <h2 style={{fontWeight: "700"}}>About Us</h2>
      <div className="container">
        <div className="row d-flex justify-content-center">
          
          <div className="col-lg-3 col-md-4 col-6 d-flex flex-column justify-content-center mx-3 mb-4">
            <a href="https://homepage.ntu.edu.tw/~gilntu/">
              <img src="/img/clients/ntugil.png" className="img-fluid" style={{width: "140px"}} alt=""/>
            </a>
            <h4 style={{fontWeight: "600"}}>Organizer</h4>
            <p>Graduate Institute of Linguistics, National Taiwan University</p>
          </div>
      
          <div className="col-lg-3 col-md-4 col-6 d-flex flex-column justify-content-center mx-3 mb-4">
            <a href="https://www.aca.ntu.edu.tw/w/aca/index">
              <img src="/img/clients/ntu.png" className="img-fluid" style={{width: "140px"}} alt=""/>
            </a>
            <h4 style={{fontWeight: "600"}}>Co-organizer</h4>
            <p>College of Liberal Arts, National Taiwan University</p>
          </div>
      
          <div className="col-lg-3 col-md-4 col-6 d-flex flex-column justify-content-center mx-3 mb-4">
            <a href="https://www.k12ea.gov.tw/ap/index.aspx">
              <img src="/img/clients/edu.png" className="img-fluid" alt="" style={{width: "140px"}}/>
            </a>
            <h4 style={{fontWeight: "600"}}>Advisor</h4>
            <p>K-12 Education Administration, Ministry of Education</p>
          </div>
    
        </div>
      </div>
    </section>

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Our Team</h2>
          <p >The Organizing Committee</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Grace_Kuo.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Grace Kuo</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Chien-Chih_Ken_Lin.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Chien-Chih (Ken) Lin</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Chenhao_Chiu.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Chenhao Chiu</h4>
                <span>Public Relation and Finance</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Claire_Chou.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Claire Chou</h4>
                <span>Public Relation and Finance</span>
              </div>
            </div>
          </div>

          
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Yu-Wei_Edward_Chu.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Yu-Wei (Edward) Chu</h4>
                <span>Public Relation and Finance</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>賴彥甫</h4>
                <span>Promotion</span>
              </div>
            </div>
          </div>


          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>雷翔宇</h4>
                <span>Problem Committee</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    </main>
  );
}
