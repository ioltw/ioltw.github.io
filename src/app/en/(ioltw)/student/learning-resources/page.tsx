import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Resources - Taiwan Olympiad in Linguistics",
};

export default function LearningResources() {
  return (
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Learning Resources</h2>
          <ol>
            <li><a href="/en/">Home</a></li>
            <li>For Students</li>
            <li>Learning Resources</li>
          </ol>
        </div>

      </div>
    </section>

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="section-title col-lg-5">
            <p>Resources for Linguistics Olympiad-Type Problems</p>
          </div>
          <div className="col-lg-7">
            <ul>
              <li><i className="ri-check-double-line"></i> Below are resources we have shared in our Facebook group for your reference.</li>
              <li><i className="ri-check-double-line"></i> We hope these will be helpful for your preparation for the Linguistics Olympiad.</li>
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
              <h4><a href="#">Recommended Books</a></h4>
              <div className="icon-ul">
                <ul>
                  <li>
                    <a href="http://www.bookman.com.tw/BookSearch.aspx?Keyword=Language%20Files" target="_blank" style={{color: "#2782ce"}}>Department of Linguistics, The Ohio State University. (2022). <em>Language files: Materials for an introduction to language and linguistics</em> (13th ed.). The Ohio State University Press.</a>
                  </li>
                  <li>
                        Radev, D. (Ed.). (2013). <em>Puzzles in logic, languages and computation: The Red Book</em>. Springer.  
                  </li>
                  <li>
                        Fromkin, V., Rodman, R., & Hyams, N. M. (2019). <em>An introduction to language</em> (10th ed.). Wadsworth/Cengage Learning. 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-person-bounding-box"></i>
              <h4><a href="#">Linguistics Olympiad Experiences</a></h4>
              <div className="icon-ul">
                <h6>Here are experience shares, competition insights, and related resources from past participants and national team members:</h6>
                <ul>
                  <li>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/exp/exp_1.pdf" target="_blank" style={{color: "#2782ce"}}>Cheng-You Ko: Sharing on Preparation and Problem Solving for the Linguistics Olympiad (in Chinese)</a>
                  </li>
                  <li>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/exp/exp_2.pdf" target="_blank" style={{color: "#2782ce"}}>Eric Wu: How to Engage Linguistics Olympiad? (in English)</a>
                  </li>
                  <li>
                    <a href="https://lope.linguistics.ntu.edu.tw/ioltw/exp/exp_3.pdf" target="_blank" style={{color: "#2782ce"}}>Ching Chao Ma: National Team Experience: Introduction to the Linguistics Olympiad and a Beginner's Guide (in Chinese)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-code-slash"></i>
              <h4><a href="#">Linguistic Analysis Hackathon</a></h4>
              <div className="icon-ul">
                <ul>
                  <li>
                    <a href="http://lope.linguistics.ntu.edu.tw/ioltw/linghacks21/" target="_blank" style={{color: "#2782ce"}}>4th Linguistic Analysis Hackathon Website</a>
                  </li>
                  <li>
                    <a href="http://lope.linguistics.ntu.edu.tw/ioltw/linghacks19/" target="_blank" style={{color: "#2782ce"}}>3rd Linguistic Analysis Hackathon Website</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1vQx2vTwtFM1J9iRGWEX354EsMS9xLv?usp=sharing" target="_blank" style={{color: "#2782ce"}}>2nd Linguistic Analysis Hackathon Problems and Solutions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h4><a href="#">More Related Links</a></h4>
              <div className="icon-ul">
                <ul>
                  <li>
                    <a href="https://onling.org/" target="_blank" style={{color: "#2782ce"}}>Online Olympiad in Linguistics (Includes Traditional Chinese questions in 2020)</a>
                  </li>
                  <li>
                    <a href="http://www.ioling.org/problems/" target="_blank" style={{color: "#2782ce"}}>International Linguistics Olympiad (IOL) Website (Past Problems)</a>
                  </li>
                  <li>
                    <a href="http://www.uklo.org/example-questions" target="_blank" style={{color: "#2782ce"}}>UK Linguistics Olympiad (UKLO) Website (Past Problems)</a>
                  </li>
                  <li>
                    <a href="http://www.nacloweb.org/practice.php" target="_blank" style={{color: "#2782ce"}}>NACLO US Linguistics Olympiad (NACLO) Website (Past Problems)</a>
                  </li>
                  <li>
                    <a href="https://ailo.adaptcentre.ie/sample-puzzles/?/ailo/sample-puzzles/" target="_blank" style={{color: "#2782ce"}}>All Ireland Linguistics Olympiad (AILO) Website (Past Problems)</a>
                  </li>
                  <li>
                    <a href="https://www.canil.ca/lingquiz/index_canil.html" target="_blank" style={{color: "#2782ce"}}>Linguistic Puzzles (Understanding Language through Puzzles)</a>
                  </li>
                  <li>
                    <a href="http://m.sanmin.com.tw/product/index/003759394" target="_blank" style={{color: "#2782ce"}}>Chinese Book: <em>語言學新引</em> (Basic introduction to the field and terminology of linguistics)</a>
                  </li>
                  <li>
                    <a href="https://unravellingmag.com/articles/can-yew-tee-ch-me-tamil/" target="_blank" style={{color: "#2782ce"}}>Can Yew Tee-ch me Tamil? (A good article by a NACLO 2017 problem designer)</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=QYlVJlmjLEc&amp;feature=youtu.be&amp;list=PL96C35uN7xGLDEnHuhD7CTZES3KXFnwm0" target="_blank" style={{color: "#2782ce"}}>Fantastic Features We Don&apos;t Have In The English Language (A video series that is very suitable for those interested in learning languages/language studies)</a>
                  </li>
                  <li>
                    <a href="https://www.newscientist.com/article/2109339-the-science-behind-the-twisting-alien-linguistics-of-arrival/" target="_blank" style={{color: "#2782ce"}}>The Science Behind the Twisting Alien Linguistics of the film <em>Arrival</em></a>
                  </li>
                  <li>
                    <a href="https://www.microsoft.com/en-us/research/blog/exposing-young-people-to-linguistics/" target="_blank" style={{color: "#2782ce"}}>Exposing Young People to Linguistics (Microsoft researchers in India&apos;s involvement in the Linguistics Olympiad)</a>
                  </li>
                  <li>
                    <a href="http://kumaranhmd.blogspot.tw/2015/09/international-linguistics-olympiad.html" target="_blank" style={{color: "#2782ce"}}>International Linguistics Olympiad (Blogpost from a 2015 IOL participant)</a>
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
