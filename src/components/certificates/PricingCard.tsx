import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  accentColor: string;
  icon: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  accentColor,
  icon,
}) => {
  return (
    <div className="w-[587px] h-[528px] relative rounded-3xl max-md:w-full max-md:max-w-[587px] max-sm:h-auto max-sm:min-h-[450px]">
      <div className="absolute w-full h-full border backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.05)] rounded-3xl border-solid border-[rgba(255,255,255,0.10)] left-0 top-0">
        <div
          className={`absolute w-10 h-10 rounded-[8px_0_0_0] border-l-2 border-t-2 border-solid border-[${accentColor}] left-[21px] top-[21px]`}
        />
        <div
          className={`absolute w-10 h-10 rounded-[0_8px_0_0] border-r-2 border-t-2 border-solid border-[${accentColor}] right-[21px] top-[21px]`}
        />
        <div
          className={`absolute w-10 h-10 rounded-[0_0_0_8px] border-l-2 border-b-2 border-solid border-[${accentColor}] left-[21px] bottom-[21px]`}
        />
        <div
          className={`absolute w-10 h-10 rounded-[0_0_8px_0] border-r-2 border-b-2 border-solid border-[${accentColor}] right-[21px] bottom-[21px]`}
        />
      </div>
      <div className="relative p-[50px] max-sm:p-6">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`w-12 h-12 flex items-center justify-center bg-[${accentColor}] rounded-xl`}
            >
              <div dangerouslySetInnerHTML={{ __html: icon }} />
            </div>
            <div className="text-[#E6E6FF] text-[32px] leading-[48px]">
              {title}
            </div>
          </div>
          <div className="text-[#E6E6FF] text-[64px] leading-[96px] mb-8 max-sm:text-5xl max-sm:leading-[72px]">
            {price}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-[#BFBFE0] text-xl leading-[30px] max-sm:text-base max-sm:leading-6"
            >
              • {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
