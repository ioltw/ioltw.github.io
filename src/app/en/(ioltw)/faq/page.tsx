import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Taiwan Olympiad in Linguistics",
};

export default function Faq() {
  return (
    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>Frequently Asked Question</h2>
                    <ol>
                        <li><a href="/en/">Home</a></li>
                        <li>FAQ</li>
                    </ol>
                </div>

            </div>
        </section>

        <section className="faq">
          <div className="container">
              <ul className="list-group">
                  <li className="list-group-item border-0">
                    <a href="/pdf/TOLQA.pdf" target="_blank" className="btn btn-outline-danger">Read <strong>TOL Q&A</strong> (Chinese) 👀 </a>
                </li>
                <li className="list-group-item border-0">
                    <div>
                        <h4 className="my-3">Q: I don&apos;t have a special understanding of linguistics. Can I still participate in the TOL Preliminary?</h4>
                        <p>Of course you can!</p>
                        <p>The only requirement to participate in the TOL is that you must be a student from grade 7 to 12. If you meet this criterion, you&apos;re welcome to give it a try!</p>
                        <p>Unlike other olympiads, the TOL does not require special knowledge of linguistics. What&apos;s needed is clear logical thinking and perseverance in facing challenges. If you&apos;re willing to give it a go, you&apos;re very welcome!</p>
                    </div>
                </li>
                <li className="list-group-item border-0">
                    <div>
                        <h4 className="my-3">Q: I&apos;m interested in the International Linguistics Olympiad. How should I prepare?</h4>
                        <p><strong>Practice past problems! Practice, practice, practice!</strong></p>
                        <p>We recommend starting with the questions available on our website (no special linguistics knowledge required) or referring to the resources provided in the &quot;Links&quot; section on this page to get a feel for the Olympiad.</p>
                        <p>After practicing, if you develop an interest in linguistics, you can find related books to supplement your knowledge.</p>
                        <p>Refer to <a href="https://www.uklo.org/students-room/">advice from the UK Linguistics Olympiad</a> for more information.</p>
                    </div>
                </li>
                <li className="list-group-item border-0">
                    <div>
                        <h4 className="my-3">Q: Is there a specific scoring method for the TOL? Will there be problems that require explanations?</h4>
                        <p>Since linguistics problems are quite diverse and each task may vary, it is possible that some problems will require explanations.</p>
                        <p>The scoring method is determined based on the problems and decisions made by the exam committee each year. Generally, points are awarded for completing the specified tasks in the problems.</p>
                    </div>
                </li>
            </ul>
          </div>
        </section>

    </main>
  );
}