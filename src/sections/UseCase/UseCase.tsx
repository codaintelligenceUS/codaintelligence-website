import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Feedback } from "./components/Feedback/Feedback";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { Why } from "./components/Why/Why";

export function UseCase() {
  return (
    <>
      <Header
        type="usecase"
        category="Visibility"
        title="Full attack surface visibility"
        subtitle="Leverage our Attack Surface Management (ASM) capabilities to gain unparalleled visibility into your organization's security posture and ensure compliance requirements are always met"
        isLeftAligned
      />
      <Why />
      <HowItWorks />
      <Feedback />
      <Footer />
    </>
  );
}
