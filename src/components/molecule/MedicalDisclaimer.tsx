import React from 'react';

interface MedicalDisclaimerProps {
  position?: 'top' | 'bottom';
}

const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ position = 'top' }) => {
  if (position === 'top') {
    return (
      <div className="medical-disclaimer-top">
        <p>
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a GDC-registered dentist for personalised treatment recommendations. Individual results may vary.
        </p>
        <style jsx>{`
          .medical-disclaimer-top {
            background-color: #FFF9E6;
            border-left: 4px solid #FEC600;
            padding: 16px;
            margin-bottom: 32px;
            border-radius: 8px;
          }
          .medical-disclaimer-top p {
            margin: 0;
            font-size: 14px;
            color: #161616;
            font-family: 'Pangram-Regular', sans-serif;
          }
          .medical-disclaimer-top strong {
            font-family: 'Pangram-Bold', sans-serif;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="medical-disclaimer-bottom">
      <p>
        <strong>Important Notice:</strong> This content is provided for educational purposes only. It should not be used as a substitute for professional dental advice, diagnosis, or treatment. Always seek the advice of a qualified dental professional with any questions you may have regarding dental treatments. Never disregard professional medical advice or delay seeking it because of something you have read in this article.
      </p>
      <style jsx>{`
        .medical-disclaimer-bottom {
          background-color: #F5F5F5;
          border-left: 4px solid #100E10;
          padding: 16px;
          margin-top: 32px;
          border-radius: 8px;
        }
        .medical-disclaimer-bottom p {
          margin: 0;
          font-size: 14px;
          color: #161616;
          font-family: 'Pangram-Regular', sans-serif;
        }
        .medical-disclaimer-bottom strong {
          font-family: 'Pangram-Bold', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default MedicalDisclaimer;
