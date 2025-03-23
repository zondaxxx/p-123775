import React from "react";

interface CertificateFooterProps {
  contactText: string;
  contactHandle: string;
  disclaimer: string;
}

const CertificateFooter: React.FC<CertificateFooterProps> = ({
  contactText,
  contactHandle,
  disclaimer,
}) => {
  return (
    <div className="text-center">
      <div className="text-[#BFBFE0] text-xl leading-[30px] mb-4 max-sm:text-lg max-sm:leading-[27px]">
        {contactText}
      </div>
      <div className="text-[#E6E6FF] text-2xl leading-9 mb-[47px] max-sm:text-lg max-sm:leading-[27px]">
        {contactHandle}
      </div>
      <div className="text-[#BFBFE0] text-xs leading-3 max-sm:text-[10px] max-sm:leading-[15px]">
        {disclaimer}
      </div>
    </div>
  );
};

export default CertificateFooter;
