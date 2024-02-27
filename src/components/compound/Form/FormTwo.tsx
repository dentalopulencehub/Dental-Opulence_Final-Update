import { stepOne } from "../../../../constants";

import { FormProps } from "../../../../types";

const FormTwo = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formThree";
      case 1:
        return "formFour";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-4xl xl:text-7xl text-white">{stepOne[0].title}</h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {stepOne.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="contact-bg  btn bg-[#4B4B4B] hover:bg-[#6b6969] light text-center  cursor-pointer flex items-center gap-2 text-base px-12 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                const nextForm = getNextForm(index);
                handleStepChange(nextForm);
                handleOptionSelect(item.label, item.title || "");  
                
              }}
            >
             {/*  <span>
                <YellowButton />
              </span> */}
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormTwo;


const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};