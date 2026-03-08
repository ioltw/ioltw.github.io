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

      <div className="container">

        <h2 style={{fontWeight: "700"}}>Organizers</h2>
        
        <div className="row d-flex justify-content-center">
          
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://homepage.ntu.edu.tw/~gilntu/">
              <img src="/img/clients/ntugil.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 className="fw-normal fs-5">Graduate Institute of Linguistics, National Taiwan University</h4>
          </div>
      
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <h4 className="fw-normal fs-5">Taiwan Language, Culture and Information Association</h4>
          </div>
        </div>

        <div className="my-4"></div>
        <div className="my-4"></div>

        <h2 style={{fontWeight: "700"}}>Advisor</h2>
        
        <div className="row d-flex justify-content-center">
             
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://www.k12ea.gov.tw/En/">
              <img src="/img/clients/edu.png" className="img-fluid" alt="" style={{width: "100px"}}/>
            </a>
            <h4 className="fw-normal fs-5">K-12 Education Administration, Ministry of Education</h4>
          </div>
       </div>

        <div className="my-4"></div>
        <div className="my-4"></div>
        
        <h2 style={{fontWeight: "700"}}>Co-organizers</h2>
        
        <div className="row d-flex justify-content-center">

          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://linguist.tw/en/">
              <img src="/img/clients/lst2.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 className="fw-normal fs-5">Linguistic Society of Taiwan</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://liberal.ntu.edu.tw/home.jsp?lang=en">
              <img src="/img/clients/ntu.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 className="fw-normal fs-5">College of Liberal Arts, National Taiwan University</h4>
          </div>
      
          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://fll.fcu.edu.tw/en/">
              <img src="/img/clients/Feng_Chia.png" className="img-fluid" style={{width: "100px"}} alt=""/>
            </a>
            <h4 className="fw-normal fs-5">Department of Foreign Languages and Literature, Feng Chia Univeristy</h4>
          </div>
      
         
          <div className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center mb-4">
            <a href="https://zephyr.nsysu.edu.tw/index.php">
              <img src="/img/clients/Sun_Yat-Sen.png" className="img-fluid" alt="" style={{width: "100px"}}/>
            </a>
            <h4 className="fw-normal fs-5">Department of Foreign Languages and Literature, National Sun Yat-sen University</h4>
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

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Janice_Fon.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Janice Fon</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Shu-Kai_Hsieh.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Shu-Kai Hsieh</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Grace_Kuo.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Grace Kuo</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Haowen_Jiang.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Haowen Jiang</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Su-ying_Hsiao.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Su-ying Hsiao</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Sally_Chen.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sally Chen</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Shuping_Huang.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Shuping Huang</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Li-Bang_Chen.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Li-Bang Chen</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Elio_Huang.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Elio Huang</h4>
                <span>Administration</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/Anya_Ho.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Anya Ho</h4>
                <span>Public Relation and Finance</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Yen-Fu Lai</h4>
                <span>Promotion</span>
              </div>
            </div>
          </div>


          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="/img/team/user.png" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Hsiang-Yu Lei</h4>
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
