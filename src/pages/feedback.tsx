import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Layout, Navbar, Footer } from "../components/import";

type RatingQuestion = {
  id: string;
  question: string;
  options: string[];
};

// Rating questions use selectable options only - no typing required.
const ratingQuestions: RatingQuestion[] = [
  {
    id: "overall",
    question:
      "Overall, how would you rate your experience with Dental Opulence?",
    options: ["Excellent", "Very good", "Good", "Fair", "Poor"],
  },
  {
    id: "team",
    question:
      "How would you rate the friendliness and professionalism of our team?",
    options: ["Excellent", "Very good", "Good", "Fair", "Poor"],
  },
  {
    id: "listened",
    question:
      "Did you feel listened to, and were your questions and concerns addressed during your consultation?",
    options: [
      "Yes, completely",
      "Yes, mostly",
      "Partly",
      "No, not really",
      "No, not at all",
    ],
  },
  {
    id: "clarity",
    question:
      "How clearly were your treatment options, costs and next steps explained to you?",
    options: [
      "Very clearly",
      "Mostly clearly",
      "Somewhat clearly",
      "Not very clearly",
      "Not at all clearly",
      "Not applicable",
    ],
  },
];

// All comment boxes are optional.
const commentQuestions = [
  {
    id: "valued",
    question:
      "What did you value most about your experience with Dental Opulence?",
  },
  {
    id: "improve",
    question: "Is there anything we could have done to improve your experience?",
  },
  { id: "anythingElse", question: "Is there anything else you'd like to share with us?" },
];

const Feedback = () => {
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const answeredCount = Object.keys(ratings).length;
  const canSubmit = answeredCount > 0 && !isSubmitting;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsSubmitting(true);
    setError(false);

    // Feedback is anonymous - no name, phone or email is collected.
    const questionsAndAnswers = [
      ...ratingQuestions
        .filter((q) => ratings[q.id])
        .map((q) => ({ question: q.question, answer: ratings[q.id] })),
      ...commentQuestions
        .filter((q) => comments[q.id]?.trim())
        .map((q) => ({ question: q.question, answer: comments[q.id].trim() })),
    ];

    const message = [
      "Patient feedback (submitted anonymously via do.co.uk/feedback)",
      "",
      ...questionsAndAnswers.map((qa) => `${qa.question}\n${qa.answer}`),
    ].join("\n");

    try {
      await axios.post("https://do-contact.vercel.app/api/v1/contact", {
        first_name: "Anonymous",
        last_name: "Patient Feedback",
        phone: "",
        email: "",
        company: "",
        deadline: "",
        message,
        question: questionsAndAnswers,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Patient Feedback | Dental Opulence</title>
        <meta
          name="description"
          content="Share anonymous feedback about your experience at Dental Opulence. Takes 1-2 minutes, no contact details needed."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />

      <main className="w-full bg-[#161616] min-h-screen lg:px-[100px] sm:px-[40px] px-[20px] pt-[120px] pb-[80px]">
        <div className="max-w-[760px] mx-auto">
          {submitted ? (
            <div className="text-center py-[60px]">
              <h1 className="bold text-white text-[26px] sm:text-[40px] leading-tight">
                Thank you for your feedback
              </h1>
              <p className="thin text-[#C9C9C9] text-base sm:text-lg mt-5">
                We really appreciate your honesty, and we use your comments to
                help us continually improve our patient experience.
              </p>
            </div>
          ) : (
            <>
              <header className="mb-8 sm:mb-12">
                <h1 className="bold text-white text-[26px] sm:text-[40px] leading-tight">
                  Patient Feedback
                </h1>
                <p className="thin text-[#C9C9C9] text-base sm:text-lg mt-4">
                  Thank you for visiting Dental Opulence! We&apos;d love to hear
                  about your experience following your first consultation. Your
                  honest feedback helps us understand what we&apos;re doing well
                  and where we can improve.
                </p>
                <p className="thin text-[#8F8F8F] text-sm sm:text-base mt-3">
                  This short form takes around 1&ndash;2 minutes. You don&apos;t
                  need to give your name or contact details.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {ratingQuestions.map((q, index) => (
                  <fieldset key={q.id} className="border-0 p-0 m-0">
                    <legend className="thin text-white text-base sm:text-lg mb-3">
                      {index + 1}. {q.question}
                    </legend>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {q.options.map((option) => {
                        const selected = ratings[q.id] === option;
                        return (
                          <label
                            key={option}
                            className={`cursor-pointer thin text-sm sm:text-base px-4 py-3 rounded-md border transition-colors ${
                              selected
                                ? "bg-white text-[#161616] border-white"
                                : "bg-[#41414159] text-white border-[#454545] hover:border-[#8F8F8F]"
                            }`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={option}
                              checked={selected}
                              onChange={() =>
                                setRatings((prev) => ({
                                  ...prev,
                                  [q.id]: option,
                                }))
                              }
                              className="sr-only"
                            />
                            {option}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}

                {commentQuestions.map((q, index) => (
                  <div key={q.id}>
                    <label
                      htmlFor={q.id}
                      className="thin text-white text-base sm:text-lg block mb-3"
                    >
                      {ratingQuestions.length + index + 1}. {q.question}{" "}
                      <span className="text-[#8F8F8F] text-sm">(optional)</span>
                    </label>
                    <textarea
                      id={q.id}
                      name={q.id}
                      rows={3}
                      value={comments[q.id] || ""}
                      onChange={(e) =>
                        setComments((prev) => ({
                          ...prev,
                          [q.id]: e.target.value,
                        }))
                      }
                      className="bg-[#41414159] text-white border border-[#454545] w-full p-4 tracking-wide rounded-md focus:outline-none focus:border-[#8F8F8F] placeholder:text-sm thin"
                      placeholder="Your answer"
                    />
                  </div>
                ))}

                {error && (
                  <p className="thin text-[#FF9A9A] text-sm">
                    Sorry, something went wrong sending your feedback. Please
                    try again in a moment.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`thin w-full sm:w-auto px-10 py-4 rounded-full text-base transition-colors ${
                    canSubmit
                      ? "bg-white text-[#161616] hover:bg-[#E5E5E5]"
                      : "bg-[#41414159] text-[#8F8F8F] cursor-not-allowed border border-[#454545]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit feedback"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Feedback;
