import headerImage from "@/assets/fullAttackSurface.svg";
import SilverskyLogo from "@/assets/silversky.png";
import { DemoButton } from "@/atoms";
import { CardsTitle, Feedback, Footer, Header, Report } from "@/sections";
import { Box, Cloud, Laptop, Radio, Search, Target } from "lucide-react";

export function FullAttackSurface() {
  return (
    <>
      <Header
        type="titleWithPhoto"
        category="visibility"
        title="Full Attack Surface Visibility"
        subtitle="Leverage our Attack Surface Management (ASM) capabilities to gain unparalleled visibility into your organization's security posture and ensure compliance requirements are always met."
        sideChildren={<img src={headerImage} alt="Header image" />}
      >
        <DemoButton isLarge />
      </Header>
      <CardsTitle
        fixedHeight
        title={{
          category: "Why Footprint",
          title: "Bring confidence in knowing exactly what you are protecting",
          subtitle:
            "Get unparalleled visibility across all on-premises & cloud workloads, internal & external views and agentless & agent-based.",
        }}
        cards={[
          {
            icon: <Target />,
            content: "Continuous Compliance Process",
          },
          {
            icon: <Laptop />,
            content:
              "Complete asset inventory: identify rogue assets, devices, applications, cloud workloads",
          },
          {
            icon: <Cloud />,
            content: "Across all on-premises & cloud workloads",
          },
          {
            icon: <Search />,
            content: "Internal & external",
          },
          {
            icon: <Radio />,
            content: "Agentless & agent-based",
          },
          {
            icon: <Box />,
            content: "Blackbox & whitebox",
          },
        ]}
      />
      {/* <HowItWorks /> */}
      <Feedback
        isDarkBlue
        testimonial="When we look for service partners in the market, their solution must be best a breed and easy to consume for our customers and channel partners. We have over 25 years of securing our customers and this is a significant upgrade to our current vulnerability management offering."
        authorName="Cary Conrad"
        companyLogo={SilverskyLogo}
      />
      <Report downloadUrl="#" />
      <Footer />
    </>
  );
}
