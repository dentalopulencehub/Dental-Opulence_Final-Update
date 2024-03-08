
import {
  setActiveStep,
  setSelectedOptions,
  setQuestionsAndAnswers,
} from "../../../lib/state/features/FormSlice";
import { helpSelect } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/state/store";
import Image from "next/image";
import {
  FormOne,
  FormTwo,
  Commercial,
  Residential,
  ResidentialFormOne,
  ResidentialFormTwo,
  EnSuitForm,
  CommercialFormOne,
  CommercialFormTwo,
  CommercialFormThree,
  CommercialFormFour,
  CommercialFormFive,
  CommercialFormSix,
  CheckPointFormOne,
  CheckPointFormTwo,
  CheckPointFormThree,
  CheckPointFormFour,
  CheckPointFormFive,
  CheckPointFormSix,
  CheckPointFormSeven,
  ContactForm,
} from "./Form";
import { useState } from "react";
import arrow_hex_1 from '../../../assets/images/arrow-left-light-large.svg'

const Page = () => {
  const [visitedSteps, setVisitedSteps] = useState<string[]>([]);

  const dispatch = useDispatch();
  const activeStep = useSelector(
    (state: RootState) => state.formReducer.activeStep
  );

  const selectedOptions = useSelector(
    (state: RootState) => state.formReducer.selectedOptions
  );

  const questionsAndAnswers = useSelector(
    (state: RootState) => state.formReducer.questionsAndAnswers
  );

  const handleOptionSelect = (option: string, title?: string) => {
    if (title === undefined) {
      console.error("Title is undefined for option:", option);
      return;
    }
    const newQuestionAndAnswer = { question: title, answer: option };

    dispatch(
      setQuestionsAndAnswers([...questionsAndAnswers, newQuestionAndAnswer])
    );

    dispatch(setSelectedOptions([...selectedOptions, option]));
  };

  const handleStepChange = (step: string) => {
    setVisitedSteps([...visitedSteps, step]);
    dispatch(setActiveStep(step));
  };

  // //----------------- prev button -------------

  const handleBackButtonClick = () => {
    const visitedIndex = visitedSteps.indexOf(activeStep);

    if (visitedIndex > 0) {
      const prevStep = visitedSteps[visitedIndex - 1];
      dispatch(setActiveStep(prevStep));

      const updatedVisitedSteps = visitedSteps.slice(0, visitedIndex);
      setVisitedSteps(updatedVisitedSteps);

      const updatedOptions = [...selectedOptions];
      updatedOptions.pop();
      dispatch(setSelectedOptions(updatedOptions));
    }
  };

  return (
    // <section className="bg-black relative  overflow-hidden rounded-3xl w-full h-full  md:px-4">
    <>
      <section className="relative bg-[#100E10] w-full min-h-[100vh] h-full overflow-hidden  rounded-3xl  sm:pt-10 xl:px-[120px] flex flex-col items-center justify-between  mx-auto my-auto">
        {/* selected options */}{" "}
        {/* <div className="hidden  sm:flex flex-wrap items-center gap-5 sm:mt-16 md:mt-0 border-2 border-red-500"> */}
        <div className="scroll mt-24 md:mt-[70px] w-[350px] md:w-4/5  flex md:flex-wrap items-center justify-center gap-5 z-0  overflow-x-auto cursor-grab md:cursor-pointer">
          {selectedOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              className="contact-bg thin flex items-center gap-2 text-lg px-6 py-3 text-white rounded-full"
              data-aos="fade-up-right"
            >
              {option}
            </button>
          ))}
        </div>{" "}
        <section className="w-full sm:w-4/5  sm:h-3/6 absolute top-[55%] sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between ">
          <section className="w-full h-full flex flex-col items-center justify-center">
            {activeStep === "formOne" && (
              <FormOne
                helpSelect={helpSelect}
                handleStepChange={handleStepChange}
              />
            )}
            {activeStep === "formTwo" && (
              <FormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formThree" && (
              <Commercial
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {/*------------------------------------- residential forms ------------------ */}
            {activeStep === "formFour" && (
              <Residential
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formFive" && (
              <ResidentialFormOne
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "formSix" && (
              <ResidentialFormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formSeven" && (
              <EnSuitForm
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {/*---------------------- commercial forms ------------------ */}
            {activeStep === "formEight" && (
              <CommercialFormOne
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formNine" && (
              <CommercialFormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formTen" && (
              <CommercialFormThree
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {/* How may Sq ft is? */}
            {activeStep === "form11" && (
              <CommercialFormFour
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "form12" && (
              <CommercialFormFive
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "form13" && (
              <CommercialFormSix
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {/*------------------------------------ check points --------------------------- */}
            {activeStep === "checkPointFormOne" && (
              <CheckPointFormOne
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormTwo" && (
              <CheckPointFormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormThree" && (
              <CheckPointFormThree
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormFour" && (
              <CheckPointFormFour
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormFive" && (
              <CheckPointFormFive
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormSix" && (
              <CheckPointFormSix
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormSeven" && (
              <CheckPointFormSeven
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
          </section>

          <section>{activeStep === "lastForm" && <ContactForm />}</section>

          {/* progress bar component */}
        </section>
        {/* back button */}
        <div
          className="arrow-main absolute bottom-10 left-5 sm:left-[80px] border p-[22px] w-[84px] h-[84px] rounded-full"
          data-state="1"
          onClick={handleBackButtonClick}
        >
          <div className="arrow-wrapper ">
            <span className="arrow-span">
              <Image
                src={arrow_hex_1}
                alt="Arrow icon with hexagon tip"
                className="arr-1 w-10  a-btn-1"
                width={40}
                height={40}
              />

              <Image
                src={arrow_hex_1}
                alt="Arrow icon with hexagon tip"
                className="arr-2 w-10  a-btn-2"
                width={40}
                height={40}
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
