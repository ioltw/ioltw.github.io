import { Metadata } from "next";

export const metadata: Metadata = {
  title: "行事曆 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function Calendar() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>行事曆</h2>
          <ol>
            <li><a href="/zh/">首頁</a></li>
            <li>學生專區</li>
            <li>行事曆</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <p>台灣語奧行事曆</p>
        </div>
      </div>
    </section>
    
    <div className="container">
        <h1 className="mb-5"><i className="bi bi-calendar3 me-2"></i>2024年重要日程</h1>
        <div className="timeline position-relative">
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2023年12月 - 2024年1月</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-pencil-square me-2"></i>線上報名繳費</h5>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2024年2月</div>
                    <div className="text-muted">2月18日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-person-lines-fill me-2"></i>全國初選</h5>
                        <p className="card-text"><small className="text-muted">台灣大學文學院</small></p>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2024年2月</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-megaphone me-2"></i>公佈入選名單</h5>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2024年4月</div>
                    <div className="text-muted">4月7日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-people me-2"></i>APLO 2024</h5>
                        <p className="card-text"><small className="text-muted">台大語言學研究所</small></p>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2024年7月</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-award me-2"></i>國手集訓營</h5>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2024年7月 - 2024年8月</div>
                    <div className="text-muted">7月22日至8月2日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-globe me-2"></i>國際語言奧林匹亞</h5>
                        <p className="card-text"><small className="text-muted">巴西 Brasília</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <h1 className="mb-5"><i className="bi bi-calendar3 me-2"></i>2023年重要日程</h1>
        <div className="timeline position-relative">
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2022年12月 - 2023年1月</div>
                    <div className="text-muted">12月1日至1月15日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-pencil-square me-2"></i>線上報名繳費</h5>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2023年2月</div>
                    <div className="text-muted">2月11日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-person-lines-fill me-2"></i>全國初選</h5>
                        <p className="card-text"><small className="text-muted">台灣大學文學院</small></p>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2023年2月</div>
                    <div className="text-muted">2月25日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-megaphone me-2"></i>公佈入選名單</h5>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2023年4月</div>
                    <div className="text-muted">4月9日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-people me-2"></i>APLO 2023</h5>
                        <p className="card-text"><small className="text-muted">台大語言學研究所</small></p>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2023年7月</div>
                    <div className="text-muted">7月10日至7月14日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-award me-2"></i>國手集訓營</h5>
                    </div>
                </div>
            </div>
            <div className="timeline-item mb-5">
                <div className="d-flex align-items-center mb-2">
                    <div className="h4 fw-bold text-secondary me-3">2023年7月</div>
                    <div className="text-muted">7月23日至7月29日</div>
                </div>
                <div className="card border-light shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-globe me-2"></i>國際語言奧林匹亞</h5>
                        <p className="card-text"><small className="text-muted">保加利亞 Bansko</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </main>
  );
}