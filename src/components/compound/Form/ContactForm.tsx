// import useAxios from "@/app/(root)/contact/hooks/useAxios";
import useAxios from "../../../../hooks/useAxios";
import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, handleInputChange, handleSubmit] = useAxios();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit();
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5">
        <div className="content w-full flex flex-col xl:flex-row gap-5 xl:gap-24">
          <div>
            <h1 className="bold text-5xl  text-center md:text-left xl:text-7xl">
              READY TO CREATE MAGIC?
            </h1>
          </div>

          <div className="thin text-xl w-full ">
            <form onSubmit={onSubmit} className="space-y-5 ">
              <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone [optional] "
                  className="contact-bg w-full p-2 sm:p-4  tracking-widest rounded-md focus:outline-none"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
                <input
                  type="text"
                  name="company"
                  placeholder="Company*"
                  className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="deadline"
                  placeholder="Dealine in weeks*"
                  className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
                  required
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-2 sm:gap-5 items-center justify-center">
                <textarea
                  name="message"
                  placeholder="Your message here...."
                  className="contact-bg w-full md:min-h-[200px] tracking-[0.3rem] rounded-md px-6 py-3 text-md focus:outline-none"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="regular bg-yellow-600 tracking-widest rounded-full w-[100px] h-[100px] md:w-[270px] md:h-[200px] flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
