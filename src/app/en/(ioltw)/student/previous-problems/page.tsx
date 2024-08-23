import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Problems - Taiwan Olympiad in Linguistics",
};

export default function PreviousProblems() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Past Problems</h2>
          <ol>
            <li><a href="/en/">Home</a></li>
            <li>For Students</li>
            <li>Past Problems</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="section-title col-lg-5">
            <p>TOL Past Problems</p>
          </div>
          <div className="col-lg-7">
            <ul>
              <li><i className="ri-check-double-line"></i> From 2016 to 2022, problems were set in "Traditional Chinese" with English translations, and participants could answer in either Chinese or English.</li>
              <li><i className="ri-check-double-line"></i> From 2023 onwards, problems are provided in both Chinese and English. Participants choose their language of response at registration and must answer in that language.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2024 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_1st_round_zh.pdf" className="btn btn-outline-danger">Problems (Traditional Chinese)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_1st_round_en.pdf" className="btn btn-outline-danger">Problems (English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_solutions_zh.pdf" className="btn btn-outline-danger">Solutions (Traditional Chinese)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_solutions_en.pdf" className="btn btn-outline-danger">Solutions (English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_Sta_Report.pdf" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for other years --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2023 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_1st_round_zh.pdf" className="btn btn-outline-danger">Problems (Traditional Chinese)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_1st_round_en.pdf" className="btn btn-outline-danger">Problems (English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_solutions_zh.pdf" className="btn btn-outline-danger">Solutions (Traditional Chinese)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_solutions_en.pdf" className="btn btn-outline-danger">Solutions (English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_Sta_Report.pdf" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2022 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2022 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_1st_round.pdf" className="btn btn-outline-danger">Problems</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_1st_round_revised.pdf" className="btn btn-outline-danger">Problems (Revised)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_solutions.pdf" className="btn btn-outline-danger">Solutions</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_Sta_Report.pdf" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2021 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2021 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2021_1st_round.pdf" className="btn btn-outline-danger">Problems</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2021_solutions.pdf" className="btn btn-outline-danger">Solutions</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2021_Sta_Report.pdf" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2020 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2020 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2020_1st_round.pdf" className="btn btn-outline-danger">Problems</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2020_solutions.pdf" className="btn btn-outline-danger">Solutions</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2020_Sta_Report.pdf" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2019 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2019 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2019_1st_round.pdf" className="btn btn-outline-danger">Problems</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2019_solutions.pdf" className="btn btn-outline-danger">Solutions</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2019_Sta_Report.pdf" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2018 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2018 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2018_1st_round.pdf" className="btn btn-outline-danger">Problems</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2018_solutions.pdf" className="btn btn-outline-danger">Solutions</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/zh/3years_w.html" className="btn btn-outline-danger">Statistical Data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2017 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2017 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2017_problemset.pdf" className="btn btn-outline-danger">Problems</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for 2016 --> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="icon-box">
              <h4>2016 National Preliminary Round</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2016_problemset.pdf" className="btn btn-outline-danger">Problems</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2016_solutions.pdf" className="btn btn-outline-danger">Solutions</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
  );
}
