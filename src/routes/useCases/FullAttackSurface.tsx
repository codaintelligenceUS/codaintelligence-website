import SilverskyLogo from "@/assets/silversky.png";
import { DemoButton } from "@/atoms";
import { Card } from "@/atoms/Card/Card";
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
        sideChildren={
          <Card
            title="Learn More"
            content="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
            headerPhoto="https://picsum.photos/200/300"
          />
        }
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
