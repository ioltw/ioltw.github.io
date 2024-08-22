import { Metadata } from "next";

export const metadata: Metadata = {
  title: "推廣影音 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function Promotions() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>推廣影音</h2>
          <ol>
            <li><a href="/">首頁</a></li>
            <li>推廣影音</li>
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
              <li data-filter="*" className="filter-active">全部</li>
              <li data-filter=".filter-app">推廣活動</li>
              <li data-filter=".filter-card">影音報導</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="/img/promotions/lingpuz/lingpuz-post.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>語言解謎鐵人賽</h4>
                <p>推廣活動</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/lingpuz/lingpuz-post.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/lingpuz" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="/img/promotions/iolnews/2024groupphoto.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>2024 年國際語奧台灣代表隊勇奪個人賽三銀一銅一佳作、團體賽銅牌！</h4>
                <p>影音報導</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/iolnews/2024groupphoto.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/iolnews" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="/img/promotions/scifair/fair2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>中學生語言科學科展</h4>
                <p>推廣活動</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/scifair/fair2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/scifair" className="portfolio-details-lightbox" data-glightbox="type: external"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="/img/promotions/hackathon/poster-21.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>語言分析黑客松</h4>
                <p>推廣活動</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/hackathon/poster-21.png" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/hackathon" className="portfolio-details-lightbox" data-glightbox="type: external"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="/img/promotions/langcutech/375813664_714836447344051_5323393243808976661_n.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>語言探索之旅</h4>
                <p>推廣活動</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/langcutech/375813664_714836447344051_5323393243808976661_n.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/langcutech" className="portfolio-details-lightbox" data-glightbox="type: external"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="/img/promotions/tutorialvideos/thumbnail.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>TOL 解題分享系列影片</h4>
                <p>影音報導</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/tutorialvideos/thumbnail.png" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/tutorialvideos" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="/img/promotions/highschool/ne.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>前進校園分享</h4>
                <p>推廣活動</p>
                <div className="portfolio-links">
                  <a href="/img/promotions/highschool/ne.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
                  <a href="/zh/promotions/detail/highschool" className="portfolio-details-lightbox" data-glightbox="type: external"><i className="bx bx-link"></i></a>
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