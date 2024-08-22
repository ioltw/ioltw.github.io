import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TOL - Taiwan Olympiad in Linguistics",
};

export default function AboutTol() {
  return (
    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>About TOL</h2>
                    <ol>
                        <li><a href="/en/">Home</a></li>
                        <li>About TOL</li>
                    </ol>
                </div>

            </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        <section>
          <div className="container">
            <div className="section-title">
              <p>What is TOL?</p>
            </div>
            <div>
              <p>
                The International Linguistics Olympiad (IOL) has been held in various countries since 2003, but it remained relatively unknown in Taiwan. It wasn&apos;t until 2015, when the only individual participant from Taiwan won a bronze medal and an award for the best solution, that more people began to take notice.
              </p>

              <p>
                According to the regulations of the International Linguistics Olympiad (IOL), participating countries recognized by the IOL must hold a national competition to select their national team members. As a result, the Taiwan Olympiad in Linguistics (TOL) was established in 2016.
              </p>

              <p>
                <strong>
                  The Taiwan Olympiad in Linguistics (TOL) is a language puzzle-solving competition for high school students. The competition problems can be solved using only logical reasoning, patience, and a willingness to think continuously. No prior knowledge of linguistics or proficiency in a second language is required.
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <p>How to Participate in TOL?</p>
            </div>

            <ul className="list-group">
              <li className="list-group-item border-0">
                <h5><strong>TOL Eligibility</strong></h5>
                <p>To take part in TOL, you must:</p>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item border-0">Be enrolled in government-approved high schools, overseas Chinese schools, and Taiwanese business schools.</li>
                  <li className="list-group-item border-0">Be under 20 years old during the IOL competition and must not be a current or former university student</li>
                </ol>
              </li>

              <li className="list-group-item border-0">
                <h5><strong>TOL Competition Format</strong></h5>
                <p>
                  Paper-based exam with questions in Traditional Chinese and English translation. Participants are allowed to submit solutions in either Chinese or English.
                </p>
              </li>

              <li className="list-group-item border-0">
                <h5><strong>TOL Selection Process</strong></h5>
                <p>
                  Held once a year (usually in February or March). Top performers in the TOL selection are eligible for training programs and a chance to compete for a spot on the national team.
                </p>
              </li>

              <li className="list-group-item border-0">
                <h5><strong>TOL Registration Information</strong></h5>
                <p>
                  Announced around the end of each year.
                </p>
                <a href="/en/student/register-information" className="btn btn-outline-danger">How to Register</a>
                <a href="https://reg.ioltw.org/" className="btn btn-outline-danger">Visit the TOL preliminary registration system</a>
              </li>
            </ul>

          </div>
        </section>

    </main>
  );
}
