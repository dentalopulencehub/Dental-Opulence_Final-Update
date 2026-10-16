"use client";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import arrow_hex_1 from "../../../assets/images/arrow-left-light-large.svg";
import cancel from "../../../assets/images/cancel.svg";
import do_logo from "../../../assets/images/dental Opulence logo.svg";
import { GlobalContext } from "../../../context/GlobalContext";
import { handleSetPathToNavigate } from "../../../context/action";

type RatingStep = {
  kind: "rating";
  id: string;
  question: string;
  options: string[];
};

type CommentStep = {
  kind: "comment";
  id: string;
  question: string;
};

type Step = RatingStep | CommentStep;

// One question per screen, in the order the practice supplied them.
const steps: Step[] = [
  {
    kind: "rating",
    id: "overall",
    question: "Overall, how would you rate your experience with Dental Opulence?",
    options: ["Excellent", "Very good", "Good", "Fair", "Poor"],
  },
  {
    kind: "rating",
    id: "team",
    question:
      "How would you rate the friendliness and professionalism of our team?",
    options: ["Excellent", "Very good", "Good", "Fair", "Poor"],
  },
  {
    kind: "rating",
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
    kind: "rating",
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
  {
    kind: "comment",
    id: "valued",
    question: "What did you value most about your experience with Dental Opulence?",
  },
  {
    kind: "comment",
    id: "improve",
    question: "Is there anything we could have done to improve your experience?",
  },
  {
    kind: "comment",
    id: "anythingElse",
    question: "Is there anything else you'd like to share with us?",
  },
];

const FeedbackFlow = () => {
  const { dispatch: reactContextDispatch } = useContext(GlobalContext);
  const router = useRouter();

  // -1 is the welcome banner, steps.length is the thank-you screen.
  const [stepIndex, setStepIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const current = steps[stepIndex];
  const isWelcome = stepIndex === -1;
  const isDone = stepIndex === steps.length;

  const selectedPills = steps
    .filter((s) => s.kind === "rating" && answers[s.id])
    .map((s) => answers[s.id]);

  const progressWidth = isWelcome
    ? "w-0"
    : `${Math.round(((stepIndex + 1) / steps.length) * 100)}%`;

  const handleBack = () => {
    setError(false);
    setStepIndex((i) => (i > -1 ? i - 1 : -1));
  };

  const submitFeedback = async (finalAnswers: Record<string, string>) => {
    setIsSubmitting(true);
    setError(false);

    // Feedback is anonymous - no name, phone or email is collected.
    const questionsAndAnswers = steps
      .filter((s) => finalAnswers[s.id]?.trim())
      .map((s) => ({
        question: s.question,
        answer: finalAnswers[s.id].trim(),
      }));

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
        // The mail endpoint requires a non-empty email, so a fixed no-reply
        // address is sent. No patient contact details are collected.
        email: "noreply@do.co.uk",
        company: "",
        deadline: "",
        message,
        question: questionsAndAnswers,
      });
      setStepIndex(steps.length);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const advance = (updated: Record<string, string>) => {
    if (stepIndex === steps.length - 1) {
      submitFeedback(updated);
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  const handleOptionSelect = (option: string) => {
    if (current?.kind !== "rating") return;
    const updated = { ...answers, [current.id]: option };
    setAnswers(updated);
    advance(updated);
  };

  const handleCommentNext = () => {
    if (current?.kind !== "comment") return;
    advance(answers);
  };

  // The sticky mobile bar shows "Submit feedback" on this page. Tapping it
  // sends whatever has been answered so far, so patients can finish early.
  const stickyState = useRef({ stepIndex, answers, isSubmitting });
  stickyState.current = { stepIndex, answers, isSubmitting };

  useEffect(() => {
    const onStickySubmit = () => {
      const { stepIndex: i, answers: a, isSubmitting: busy } =
        stickyState.current;
      if (busy || i === steps.length) return;
      if (i === -1) {
        setStepIndex(0);
        return;
      }
      if (Object.values(a).some((v) => v?.trim())) {
        submitFeedback(a);
      }
    };

    window.addEventListener("do:submit-feedback", onStickySubmit);
    return () =>
      window.removeEventListener("do:submit-feedback", onStickySubmit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative bg-[#100E10] w-full min-h-[100svh] overflow-hidden pt-5 sm:pt-10 lg:px-[100px] sm:px-[40px] px-[20px] pb-[110px] lg:pb-10 flex flex-col mx-auto">
      <div className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="1053"
          height="545"
          viewBox="0 0 1053 545"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.02">
            <path
              d="M0 1.35739H202.961C238.646 1.31262 273.991 8.29277 306.973 21.8987C339.955 35.5046 369.928 55.4693 395.178 80.6512C420.427 105.833 440.458 135.738 454.125 168.656C467.791 201.574 474.826 236.86 474.826 272.495C474.826 344.405 446.219 413.37 395.298 464.218C344.378 515.066 275.314 543.632 203.302 543.632H0V1.35739Z"
              fill="white"
            />
            <path
              d="M780.112 545C930.824 545 1053 422.998 1053 272.5C1053 122.002 930.824 0 780.112 0C629.4 0 507.223 122.002 507.223 272.5C507.223 422.998 629.4 545 780.112 545Z"
              fill="white"
            />
          </g>
        </svg>
      </div>

      {/* top bar: logo or back button, answered pills, close button */}
      <div className="flex w-full items-center gap-3 md:mt-12 relative justify-between shrink-0">
        {isWelcome || isDone ? (
          <nav className="mix-blend-difference h-[44px] md:h-[70px] bg-transparent cursor-pointer flex items-center justify-between shrink-0">
            <div
              className="nav-logo-wrapper"
              onClick={() => handleSetPathToNavigate(reactContextDispatch, "/")}
            >
              <Image
                src={do_logo}
                alt="Dental Opulence"
                width={77}
                height={40}
                className="w-[60px] md:w-[77px] h-auto"
              />
            </div>
          </nav>
        ) : (
          <button
            type="button"
            aria-label="Back to previous question"
            className="arrow-main border flex items-center justify-center w-[48px] h-[48px] md:w-[84px] md:h-[84px] md:p-[22px] rounded-full cursor-pointer shrink-0"
            data-state="1"
            onClick={handleBack}
          >
            <div className="arrow-wrapper">
              <span className="arrow-span h-[22px] md:h-[40px]">
                <Image
                  src={arrow_hex_1}
                  alt=""
                  className="arr-1 w-[22px] md:w-10 a-btn-1"
                  width={40}
                  height={40}
                />
                <Image
                  src={arrow_hex_1}
                  alt=""
                  className="arr-2 w-[22px] md:w-10 a-btn-2"
                  width={40}
                  height={40}
                />
              </span>
            </div>
          </button>
        )}

        <div className="scroll flex-1 min-w-0 flex flex-wrap items-center justify-center gap-2 md:gap-5">
          {selectedPills.map((option, index) => (
            <span
              key={index}
              className="contact-bg bg-[#2D2D2D] border border-[#454545] thin md:text-sm text-[11px] px-3 py-1.5 text-white rounded-full whitespace-nowrap"
            >
              {option}
            </span>
          ))}
        </div>

        <button
          type="button"
          aria-label="Leave feedback form"
          className="arrow-main border flex items-center justify-center w-[48px] h-[48px] md:w-[84px] md:h-[84px] md:p-[22px] rounded-full cursor-pointer shrink-0"
          data-state="1"
          onClick={() => router.back()}
        >
          <div className="arrow-wrapper">
            <span className="arrow-span h-[18px] md:h-[30px]">
              <Image
                src={cancel}
                alt=""
                className="arr-1 w-[18px] md:w-[30px] a-btn-1"
                width={30}
                height={30}
              />
              <Image
                src={cancel}
                alt=""
                className="arr-2 w-[18px] md:w-[30px] a-btn-2"
                width={30}
                height={30}
              />
            </span>
          </div>
        </button>
      </div>

      {/* step content */}
      <section className="w-full sm:w-4/5 mx-auto flex-1 flex flex-col items-center justify-center py-8 md:py-10">
        <section className="w-full flex flex-col items-center justify-center">
          {isWelcome && (
            <div className="flex flex-col gap-8 md:gap-10 text-center" data-aos="fade-up-right">
              <div className="flex flex-col gap-3">
                <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
                  Thank you for visiting
                </h1>
                <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
                  Dental Opulence
                </h1>
              </div>
              <p className="thin text-[#C9C9C9] text-sm md:text-lg max-w-[620px] mx-auto">
                We&apos;d love to hear about your experience following your
                first consultation. Your honest feedback helps us understand
                what we&apos;re doing well and where we can improve.
              </p>
              <p className="thin text-[#8F8F8F] text-xs md:text-base">
                Around 1&ndash;2 minutes &middot; completely anonymous &middot;
                no contact details needed
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setStepIndex(0)}
                  className="text-black bg-white hover:bg-[#E5E5E5] font-medium text-base rounded-full min-h-[56px] w-full max-w-[320px] sm:w-auto px-10 md:px-12 py-4 border-white border"
                >
                  Start
                </button>
              </div>
            </div>
          )}

          {!isWelcome && !isDone && current?.kind === "rating" && (
            <div className="flex flex-col gap-7 md:gap-10 text-center w-full" data-aos="fade-up-right">
              <h1 className="bold text-xl md:text-3xl xl:text-5xl text-white max-w-[900px] mx-auto leading-snug">
                {current.question}
              </h1>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-5 justify-center items-stretch sm:items-center w-full max-w-[420px] sm:max-w-none mx-auto">
                {current.options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={`contact-bg btn light text-center cursor-pointer flex items-center justify-center min-h-[56px] px-6 py-4 md:px-12 lg:py-6 text-base md:text-base rounded-full relative w-full sm:w-auto ${
                      answers[current.id] === option
                        ? "bg-white text-[#100E10]"
                        : "bg-[#2D2D2D] hover:bg-[#6b6969] text-white"
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!isWelcome && !isDone && current?.kind === "comment" && (
            <div className="flex flex-col gap-6 md:gap-10 w-full max-w-[760px] mx-auto" data-aos="fade-left">
              <h1 className="bold text-xl md:text-3xl xl:text-5xl text-white text-center leading-snug">
                {current.question}
              </h1>
              <textarea
                rows={4}
                value={answers[current.id] || ""}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [current.id]: e.target.value,
                  }))
                }
                placeholder="Optional - leave blank to skip"
                className="bg-[#41414159] text-white border border-[#454545] w-full p-4 tracking-wide rounded-md focus:outline-none focus:border-[#8F8F8F] placeholder:text-sm thin"
              />
              <div className="flex items-center justify-center gap-3 md:gap-5">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleCommentNext}
                  className="text-black bg-white hover:bg-[#E5E5E5] font-medium text-base rounded-full min-h-[56px] w-full sm:w-auto px-8 md:px-12 py-4 border-white border disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Sending..."
                    : stepIndex === steps.length - 1
                    ? "Submit feedback"
                    : answers[current.id]?.trim()
                    ? "Next"
                    : "Skip"}
                </button>
              </div>
              {error && (
                <p className="thin text-[#FF9A9A] text-xs md:text-sm text-center">
                  Sorry, something went wrong sending your feedback. Please try
                  again.
                </p>
              )}
            </div>
          )}

          {isDone && (
            <div className="flex flex-col gap-10 md:gap-20 text-center" data-aos="fade-left">
              <div className="flex flex-col gap-2">
                <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
                  Thank you for your
                </h1>
                <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
                  feedback!
                </h1>
                <p className="thin text-[#C9C9C9] text-sm md:text-lg mt-4 max-w-[620px] mx-auto">
                  We really appreciate your honesty, and we use your comments to
                  help us continually improve our patient experience.
                </p>
              </div>
              <div>
                <Link
                  href="/"
                  type="button"
                  className="text-black bg-white font-medium text-base rounded-full inline-flex items-center justify-center min-h-[56px] px-10 md:px-12 py-4 border-white border"
                >
                  Home page
                </Link>
              </div>
            </div>
          )}
        </section>
      </section>

      {/* progress bar */}
      <div className="w-full flex flex-col items-center justify-center gap-2 shrink-0">
        {!isWelcome && !isDone && (
          <>
            <div className="flex w-full md:w-[50%] h-2 bg-[#5C5C5C] rounded-full">
              <div
                className="bg-white h-full rounded-full transition-all duration-300"
                style={{ width: progressWidth }}
              />
            </div>
            <p className="thin text-[#8F8F8F] text-xs md:text-sm">
              Question {stepIndex + 1} of {steps.length}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default FeedbackFlow;
