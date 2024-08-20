import { Metadata } from "next";

export const metadata: Metadata = {
  title: "常見問題 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function Faq() {
  return (
    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>常見問題</h2>
                    <ol>
                        <li><a href="/zh/">首頁</a></li>
                        <li>常見問題</li>
                    </ol>
                </div>

            </div>
        </section>

        <section className="faq">
          <div className="container">
              <ul className="list-group">
                  <li className="list-group-item border-0">
                    <a href="/pdf/TOLQA.pdf" target="_blank" className="btn btn-outline-danger">閱讀 【台灣語奧答客問】 👀 </a>
                </li>
                <li className="list-group-item border-0">
                    <div>
                        <h4 className="my-3">Q：我對語言學沒有特別了解，這樣我還可以參加「台灣國手選拔賽（TOL）」嗎？</h4>
                        <p>當然可以！</p>
                        <p>參加語奧唯一的資格限制就是「必須是國一到高三的在學學生」，只要符合資格就可以來玩玩看啦！</p>
                        <p>比起其他奧賽，語奧主打「不需要特別的語言學知識」，需要的就是清晰的邏輯思考能力以及不畏挑戰的恆毅力。只要你/妳願意試試看，都非常歡迎！</p>
                    </div>
                </li>
                <li className="list-group-item border-0">
                    <div>
                        <h4 className="my-3">Q：我對語言學奧林匹亞競賽很有興趣，請問我該怎麼準備？</h4>
                        <p><strong>練考古題！練考古題！練考古題！</strong></p>
                        <p>建議大家可以從我們網站上的題目（不需要特別的語言學知識）開始，或是參考本頁的「相關連結」提供的資源，試著解解看，先有語奧的感覺。</p>
                        <p>做完題目後，若對語言學知識有興趣了，再找一些相關的書籍來補充相關知識。</p>
                        <p>此外，也提供<a href="https://www.uklo.org/students-room/">英國語奧的準備建議</a>供大家參考。</p>
                    </div>
                </li>
                <li className="list-group-item border-0">
                    <div>
                        <h4 className="my-3">Q：請問「台灣國手選拔賽（TOL）」有具體的計分方式嗎？會不會有需要寫出解釋的題目？</h4>
                        <p>由於語奧的題目很多元，每個題目所要求要完成的任務也不盡相同，因此，也很有可能會出現需要寫出解釋的題目。</p>
                        <p>至於計分方式則是依據每年的試題與出題委員的決議而定，基本上是完成題目指定任務即給分。</p>
                    </div>
                </li>
            </ul>
          </div>
        </section>

    </main>
  );
}