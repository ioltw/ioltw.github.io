import { Metadata } from "next";

export const metadata: Metadata = {
  title: "學習資源 - 臺灣語言學奧林匹亞 Taiwan Olympiad in Linguistics",
};

export default function LearningResources() {
  return (<main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>學習資源</h2>
          <ol>
            <li><a href="/zh/">首頁</a></li>
            <li>學生專區</li>
            <li>學習資源</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="section-title col-lg-5">
            <p>語奧類型題目學習資源</p>
          </div>
          <div className="col-lg-7">
            <ul>
              <li><i className="ri-check-double-line"></i> 以下集結我們在 FB 社團中分享過的相關資源供大家參考。</li>
              <li><i className="ri-check-double-line"></i> 希望對大家準備語言學奧林匹亞競賽有些幫助。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
        <div className="container">
  
          <div className="row">
            <div className="col-md-6">
              <div className="icon-box">
                <i className="bi bi-book"></i>
                <h4><a href="#">推薦書籍</a></h4>
                <div className="icon-ul">
                    <ul>
                        <li>
                    <a href="http://www.bookman.com.tw/BookSearch.aspx?Keyword=Language%20Files" target="_blank" style={{color: "#2782ce"}}>Department of Linguistics, The Ohio State University. (2022). <i>Language files: Materials for an introduction to language and linguistics</i> (13th ed.). The Ohio State University Press.</a>
                        </li>
                        <li>
                        Radev, D. (Ed.). (2013). <i>Puzzles in logic, languages and computation: The Red Book</i>. Springer.  
                        </li>
                        <li>
                        Fromkin, V., Rodman, R., & Hyams, N. M. (2019). <i>An introduction to language</i> (10th ed.). Wadsworth/Cengage Learning. 
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-person-bounding-box"></i>
                <h4><a href="#">語奧經驗談</a></h4>
                <div className="icon-ul">
                    <h6>以下為歷屆參賽者與國手的經驗分享、參賽心得與相關資源：</h6>
                    <ul>
                        <li>
                            <a href="https://lope.linguistics.ntu.edu.tw/ioltw/exp/exp_1.pdf" target="_blank" style={{color: "#2782ce"}}>柯承佑：語言學奧林匹亞競賽準備與解題經驗分享</a>
                        </li>
                        <li>
                            <a href="https://lope.linguistics.ntu.edu.tw/ioltw/exp/exp_2.pdf" target="_blank" style={{color: "#2782ce"}}>Eric Wu: How to Engage Linguistics Olympiad?</a>
                        </li>
                        <li>
                            <a href="https://lope.linguistics.ntu.edu.tw/ioltw/exp/exp_3.pdf" target="_blank" style={{color: "#2782ce"}}>馬靖超：國手經驗談：語奧簡介與入門指南</a>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-code-slash"></i>
                  <h4><a href="#">語言分析黑客松</a></h4>
                  <div className="icon-ul">
                    <ul>
                        <li>
                            <a href="http://lope.linguistics.ntu.edu.tw/ioltw/linghacks21/" target="_blank" style={{color: "#2782ce"}}>第四屆語言分析黑客松網站</a>
                        </li>
                        <li>
                            <a href="http://lope.linguistics.ntu.edu.tw/ioltw/linghacks19/" target="_blank" style={{color: "#2782ce"}}>第三屆語言分析黑客松網站</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/drive/folders/1vQx2vTwtFM1J9iRGWEX354EsMS9xLv?usp=sharing" target="_blank" style={{color: "#2782ce"}}>第二屆語言分析黑客松題目與解答</a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
              
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h4><a href="#">更多相關連結</a></h4>
                <div className="icon-ul">
                    <ul>
                        <li>
                            <a href="https://onling.org/" target="_blank" style={{color: "#2782ce"}}>Online Olympiad in Linguistics (線上語奧競賽;2020年有正體中文試題)</a>
                        </li>
                        <li>
                            <a href="http://www.ioling.org/problems/" target="_blank" style={{color: "#2782ce"}}>IOL 國際語奧網站 (歷屆考古題)</a>
                        </li>
                        <li>
                            <a href="http://www.uklo.org/example-questions" target="_blank" style={{color: "#2782ce"}}>UKLO 英國語奧網站 (歷屆考古題)</a>
                        </li>
                        <li>
                            <a href="http://www.nacloweb.org/practice.php" target="_blank" style={{color: "#2782ce"}}>NACLO 美國語奧網站 (歷屆考古題)</a>
                        </li>
                        <li>
                            <a href="https://ailo.adaptcentre.ie/sample-puzzles/?/ailo/sample-puzzles/" target="_blank" style={{color: "#2782ce"}}>AILO 愛爾蘭語奧網站 (歷屆考古題)</a>
                        </li>
                        <li>
                            <a href="https://www.canil.ca/lingquiz/index_canil.html" target="_blank" style={{color: "#2782ce"}}>Linguistic Puzzles (透過解謎方式了解語言)</a>
                        </li>
                        <li>
                            <a href="http://m.sanmin.com.tw/product/index/003759394" target="_blank" style={{color: "#2782ce"}}>中文讀物：語言學新引 (內含語言學這個領域和術語有一些基本的介紹)</a>
                        </li>
                        <li>
                            <a href="https://unravellingmag.com/articles/can-yew-tee-ch-me-tamil/" target="_blank" style={{color: "#2782ce"}}>Can Yew Tee-ch me Tamil? (NACLO2017 出題者的好文章)</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=QYlVJlmjLEc&amp;feature=youtu.be&amp;list=PL96C35uN7xGLDEnHuhD7CTZES3KXFnwm0" target="_blank" style={{color: "#2782ce"}}>Fantastic Features We Don&apos;t Have In The English Language（這系列的影片簡潔了當，很適合對於學習語言／語言學有興趣的人）</a>
                        </li>
                        <li>
                            <a href="https://www.newscientist.com/article/2109339-the-science-behind-the-twisting-alien-linguistics-of-arrival/" target="_blank" style={{color: "#2782ce"}}>The science behind the twisting alien linguistics of Arrival （電影：異星入境）</a>
                        </li>
                        <li>
                            <a href="https://www.microsoft.com/en-us/research/blog/exposing-young-people-to-linguistics/" target="_blank" style={{color: "#2782ce"}}>Exposing young people to linguistics （印度微軟研究人員對於語奧的投入）</a>
                        </li>
                        <li>
                            <a href="http://kumaranhmd.blogspot.tw/2015/09/international-linguistics-olympiad.html" target="_blank" style={{color: "#2782ce"}}>International Linguistics Olympiad（2015 外國參賽選手心得文）</a>
                        </li>
                    </ul>
                </div>                
              </div>
            </div>
          </div>
  
        </div>
      </section>


  </main>
  );
}