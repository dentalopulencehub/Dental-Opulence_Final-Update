import { residentialForm } from "../../../../../constants";

import { FormProps } from "../../../../../types";

const FormFour = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formFive";
      case 1:
        return "formFive";
      case 2:
        return "checkPointFormOne";
      case 3:
        return "checkPointFormOne";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-3xl xl:text-7xl text-white">
        {residentialForm[0].title}
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row gap-10 justify-center items-center">
        {residentialForm.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="contact-bg sm:w-[250px] justify-center bg-[#2D2D2D] hover:bg-[#6b6969] thin flex text-center items-center gap-2 text-base py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                /*  const nextForm = getNextForm(index);
                handleStepChange(nextForm);
                */
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

export default FormFour;

const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};
