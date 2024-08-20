import { Metadata } from "next";

export const metadata: Metadata = {
  title: "歷屆試題 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function PreviousProblems() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>歷屆試題</h2>
          <ol>
            <li><a href="/zh/">首頁</a></li>
            <li>學生專區</li>
            <li>歷屆試題</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="section-title col-lg-5">
            <p>台灣語奧初選歷屆試題</p>
          </div>
          <div className="col-lg-7">
            <ul>
              <li><i className="ri-check-double-line"></i> 2016~2022年，試題皆以「正體中文」出題並附上英文翻譯，參賽者得以中文或英文作答。</li>
              <li><i className="ri-check-double-line"></i> 2023年起，試題分為中文與英文，參賽者於報名時選擇作答語言，並只能以該語言作答。</li>
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
              <h4>2024 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_1st_round_zh.pdf" className="btn btn-outline-danger">題目(正體中文)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_1st_round_en.pdf" className="btn btn-outline-danger">Problem(English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_solutions_zh.pdf" className="btn btn-outline-danger">解答(正體中文)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_solutions_en.pdf" className="btn btn-outline-danger">Solution(English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2024_Sta_Report.pdf" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2023 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_1st_round_zh.pdf" className="btn btn-outline-danger">題目(正體中文)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_1st_round_en.pdf" className="btn btn-outline-danger">Problem(English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_solutions_zh.pdf" className="btn btn-outline-danger">解答(正體中文)</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_solutions_en.pdf" className="btn btn-outline-danger">Solution(English)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2023_Sta_Report.pdf" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2022 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_1st_round.pdf" className="btn btn-outline-danger">題目</a>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_1st_round_revised.pdf" className="btn btn-outline-danger">題目(修訂版)</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_solutions.pdf" className="btn btn-outline-danger">解答</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2022_Sta_Report.pdf" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2021 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2021_1st_round.pdf" className="btn btn-outline-danger">題目</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2021_solutions.pdf" className="btn btn-outline-danger">解答</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2021_Sta_Report.pdf" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2020 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2020_1st_round.pdf" className="btn btn-outline-danger">題目</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2020_solutions.pdf" className="btn btn-outline-danger">解答</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2020_Sta_Report.pdf" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2019 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2019_1st_round.pdf" className="btn btn-outline-danger">題目</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2019_solutions.pdf" className="btn btn-outline-danger">解答</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2019_Sta_Report.pdf" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2018 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2018_1st_round.pdf" className="btn btn-outline-danger">題目</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2018_solutions.pdf" className="btn btn-outline-danger">解答</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-bar-chart"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/zh/3years_w.html" className="btn btn-outline-danger">統計資料</a>
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
              <h4>2017 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2017_problemset.pdf" className="btn btn-outline-danger">題目</a>
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
              <h4>2016 全國初選</h4>
              <div className="icon-row">
                <div>
                  <i className="bi bi-card-text"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2016_problemset.pdf" className="btn btn-outline-danger">題目</a>
                  </div>
                </div>
                <div>
                  <i className="bi bi-card-checklist"></i>
                  <div className="button-group">
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/problems/TOL2016_solutions.pdf" className="btn btn-outline-danger">解答</a>
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