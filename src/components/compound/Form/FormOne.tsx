

export interface HelpSelectItem {
  id: number;
  label: string;
}

interface FormOneProps {
  helpSelect: HelpSelectItem[];
  handleStepChange: (step: string) => void;
}


const getNextForm = (index: number) => {
  switch (index) {
    case 0:
      return "formTwo";
    case 1:
      return "lastForm";

    default:
      return "";
  }
};



const FormOne = ({ 
  helpSelect,
   handleStepChange
   }: FormOneProps) => {
  return (
    <div className="flex flex-col gap-10 text-center">
      <h1 className="bold text-4xl xl:text-7xl text-white" data-aos="fade-up-right">
        HOW CAN WE HELP?{" "}
      </h1>
      <div className="flex flex-wrap flex-col sm:flex-row gap-5 sm:gap-10 justify-center items-center">
        {helpSelect.map((item, index) => (
       
            <div
            key={index}
              className="contact-bg  btn hover:bg-gray-800 light text-center  cursor-pointer flex items-center gap-2 text-base px-12 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                let gottenForm = getNextForm(index)
                handleStepChange(gottenForm);
              }}
            >
              {/* {index === 0 && (
                <span>
                  <YellowButton />  
                </span>
              )} */}
              {item.label}
            </div>
        ))}
      </div>
    </div>
  );
};

export default FormOne;

const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};



   // <div key={index} className="btn mb-4 text-center relative">
          // <div key={index} className="">