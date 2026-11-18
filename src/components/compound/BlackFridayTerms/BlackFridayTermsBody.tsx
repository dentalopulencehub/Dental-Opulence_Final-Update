import React from "react";

// Terms supplied by the practice for the Black Friday Invisalign offer.
// Section headings and wording are kept as provided.
type Section = {
  heading: string;
  // Paragraphs render as text, lists render as bullet points, in order.
  blocks: ({ type: "p"; text: string } | { type: "ul"; items: string[] })[];
};

const sections: Section[] = [
  {
    heading: "1. Eligibility and consultation dates",
    blocks: [
      {
        type: "p",
        text: "This offer is available exclusively to patients who attend an Invisalign consultation at Dental Opulence with Dr Mo or Dr Sama on Saturday 12 December or Sunday 13 December 2026.",
      },
      {
        type: "p",
        text: "Treatment is subject to clinical assessment, suitability for Invisalign and acceptance of the treatment plan.",
      },
    ],
  },
  {
    heading: "2. What the offer includes",
    blocks: [
      { type: "p", text: "Eligible patients can receive:" },
      {
        type: "ul",
        items: [
          "Invisalign treatment at the exclusive price of £2,590.",
          "Free teeth whitening, subject to clinical suitability.",
          "Three sets of retainers, provided following completion of Invisalign treatment.",
          "10% off composite bonding undertaken at Dental Opulence following their Invisalign treatment, subject to clinical suitability.",
          "The opportunity to receive a £100 Everywish referral voucher, subject to the referral conditions below.",
        ],
      },
      {
        type: "p",
        text: "Any additional dental treatment required outside the agreed Invisalign package will be explained and quoted separately before proceeding.",
      },
    ],
  },
  {
    heading: "3. Securing the promotional price",
    blocks: [
      {
        type: "p",
        text: "To secure the offer, patients must pay £100 towards their ClinCheck treatment planning on the day of their consultation, either 12 or 13 December 2026.",
      },
      {
        type: "p",
        text: "This requirement applies to all patients, including those who need general dental treatment before they can proceed with Invisalign.",
      },
      {
        type: "p",
        text: "The £100 payment forms part of the total Invisalign price of £2,590 and is not an additional charge. Once paid, the remaining Invisalign balance will be £2,490, excluding any separately agreed general dental treatment.",
      },
      {
        type: "p",
        text: "Patients who do not make the £100 payment on their consultation day will not qualify for the promotional price or associated package benefits.",
      },
      {
        type: "p",
        text: "The £100 payment is non-refundable once the ClinCheck planning has been commissioned, subject to applicable consumer rights. Any amount retained following cancellation will be limited to reasonable costs or losses incurred. Where a refund is required by law, it will be provided.",
      },
    ],
  },
  {
    heading: "4. Patients requiring general dental treatment first",
    blocks: [
      {
        type: "p",
        text: "Patients who require general dental treatment to become dentally fit for Invisalign must:",
      },
      {
        type: "ul",
        items: [
          "Pay the £100 ClinCheck payment on their consultation day.",
          "Complete all general dental treatment identified as necessary before Invisalign.",
          "Book and attend their reassessment and repeat Invisalign scan, so their ClinCheck planning can proceed.",
        ],
      },
      {
        type: "p",
        text: "The required general dental treatment, reassessment and repeat scan must be completed within 60 calendar days of the consultation at which the patient is informed of the treatment required. The practice will confirm the deadline in writing.",
      },
      {
        type: "p",
        text: "Booking an appointment within the 60-day period is not sufficient: the required treatment and repeat scan must have taken place within that period.",
      },
      {
        type: "p",
        text: "Patients who do not meet these requirements within the deadline will no longer qualify for the Black Friday offer. If they subsequently choose to proceed, the practice's standard Invisalign price applicable at that time will apply.",
      },
      {
        type: "p",
        text: "General dental treatment is charged separately from the Invisalign package. The required treatment and associated fees will be explained before proceeding.",
      },
    ],
  },
  {
    heading: "5. Accepting the ClinCheck and arranging payment",
    blocks: [
      {
        type: "p",
        text: "All patients must, within seven calendar days of receiving their ClinCheck treatment plan:",
      },
      {
        type: "ul",
        items: [
          "Confirm in writing that they accept the plan and wish to proceed; and",
          "Either pay the remaining Invisalign balance in full or secure finance approval and enter into the finance agreement covering that balance.",
        ],
      },
      {
        type: "p",
        text: "Submitting a finance application alone does not secure the offer. Finance must be approved and the agreement completed within the seven-day period. Finance is subject to the lender's eligibility requirements and approval.",
      },
      {
        type: "p",
        text: "The practice will confirm the acceptance and payment deadline when sending the ClinCheck.",
      },
      {
        type: "p",
        text: "Patients who do not complete both requirements within seven calendar days will no longer qualify for the promotional price or associated package benefits. If they return at a later date, the practice's standard Invisalign price applicable when they choose to proceed will apply.",
      },
    ],
  },
  {
    heading: "6. Withdrawal from finance",
    blocks: [
      {
        type: "p",
        text: "Withdrawing from a finance agreement does not, by itself, cancel the separate treatment agreement with Dental Opulence.",
      },
      {
        type: "p",
        text: "Patients who withdraw from finance during the lender's cooling-off period and wish to continue treatment must notify Dental Opulence immediately and arrange alternative payment directly with the practice within two working days of withdrawal.",
      },
      {
        type: "p",
        text: "Where the treatment balance becomes payable directly to Dental Opulence following withdrawal, it must be paid within those two working days, unless a different payment date is required by law or agreed in writing.",
      },
      {
        type: "p",
        text: "This requirement does not shorten any statutory period for repaying credit to the lender. Any sums already received by the practice will be reconciled to avoid duplicate payment.",
      },
      {
        type: "p",
        text: "For these terms, working days are Monday to Friday, excluding bank holidays in England.",
      },
    ],
  },
  {
    heading: "7. Cancellation of Invisalign treatment",
    blocks: [
      {
        type: "p",
        text: "Patients wishing to cancel their Invisalign treatment must notify Dental Opulence as soon as possible.",
      },
      {
        type: "p",
        text: "Where planning or treatment has been commissioned or undertaken, or laboratory work has been ordered, the practice may charge for work already carried out and reasonable, unavoidable costs or losses arising from cancellation. These may include dentist time, practice time and laboratory fees.",
      },
      {
        type: "p",
        text: "The total amount charged or retained under this cancellation clause will not exceed the lower of:",
      },
      { type: "ul", items: ["£1,500; or", "50% of the agreed Invisalign treatment fee."] },
      {
        type: "p",
        text: "For the Black Friday Invisalign price of £2,590, this maximum is £1,295.",
      },
      {
        type: "p",
        text: "This is a maximum, not an automatic cancellation fee. The amount charged will reflect the work undertaken and reasonable costs or losses actually incurred, taking account of any savings or recoveries.",
      },
      {
        type: "p",
        text: "Any £100 ClinCheck payment or other Invisalign payments already retained will count towards this amount and will not be added on top. Any excess payment will be refunded.",
      },
      {
        type: "p",
        text: "This clause does not restrict statutory cancellation or refund rights. Separately agreed general dental treatment remains subject to its own treatment and payment terms.",
      },
    ],
  },
  {
    heading: "8. Whitening and retainers",
    blocks: [
      {
        type: "p",
        text: "The whitening and three sets of retainers are included as part of the eligible patient's Invisalign package and have no cash alternative.",
      },
      {
        type: "p",
        text: "The treating dentist will advise when whitening is clinically appropriate and when retainers will be provided.",
      },
    ],
  },
  {
    heading: "9. Composite bonding discount",
    blocks: [
      {
        type: "p",
        text: "The 10% discount applies to composite bonding carried out at Dental Opulence following completion of the eligible patient's Invisalign treatment.",
      },
      {
        type: "p",
        text: "Composite bonding is optional, charged separately and subject to clinical suitability. The discount will be applied to the practice's standard composite bonding fees applicable when the bonding treatment plan is agreed. A quotation will be provided before treatment begins.",
      },
    ],
  },
  {
    heading: "10. Who can receive a referral voucher",
    blocks: [
      {
        type: "p",
        text: "The £100 referral voucher promotion is available only to patients who:",
      },
      {
        type: "ul",
        items: [
          "Attended an Invisalign consultation on 12 or 13 December 2026;",
          "Met the Black Friday offer requirements; and",
          "Proceeded with Invisalign under this offer and attended their Invisalign fitting appointment.",
        ],
      },
      {
        type: "p",
        text: "The patient making the recommendation is referred to below as the referrer. The family member or friend they recommend is the referred patient.",
      },
      {
        type: "p",
        text: "The referred patient must identify the referrer to Dental Opulence so the referral can be recorded and verified.",
      },
    ],
  },
  {
    heading: "11. Referral qualifying period and limit",
    blocks: [
      {
        type: "p",
        text: "The referral qualifying period is 60 calendar days from the date of the referrer's Invisalign fitting appointment.",
      },
      {
        type: "p",
        text: "The referred patient must commence qualifying treatment at Dental Opulence with a total treatment cost of at least £1,500 within this period. The additional requirements below depend on the treatment chosen.",
      },
      {
        type: "p",
        text: "Each referrer may receive one £100 Everywish voucher per qualifying referral, up to a maximum of three referrals, giving a maximum total voucher value of £300 per referrer. Each referral must independently meet all applicable eligibility, treatment and payment requirements.",
      },
    ],
  },
  {
    heading: "12. Referred patients having treatment other than Invisalign",
    blocks: [
      {
        type: "p",
        text: "For treatment other than Invisalign, the referred patient must, within the 60-day qualifying period:",
      },
      {
        type: "ul",
        items: [
          "Commence the qualifying treatment;",
          "Complete the qualifying treatment; and",
          "Pay the qualifying treatment cost of at least £1,500 in full.",
        ],
      },
      {
        type: "p",
        text: "The referrer becomes eligible for the £100 voucher only once all these requirements have been met and verified.",
      },
      {
        type: "p",
        text: "A consultation, quotation, deposit or treatment booking alone does not qualify. Treatment completed or paid for after the 60-day deadline will not qualify.",
      },
    ],
  },
  {
    heading: "13. Referred patients having Invisalign",
    blocks: [
      {
        type: "p",
        text: "For referred patients proceeding with Invisalign, the following must take place within the 60-day qualifying period:",
      },
      {
        type: "ul",
        items: [
          "The referred patient must accept their Invisalign treatment plan, with a total treatment cost of at least £1,500;",
          "The treatment must be paid for in full, or finance must be approved with the agreement completed and commenced; and",
          "The referred patient must attend their Invisalign fitting appointment and have their aligners fitted.",
        ],
      },
      {
        type: "p",
        text: "The referrer becomes eligible for the £100 voucher once the referred patient's Invisalign has been fitted and the payment or finance requirements have been verified.",
      },
      {
        type: "p",
        text: "The referred patient does not need to complete their full course of Invisalign treatment within the 60-day period.",
      },
      {
        type: "p",
        text: "Referral does not automatically entitle the referred patient to the Black Friday Invisalign price. They must independently meet the offer's eligibility requirements to receive that price.",
      },
    ],
  },
  {
    heading: "14. Everywish voucher conditions",
    blocks: [
      {
        type: "p",
        text: "The referral reward is an Everywish voucher worth £100, sent to the referrer after the applicable qualifying requirements have been met and verified.",
      },
      {
        type: "p",
        text: "The recipient can select an eligible participating brand in accordance with Everywish's redemption process and terms.",
      },
      {
        type: "p",
        text: "Participating brands and redemption options are determined by Everywish and may change. Dental Opulence cannot guarantee that a particular brand will be available.",
      },
      {
        type: "p",
        text: "The voucher is subject to Everywish's applicable terms, including any expiry dates and restrictions. No cash alternative is available.",
      },
    ],
  },
  {
    heading: "15. General conditions",
    blocks: [
      {
        type: "p",
        text: "All treatment remains subject to clinical suitability, informed consent and the patient's agreed treatment plan. Clinical decisions and appropriate treatment timing take priority over promotional deadlines.",
      },
      {
        type: "p",
        text: "These promotional terms apply alongside Dental Opulence's usual treatment and payment terms, which will be provided before treatment proceeds.",
      },
      {
        type: "p",
        text: "Any deadline affected by a delay caused by Dental Opulence will be reviewed fairly, and any revised deadline will be confirmed in writing.",
      },
      {
        type: "p",
        text: "Nothing in these terms affects patients' statutory rights.",
      },
    ],
  },
];

