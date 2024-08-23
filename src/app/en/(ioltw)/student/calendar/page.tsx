import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar - Taiwan Olympiad in Linguistics",
};

export default function Calendar() {
  return (
    <main id="main">

      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Calendar</h2>
            <ol>
              <li><a href="/en/">Home</a></li>
              <li>For Students</li>
              <li>Calendar</li>
            </ol>
          </div>

        </div>
      </section>

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <p>TOL Calendar</p>
          </div>
        </div>
      </section>
      
      <div className="container">
        <h1 className="mb-5"><i className="bi bi-calendar3 me-2"></i>Important Dates in 2024</h1>
        <div className="timeline position-relative">
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">December 2023 - January 2024</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-pencil-square me-2"></i>Online Registration & Payment</h5>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">February 2024</div>
              <div className="text-muted">February 18</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-person-lines-fill me-2"></i>National Preliminary Round</h5>
                <p className="card-text"><small className="text-muted">College of Liberal Arts, National Taiwan University</small></p>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">February 2024</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-megaphone me-2"></i>Announcement of Selected Participants</h5>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">April 2024</div>
              <div className="text-muted">April 7</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-people me-2"></i>APLO 2024</h5>
                <p className="card-text"><small className="text-muted">Graduate Institute of Linguistics, National Taiwan University</small></p>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">July 2024</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-award me-2"></i>National Team Training Camp</h5>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">July 2024 - August 2024</div>
              <div className="text-muted">July 22 - August 2</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-globe me-2"></i>International Linguistics Olympiad</h5>
                <p className="card-text"><small className="text-muted">Brasília, Brazil</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="mb-5"><i className="bi bi-calendar3 me-2"></i>Important Dates in 2023</h1>
        <div className="timeline position-relative">
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">December 2022 - January 2023</div>
              <div className="text-muted">December 1 - January 15</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-pencil-square me-2"></i>Online Registration & Payment</h5>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">February 2023</div>
              <div className="text-muted">February 11</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-person-lines-fill me-2"></i>National Preliminary Round</h5>
                <p className="card-text"><small className="text-muted">College of Liberal Arts, National Taiwan University</small></p>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">February 2023</div>
              <div className="text-muted">February 25</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-megaphone me-2"></i>Announcement of Selected Participants</h5>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">April 2023</div>
              <div className="text-muted">April 9</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-people me-2"></i>APLO 2023</h5>
                <p className="card-text"><small className="text-muted">Graduate Institute of Linguistics, National Taiwan University</small></p>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">July 2023</div>
              <div className="text-muted">July 10 - July 14</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-award me-2"></i>National Team Training Camp</h5>
              </div>
            </div>
          </div>
          <div className="timeline-item mb-5">
            <div className="d-flex align-items-center mb-2">
              <div className="h4 fw-bold text-secondary me-3">July 2023</div>
              <div className="text-muted">July 23 - July 29</div>
            </div>
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-globe me-2"></i>International Linguistics Olympiad</h5>
                <p className="card-text"><small className="text-muted">Bansko, Bulgaria</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
