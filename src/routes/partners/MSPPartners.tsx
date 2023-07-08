import { RequestDemoForm } from "@/atoms/RequestDemoForm/RequestDemoForm";
import {
  AsSeenOn,
  CardsTitle,
  DetailIllustration,
  Feedback,
  Footer,
  Header,
} from "@/sections";
import { CheckSquare } from "lucide-react";

export function MSPPartners() {
  return (
    <>
      <Header
        category="MSP Partners"
        title="Get started with CODA Footprint today"
        subtitle="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        type="titleWithPhoto"
        sideChildren={<RequestDemoForm />}
      >
        <AsSeenOn
          isSmall
          isPartnerDisplay
          title="Join 1,000+ customers who have their compliance under control"
        />
      </Header>
      <DetailIllustration
        title="Outpace your competition with strong information security"
        text="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
        illustration={
          <div
            style={{
              borderRadius: "20px",
              backgroundColor: "white",
              width: "300px",
              height: "300px",
            }}
          />
        }
      />
      <CardsTitle
        title={{
          category: "MSP Partners",
          title: "Get started with CODA Footprint today",
          subtitle:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        }}
        cards={[
          {
            icon: <CheckSquare />,
            title: "Dashboard",
            content:
              "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          },
          {
            icon: <CheckSquare />,
            title: "Dashboard",
            content:
              "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          },
          {
            icon: <CheckSquare />,
            title: "Dashboard",
            content:
              "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          },
          {
            icon: <CheckSquare />,
            title: "Dashboard",
            content:
              "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          },
        ]}
      />
      <Feedback
        isDarkBlue
        authorName="John Retinghoff"
        companyLogo={<CheckSquare />}
        testimonial="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <Footer />
    </>
  );
}
