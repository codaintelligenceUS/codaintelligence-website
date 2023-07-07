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
import { Brain, TrendingUp, Wrench } from "lucide-react";
import Sgi from "@/assets/sgi.png";
export function EffectiveRemediation() {
  return (
    <>
      <Header
        type="titleWithPhoto"
        category="Remediation"
        title="Effective Remediation"
        subtitle="Leverage our AI-assisted collaborative remediation workflows to foster collaboration between cross-functional teams with automated progress tracking, notifications & reporting."
        sideChildren={
          <Card
            title="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            content="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
            headerPhoto="https://source.unsplash.com/random"
          />
        }
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
            icon: <Brain />,
            title: "Know your first move",
            content:
              "Deploy fixes to your exploitable critical business workloads first.",
          },
          {
            icon: <Wrench />,
            title: "Manage remediation",
            content:
              "Leverage our AI-assisted collaborative remediation workflows to foster collaboration between cross-functional teams with automated progress tracking, notifications & reporting.",
          },
          {
            icon: <TrendingUp />,
            title: "Showcase your progress",
            content:
              "Reduce your MTTR (mean time to remediate) by neutralizing exploitable attack vectors first. Track your progress over time with delta reports.",
          },
        ]}
      />
      <HowItWorks />
      <Feedback
        testimonial="We just love how CODA’s platform allows us to work collaboratively with IT remediation owners to get critical work done. It’s so much faster and we all get that instant gratification of making sure we are working on what’s truly important for the customer"
        authorName="Cory Clark"
        companyLogo={Sgi}
      />
      <Report title="Take a look on a sample report" downloadUrl="#" />
      <Footer />
    </>
  );
}
