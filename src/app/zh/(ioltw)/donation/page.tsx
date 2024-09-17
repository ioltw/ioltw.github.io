import { Metadata } from "next";

export const metadata: Metadata = {
  title: "捐款贊助 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function Donation() {
  return (
    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>捐款贊助</h2>
                    <ol>
                        <li><a href="/zh/">首頁</a></li>
                        <li>捐款贊助</li>
                    </ol>
                </div>

            </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <p>台灣語奧需要您的支持！</p>
            </div>
            <div>
              <p>
                從 2016 開始，在教育部國教署、財團法人語言訓練測驗中心（LTTC）等贊助單位、熱心的家長們一直以來的支持下，台灣語奧才能一路順利走到今天。每一年的參賽，國手們總是全力以赴，為國爭光。
              </p>

              <p>
                <strong>
                  台灣語奧一直以來多受四方的悉心關照，透過大家的實質資助，台灣語奧定將能飛得更高、更遠、更耀眼！
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
              <p>匯款資訊</p>
            </div>

            <ul className="list-group">
              <li className="list-group-item border-0">
                <h5><strong>一、國立台灣大學捐款系統</strong></h5>
                <p>指定捐贈計畫代碼: FD105008</p>
                <p>計畫名稱：捐獻培養語言學人才暨辦理語言學相關學術活動專用款</p>
                <a href="https://my.ntu.edu.tw/donation2/donationFormTW.aspx?dit=87" className="btn btn-outline-danger">中文網址</a>
                <a href="https://my.ntu.edu.tw/donation2/donationFormUS.aspx?dit=87" className="btn btn-outline-danger">英文網址</a>
              </li>


              <li className="list-group-item border-0">
                <h5><strong>二、台灣語言文化與資訊協會</strong></h5>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0"><strong>銀行：</strong>玉山銀行台大分行</li>
                  <li className="list-group-item border-0"><strong>戶名：</strong>台灣語言文化與資訊協會</li>
                  <li className="list-group-item border-0"><strong>捐款帳號：</strong>808-0624-940-151025</li>
                </ol>
              </li>
            </ul>

          </div>
        </section>

    </main>
  );
}
