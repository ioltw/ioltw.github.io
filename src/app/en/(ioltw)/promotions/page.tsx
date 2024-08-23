import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotions - Taiwan Olympiad in Linguistics",
};

export default function Promotions() {
  return (
    <main id="main">

      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Promotions</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Promotions</li>
            </ol>
          </div>
        </div>
      </section>

      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">Promotional Activities</li>
                <li data-filter=".filter-card">Media Reports</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/lingpuz/lingpuz-post.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Linguistic Puzzle Marathon</h4>
                  <p>Promotional Activities</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/lingpuz/lingpuz-post.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/lingpuz"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/iolnews/2024groupphoto.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>
                    2024 Taiwan Team Wins Three Silver, One Bronze, and One
                    Honorable Mention in the Individual Contest, and a Bronze
                    Medal in the Team Contest!
                  </h4>
                  <p>Media Reports</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/iolnews/2024groupphoto.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/iolnews"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/scifair/fair2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>High School Linguistics Science Fair</h4>
                  <p>Promotional Activities</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/scifair/fair2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/scifair"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/hackathon/poster-21.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Linguistic Analysis Hackathon</h4>
                  <p>Promotional Activities</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/hackathon/poster-21.png"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/hackathon"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/langcutech/375813664_714836447344051_5323393243808976661_n.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>A Tour in Linguistics</h4>
                  <p>Promotional Activities</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/langcutech/375813664_714836447344051_5323393243808976661_n.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/langcutech"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/tutorialvideos/thumbnail.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>TOL Puzzle-Solving Video Series</h4>
                  <p>Media Reports</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/tutorialvideos/thumbnail.png"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/tutorialvideos"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/img/promotions/highschool/ne.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Campus Outreach</h4>
                  <p>Promotional Activities</p>
                  <div className="portfolio-links">
                    <a
                      href="/img/promotions/highschool/ne.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="/en/promotions/detail/highschool"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                    >
                      <i className="bx bx-link"></i>
                    </a>
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
