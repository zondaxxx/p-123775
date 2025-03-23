import React from "react";
import CertificateHeader from "@/components/certificates/CertificateHeader";
import PricingCard from "@/components/certificates/PricingCard";
import CertificateFooter from "@/components/certificates/CertificateFooter";

const checkIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon" style="width: 24px; height: 24px"> <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

const Index = () => {
  const pricingOptions = [
    {
      title: "iPad",
      price: "399₽",
      features: [
        "Срок действия 1 год",
        "Выдача в течение 3 дней",
        "Неограниченное количество приложений",
      ],
      accentColor: "#F15BB5",
      icon: checkIcon,
    },
    {
      title: "Обычный",
      price: "999₽",
      features: [
        "Срок действия 1 год",
        "Выдача в течение 3 дней",
        "Базовая поддержка",
      ],
      accentColor: "#45D6CA",
      icon: checkIcon,
    },
    {
      title: "Моментальный",
      price: "1499₽",
      features: [
        "Срок действия 1 год",
        "Выдача в течение 30 минут",
        "Приоритетная поддержка",
      ],
      accentColor: "#AA79FD",
      icon: checkIcon,
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400&display=swap"
        rel="stylesheet"
      />
      <div
        className="max-w-none min-h-screen relative overflow-hidden bg-[#2A2A4E] mx-auto p-12 max-md:max-w-[991px] max-md:p-6 max-sm:max-w-screen-sm max-sm:p-4"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        <CertificateHeader
          title="Сертификаты разработчика"
          subtitle="Расшир��нные возможности для вашего iPhone и iPad"
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8f563856c356fc46cbc1a7551a6fcf6b4c09ff23"
        />

        <div className="h-0.5 bg-[rgba(255,255,255,0.10)] mx-0 my-12" />

        <div className="flex gap-[34px] mb-12 max-md:flex-col max-md:items-center">
          {pricingOptions.map((option, index) => (
            <PricingCard
              key={index}
              title={option.title}
              price={option.price}
              features={option.features}
              accentColor={option.accentColor}
              icon={option.icon}
            />
          ))}
        </div>

        <CertificateFooter
          contactText="За дополнительными услугами в личные сообщения"
          contactHandle="@icertstore"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </>
  );
};

export default Index;
