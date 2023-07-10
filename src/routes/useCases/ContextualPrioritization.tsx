import headerImage from "@/assets/contextualPrioritization.svg";
import GreenCloud from "@/assets/greencloud.png";
import { DemoButton } from "@/atoms";
import { CardsTitle, Feedback, Footer, Header, Report } from "@/sections";
import { Activity, GitBranch, Zap } from "lucide-react";

export function ContextualPrioritization() {
  return (
    <>
      <Header
        type="titleWithPhoto"
        category="Prioritization"
        title="Contextual Prioritization"
        subtitle="Identify & remediate exploitable attack vectors by correlating application-level exploits with infrastructure misconfigurations across your entire attack surface"
        sideChildren={<img src={headerImage} alt="Header image" />}
      >
        <DemoButton isLarge />
      </Header>
      {/* <HowItWorks isPinkEndingGradient /> */}
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
            icon: <GitBranch />,
            title: "Correlate system data with vulnerability data",
            content:
              "Identify & remediate exploitable attack vectors by correlating application-level exploits with infrastructure misconfigurations across your entire attack surface.",
          },
          {
            icon: <Zap />,
            title: "Critical Exploit Validation",
            content:
              "Focus on true exposure based on exploit validation & business impact.",
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
