import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donation - Taiwan Olympiad in Linguistics",
};

export default function Donation() {
  return (
    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>Donation</h2>
                    <ol>
                        <li><a href="/zh/">Home</a></li>
                        <li>Donation</li>
                    </ol>
                </div>

            </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <p>TOL needs your support!</p>
            </div>
            <div>
              <p>
              Since 2016, with the contribution from the K-12 Education Administration of the Ministry of Education, the Language Training and Testing Center (LTTC), and dedicated parents, TOL has continued to strive. Every year, the national team members make their best efforts to bring glory to Taiwan.
              </p>

              <p>
                <strong>
                We sincerely appreciate the continued support from all sides. With your help, Taiwan Olympiad in Linguistics will certainly shine brighter!
                </strong>

              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <img src="/img/donation/2024_IOL_TW_Team.jpg"  className="img-fluid" alt="2024_IOL_TW_Team"/>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <p>Information</p>
            </div>

            <ul className="list-group">
              <li className="list-group-item border-0">
                <h5><strong>1. NTU Giving Form</strong></h5>
                <p>Code: FD105008</p>
                <p>Donation Purpose: Taiwan_Olympiad_of_Linguistics_Talent_Cultivation_Project</p>
                <a href="https://my.ntu.edu.tw/donation2/donationFormTW.aspx?dit=87" className="btn btn-outline-danger">Chinese</a>
                <a href="https://my.ntu.edu.tw/donation2/donationFormUS.aspx?dit=87" className="btn btn-outline-danger">English</a>
              </li>


              <li className="list-group-item border-0">
                <h5><strong>2. 台灣語言文化與資訊協會</strong></h5>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0"><strong>Bank Name: </strong>E.SUN Bank NTU branch</li>
                  <li className="list-group-item border-0"><strong>Accout Name: </strong>台灣語言文化與資訊協會</li>
                  <li className="list-group-item border-0"><strong>Account No.: </strong>808-0624-940-151025</li>
                </ol>
              </li>
            </ul>

          </div>
        </section>

    </main>
  );
}