const BlackFridayTermsBody = () => {
  return (
    <div className="font-Pangram-Regular lg:px-[100px] sm:px-[40px] px-[20px] py-20">
      <h2 className="font-Pangram-Regular text-[24px] font-[600]">
        Dental Opulence &ndash; Black Friday Invisalign Offer
      </h2>
      <p className="font-Pangram-Regular mt-2 text-[16px] font-[400] text-[#2D2D2D]">
        Terms and Conditions
      </p>

      {sections.map((section) => (
        <section key={section.heading}>
          <h3 className="mt-8 font-Pangram-Regular text-[16px] font-bold text-[#2D2D2D]">
            {section.heading}
          </h3>
          {section.blocks.map((block, index) =>
            block.type === "p" ? (
              <p
                key={index}
                className="font-Pangram-Regular mt-2 text-[16px] font-[400] text-[#2D2D2D]"
              >
                {block.text}
              </p>
            ) : (
              <ul key={index} className="list-disc ml-5 mt-2 text-[#2D2D2D]">
                {block.items.map((item) => (
                  <li key={item} className="mt-2">
                    <p className="font-Pangram-Regular text-[16px] font-[400] text-[#2D2D2D]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )
          )}
        </section>
      ))}

      <p className="font-Pangram-Regular mt-8 text-[16px] font-[400] text-[#2D2D2D]">
        For questions about the offer, please contact Dental Opulence on{" "}
        <a href="tel:+441212729229" className="underline">
          0121 272 9229
        </a>
        .
      </p>
    </div>
  );
};

export default BlackFridayTermsBody;
