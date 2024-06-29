import { stepOne, stepTwo } from "../../../../constants";

import { FormProps } from "../../../../types";

const FormThree = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formFour";
      case 1:
        return "formFive";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-4xl xl:text-7xl text-white">{stepTwo[0].title}</h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {stepTwo.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="contact-bg  btn bg-[#2D2D2D] hover:bg-[#6b6969] light text-center  cursor-pointer flex items-center gap-2 text-base px-12 lg:py-6 py-3 text-white rounded-full relative"
              onClick={() => {
                const nextForm = getNextForm(index);
                handleStepChange(nextForm);
                handleOptionSelect(item.label, item.title || "");  
                
              }}
            >
           
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormThree;

