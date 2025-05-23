import WhatsAppButton from "@/shared/components/Layout/MainLayout/components/WhatsAppButton";
import Main from "./components/Main";
import SuggestSection from "./components/SuggestSection";
import DividerSection from "./components/DividerSection";
import LoyalSection from "./components/LoyalSection";
import InstagramSection from "./components/InstagramSection";
import ContactUsSection from "./components/ContactUsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

const PartnershipPage = () => {
  return (
    <>
      <Main />
      <SuggestSection />
      <DividerSection />
      <LoyalSection />
      <WhyChooseUsSection />
      <ContactUsSection />
      <InstagramSection />
      <WhatsAppButton />
    </>
  );
};

export default PartnershipPage;
