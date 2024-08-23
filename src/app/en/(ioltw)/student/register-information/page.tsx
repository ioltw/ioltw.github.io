import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration - Taiwan Olympiad in Linguistics",
};

export default function RegisterInformation() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Registration</h2>
          <ol>
            <li><a href="/en/">Home</a></li>
            <li>For Students</li>
            <li>Registration</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="section-title col-lg-7">
            <p>Registration for the Taiwan Linguistics Olympiad</p>
          </div>
          <div className="col-lg-5">
            <ul>
              <li><i className="ri-check-double-line"></i> Do you want to represent Taiwan to compete with the brilliant minds in linguistics from around the world?</li>
              <li><i className="ri-check-double-line"></i> Are you interested in solving more diverse types of linguistics puzzles?</li>
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
              <h3>1. Participate in the "National Preliminary - Taiwan National Selection (TOL)"</h3>
              <h4>After online registration and payment, confirm your eligibility to compete for the first stage of national selection.</h4>
              <a href="https://lope.linguistics.ntu.edu.tw/ioltw/TOL-Regulation.pdf" className="btn btn-outline-danger" style={{marginLeft: "80px"}}>Read the [Taiwan National Selection Regulations] 👀 </a>
              <a href="https://reg.ioltw.org/" className="btn btn-outline-danger" style={{marginLeft: "40px"}}>Go to Taiwan Linguistics Olympiad National Preliminary Registration System</a>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for other years --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h3>2. Complete the First Stage National Team Training Course and Participate in the Final Selection Test</h3>
              <h4>Those selected in the first stage must attend the first stage training course to participate in the final selection test (i.e., the Asia-Pacific Linguistics Olympiad, which is included in the scoring). Official national team members will be selected based on accumulated scores and announced.</h4>
              <a href="https://aplo.asia/" className="btn btn-outline-danger" style={{marginLeft: "80px"}}>Asia-Pacific Linguistics Olympiad (APLO)</a>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2022 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h3>3. Participate in Official National Team Training & Camp</h3>
              <h4>As an official national team member, you must participate in official training and pre-competition camp, including various mock competitions and team collaboration training before going abroad.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
