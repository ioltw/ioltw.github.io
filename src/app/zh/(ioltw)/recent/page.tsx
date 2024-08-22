import { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新消息 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function Recent() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>最新消息</h2>
          <ol>
            <li><a href="/">首頁</a></li>
            <li>最新消息</li>
          </ol>
        </div>

      </div>
    </section>

    

    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title">
          <p>最新消息</p>
        </div>
        
        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/08/18　IOL 2024 國際語奧台灣隊獲個人賽三銀一銅一佳作、團體賽一銅佳績！</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              恭喜台灣隊的國手們！新聞報導：<br/>
              <a href="https://www.cna.com.tw/news/aopl/202407310039.aspx">【中央社新聞】國際語奧台灣隊大放異彩 勇奪多項榮譽</a><br/>
              <a href="https://sec.ntu.edu.tw/epaper/article.asp?num=1612&sn=29180">【臺大校訊】臺大教授帶領臺灣代表隊勇奪「2024國際語言學奧林匹亞競賽」佳績並取得2025主辦權</a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/07/05　第三屆臺灣中學生語言科學科展 開始報名！</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              有興趣做語言學／語言科學的探索嗎？快來報名科展把你的發現分享給大家！<br/>
							歡迎點選：<a href="https://ioltw.github.io/scifair-2024/">【第三屆科展網站】</a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/06/04　第一&第二屆語言解謎鐵人賽【試題及參考解答】</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              <a href="https://drive.google.com/drive/u/0/folders/1tGe6TU9UxLISKfsq7jnQ0szTA5PdK63L">【試題及參考解答】</a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/05/30　第二屆語言解謎鐵人賽【活動花絮】</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              第二屆語言解謎鐵人賽於2024/05/25（六）順利舉辦，相信大家在三小時的合作解謎中都對語言學有更深的投入跟了解，歡迎大家透過我們的花絮影像回顧這次比賽，也歡迎繼續支持台灣語奧、語言學科展以及語言解謎鐵人賽！
              <a href="https://drive.google.com/drive/u/0/folders/1IbExfv24ihhGj-KSAADmbPd4Y4xt9BI-">【照片&影片】</a>
              <br/>
              <iframe src="https://drive.google.com/file/d/1JO7I7L3-mTZ4IHPeh22whwc8-ghWeavb/preview" width="640" height="360" allow="autoplay"></iframe>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className='bx bxs-pin'></i>
            <h4><b>2024/04/25　國際語奧 IOL2024 臺灣代表隊【國手錄取名單】</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              恭喜台灣隊獲得 2024 亞太語奧 1 金 3 銀 4 銅， 與中國、日本隊並列第一！！<a href="https://aplo.asia/results/aplo-2024-results/">【亞太語奧官方成績】</a><a href="/img/recent_attachments/TOL2024_team_and_APLO2024_rank.pdf">【臺灣國手名單】</a>
              <br/>
              <a href="/img/recent_attachments/APLO2024_results.jpg" target="_blank"><img src="/img/recent_attachments/APLO2024_results.jpg" alt="APLO2024_results" title="APLO2024_results" style={{width: "60%"}}/></a>
            </p>
          </div>
        </div>

        <div className="row faq-item d-flex align-items-stretch">
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4><b>... 更早以前的消息</b></h4>
          </div>
          <div className="col-lg-7">
            <p>
              請見 <a href="https://lope.linguistics.ntu.edu.tw/ioltw/zh/">【臺灣語奧舊版網站】</a>
            </p>
          </div>
        </div>

      </div>
    </section>

  </main>
  );
}