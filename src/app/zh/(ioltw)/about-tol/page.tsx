import { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於 TOL - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function AboutTol() {
  return (
    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>關於 TOL</h2>
                    <ol>
                        <li><a href="/zh/">首頁</a></li>
                        <li>關於 TOL</li>
                    </ol>
                </div>

            </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        <section>
          <div className="container">
            <div className="section-title">
              <p>TOL 是什麼？</p>
            </div>
            <div>
              <p>
                「國際語言學奧林匹亞競賽 (IOL) 」自 2003 年開始輪流在各國舉辦，但在台灣卻一直不為人知。直到 2015 年，台灣唯一的個人參賽學生摘下銅牌與一項最佳答案奬，才開始有越來越多人注意到。
              </p>

              <p>
                根據國際語奧規章，獲 IOL 認證的參賽國必須舉辦全國競賽遴選國家代表隊選手。因此，台灣國手選拔賽（Taiwan Olympiad in Linguistics, 簡稱 TOL）於 2016 年應運而生。
              </p>

              <p>
                <strong>
                  台灣國手選拔賽（TOL）是一項給中學生的語言謎題解題競賽。競賽試題僅需以邏輯推理能力、耐心以及持續思考的意願來解題，語言學相關的先備知識或是第二外語都不是必要的。
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <p>TOL 怎麼玩？</p>
            </div>

            <ul className="list-group">
              <li className="list-group-item border-0">
                <h5><strong>TOL 參賽資格</strong></h5>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0">我國政府核准立案之中學、海外僑校及臺商學校等在學學生(七年級至高中三年級)。</li>
                  <li className="list-group-item border-0">2026 年 7 月 1 日之時點未滿 20 歲。</li>
                  <li className="list-group-item border-0">不具全球任一大專院校之學生身分，且不曾就讀於全球任一大專院校。</li>
                </ol>
              </li>
              
               <p>
                <strong>
                  說明：不符合第一項規定，但符合第二項、第三項規定者，如自學生等，得逕向主辦單位提出申請，由主辦單位裁量選拔資格。
                </strong>
              </p>

              <li className="list-group-item border-0">
                <h5><strong>TOL 競賽方式</strong></h5>
                <p>
                  紙筆測驗，試題以「正體中文」、「英文」出題，參賽者得以選一語言版本並以該語言作答。
                </p>
              </li>

              <li className="list-group-item border-0">
                <h5><strong>TOL 選拔機制</strong></h5>
                <p>
                  每年舉辦一次，包含初賽、複賽、決賽（即亞太語奧），且 TOL 選拔初賽中表現優異，或獲各高中推薦者，可參與當年度之一階國手培訓課程，於複賽及決賽角逐正式國手之位，詳細流程請見下方報名資訊。
                </p>
              </li>

              <li className="list-group-item border-0">
                <h5><strong>TOL 報名資訊</strong></h5>
                <p>
                  預計每年年底左右公告。
                </p>
                <a href="/pdf/2026TOL_rules.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">2026國際語言學奧林匹亞競賽台灣國手選拔賽說明簡章</a>
                <a href="/pdf/2026TOL_nomination.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">2026國際語言學奧林匹亞競賽臺灣國手學校推薦辦法</a>
                <a href="/pdf/2026TOL_nomination2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">2026國際語言學奧林匹亞競賽臺灣國手自學生推薦辦法</a>
                <a href="https://forms.gle/KNzQQDBM4wLgk3yM9" className="btn btn-outline-danger">前往台灣語奧全國初選報名系統</a>
              </li>
            </ul>

          </div>
        </section>

    </main>
  );
}
