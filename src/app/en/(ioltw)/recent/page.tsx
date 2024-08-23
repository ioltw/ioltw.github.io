import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News - Taiwan Olympiad in Linguistics",
};

export default function Recent() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Latest News</h2>
          <ol>
            <li><a href="/en/">Home</a></li>
            <li>Latest News</li>
          </ol>
        </div>

      </div>
    </section>

    

    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title">
          <p>Latest News</p>
        </div>
        
        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/08/18　Taiwan Team Wins Three Silver, One Bronze, and One Honorable Mention in Individual Competition and One Bronze in Team Competition at IOL 2024!</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              Congratulations to the Taiwan team members! News reports:<br/>
              <a href="https://www.cna.com.tw/news/aopl/202407310039.aspx">【CNA News】國際語奧台灣隊大放異彩 勇奪多項榮譽</a><br/>
              <a href="https://sec.ntu.edu.tw/epaper/article.asp?num=1612&sn=29180">【NTU epaper】臺大教授帶領臺灣代表隊勇奪「2024國際語言學奧林匹亞競賽」佳績並取得2025主辦權</a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/07/05　Registration Open for the Third Taiwan High School Linguistics Science Fair!</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
            Interested in exploring linguistics and language science? Sign up for the science fair and share your discoveries with everyone!<br/>
            Click here:<a href="https://ioltw.github.io/scifair-2024/">【Third Science Fair Website】</a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/06/04　Problems and Solutions for the First and Second Editions of the Linguistic Puzzle Marathon Now Available</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              <a href="https://drive.google.com/drive/u/0/folders/1tGe6TU9UxLISKfsq7jnQ0szTA5PdK63L">【Problems and Solutions】</a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/05/30　Highlights from the Second Linguistic Puzzle Marathon</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              The Second Linguistic Puzzle Marathon was successfully held on Saturday, May 25, 2024. We believe that everyone gained a deeper understanding and appreciation of linguistics through the three hours of collaborative puzzle-solving. We invite you to revisit the event through our highlight video and photos, and we hope you will continue to support the TOL, the Linguistics Science Fair, and the Linguistic Puzzle Marathon!
              <a href="https://drive.google.com/drive/u/0/folders/1IbExfv24ihhGj-KSAADmbPd4Y4xt9BI-">【Photos & Videos】</a>
              <br/>
              <iframe src="https://drive.google.com/file/d/1JO7I7L3-mTZ4IHPeh22whwc8-ghWeavb/preview" width="640" height="360" allow="autoplay"></iframe>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/04/25　Taiwan Team Selected for IOL 2024 【National Team Selection List】</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
            Congratulations to the Taiwan team for winning 1 gold, 3 silver, and 4 bronze medals at the 2024 Asia Pacific Linguistics Olympiad (APLO), tying for first place with teams from China and Japan!!<a href="https://aplo.asia/results/aplo-2024-results/">【Official APLO Results】</a><a href="/img/recent_attachments/TOL2024_team_and_APLO2024_rank.pdf">【Taiwan National Team Selection List】</a>
              <br/>
              <a href="/img/recent_attachments/APLO2024_results.jpg" target="_blank"><img src="/img/recent_attachments/APLO2024_results.jpg" alt="APLO2024_results" title="APLO2024_results" style={{width: "60%"}}/></a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4><b>... Earlier News</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              Please visit the <a href="https://lope.linguistics.ntu.edu.tw/ioltw/zh/">【Old TOL Website】</a>
            </p>
          </div>
        </div>

      </div>
    </section>

  </main>
  );
}