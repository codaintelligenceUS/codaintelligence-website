import headerImage from "@/assets/effectiveRemediation.svg";
import Sgi from "@/assets/sgi.png";
import { DemoButton } from "@/atoms";
import { CardsTitle, Feedback, Footer, Header, Report } from "@/sections";
import { Brain, TrendingUp, Wrench } from "lucide-react";

export function EffectiveRemediation() {
  return (
    <>
      <Header
        type="titleWithPhoto"
        category="Remediation"
        title="Effective Remediation"
        subtitle="Leverage our AI-assisted collaborative remediation workflows to foster collaboration between cross-functional teams with automated progress tracking, notifications & reporting."
        sideChildren={<img src={headerImage} alt="Header image" />}
      >
        <DemoButton isLarge />
      </Header>
      <CardsTitle
        fixedHeight
        title={{
          category: "Why Footprint",
          title: "Focus your remediation efforts on quality over quantity.",
          subtitle:
            "Change the paradigm of how you measure remediation success. It is not about how many remediations were delivered in the last month, but doing the ones that can be exploited first. It is always about keeping the threat actors away.",
        }}
        cards={[
          {
            icon: <Wrench />,
            title: "Manage remediation",
            content:
              "Leverage our AI-assisted collaborative remediation workflows to foster collaboration between cross-functional teams with automated progress tracking, notifications & reporting.",
          },
          {
            icon: <Brain />,
            title: "Know your first move",
            content:
              "Deploy fixes to your exploitable critical business workloads first.",
          },
          {
            icon: <TrendingUp />,
            title: "Showcase your progress",
            content:
              "Reduce your MTTR (mean time to remediate) by neutralizing exploitable attack vectors first. Track your progress over time with delta reports.",
          },
        ]}
      />
      {/* <HowItWorks /> */}
      <Feedback
        isDarkBlue
        testimonial="We just love how CODA’s platform allows us to work collaboratively with IT remediation owners to get critical work done. It’s so much faster and we all get that instant gratification of making sure we are working on what’s truly important for the customer"
        authorName="Cory Clark"
        companyLogo={Sgi}
      />
      <Report title="Take a look on a sample report" downloadUrl="#" />
      <Footer />
    </>
  );
}
