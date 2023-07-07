import { DemoButton } from "@/atoms";
import { Card } from "@/atoms/Card/Card";
import {
  CardsTitle,
  Feedback,
  Footer,
  Header,
  HowItWorks,
  Report,
} from "@/sections";
import { Activity, GitBranch, Zap } from "lucide-react";
import GreenCloud from "@/assets/greencloud.png";

export function ContextualPrioritization() {
  return (
    <>
      <Header
        isBlueBottomGradient
        type="titleWithPhoto"
        category="Prioritization"
        title="Contextual Prioritization"
        subtitle="Identify & remediate exploitable attack vectors by correlating application-level exploits with infrastructure misconfigurations across your entire attack surface"
        sideChildren={
          <Card
            title="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            content="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
            headerPhoto="https://picsum.photos/200"
          />
        }
      >
        <DemoButton isLarge />
      </Header>
      <HowItWorks isPinkEndingGradient />
      <CardsTitle
        fixedHeight
        title={{
          category: "Why Footprint",
          title:
            "Cancel the noise and get to the point. Get your continuous remediation plan rolling.",
          subtitle:
            "Your organization is changing constantly. Use a remediation plan that is consistently monitoring your systems and adjusts to your specific posture in order to always showcase what matters the most.",
        }}
        cards={[
          {
            icon: <Zap />,
            title: "Critical Exploit Validation",
            content:
              "Focus on true exposure based on exploit validation & business impact.",
          },
          {
            icon: <GitBranch />,
            title: "Correlate system data with vulnerability data",
            content:
              "Identify & remediate exploitable attack vectors by correlating application-level exploits with infrastructure misconfigurations across your entire attack surface.",
          },
          {
            icon: <Activity />,
            title: "Manage risk",
            content:
              "Leverage AI-assisted business impact assessments to transform technology risk into business risk with more than 30 temporal & environmental data points for each attack vector.",
          },
        ]}
      />
      <Feedback
        isDarkBlue
        authorName="Steve Sims"
        testimonial="The automation & threat intelligence CODA brings, allows me to be sure all exploitable attack paths are fixed, before they get exploited by threat actors."
        companyLogo={GreenCloud}
      />
      <Report downloadUrl="#" />
      <Footer />
    </>
  );
}
