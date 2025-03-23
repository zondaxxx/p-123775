import React from "react";

interface CertificateHeaderProps {
  title: string;
  subtitle: string;
  logoUrl: string;
}

const CertificateHeader: React.FC<CertificateHeaderProps> = ({
  title,
  subtitle,
  logoUrl,
}) => {
  return (
    <div className="flex justify-between items-start mb-12">
      <div className="max-w-screen-lg">
        <h1 className="text-[#E6E6FF] text-[57px] leading-[85.5px] mb-4 max-sm:text-4xl max-sm:leading-[54px]">
          {title}
        </h1>
        <p className="text-[#8A8AA3] text-3xl leading-[45px] max-sm:text-2xl max-sm:leading-9">
          {subtitle}
        </p>
      </div>
      <div className="text-center">
        <img
          src={logoUrl}
          className="w-32 h-[131px] mb-[5px] rounded-[35px] max-sm:w-24 max-sm:h-[98px]"
          alt="iCert Logo"
        />
        <div className="text-white text-xl leading-[30px]">iCert</div>
      </div>
    </div>
  );
};

export default CertificateHeader;
