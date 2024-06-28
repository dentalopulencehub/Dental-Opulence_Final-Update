import { commercialForm } from "../../../../../constants";

import { FormProps } from "../../../../../types";

const FormThree = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formEight";
      case 1:
        return "formNine";
      case 2:
        return "formTen";
      case 3:
        return "form11";

      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-4xl xl:text-7xl text-white">
        {commercialForm[0].title}{" "}
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row  gap-4 justify-center items-center">
        {commercialForm.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="bg-[#2D2D2D] sm:w-[250px] justify-center hover:bg-[#6b6969] thin flex text-center items-center gap-2 text-base px-12 lg:py-6 py-3 text-white rounded-full relative"
              onClick={() => {
                //const nextForm = getNextForm(index);
                //handleStepChange(nextForm);
                //handleOptionSelect(item.label, item.title);
                handleOptionSelect(item.label, item.title || "");
                handleStepChange("lastForm");
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

export default FormThree;

const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};
