import { CardsTitle, DetailIllustration, Header } from "@/sections";
import PartnerEnablementPhoto from "@/assets/partnerEnablement.webp";
import {
  BarChart2,
  BrainCog,
  Briefcase,
  Cloud,
  CloudCog,
  Cog,
  Truck,
  UploadCloud,
} from "lucide-react";
import { DemoButton } from "@/atoms";

export function PartnerEnablement() {
  return (
    <>
      <Header
        type="titleWithPhoto"
        sideChildren={
          <img
            style={{ borderRadius: "20px", height: "600px" }}
            src={PartnerEnablementPhoto}
          />
        }
        category="Partner Enablement"
        title="CODA Footprint is a cloud-agnostic attack surface management solution designed for MSPs"
        subtitle="Take costs and complexities out of your services. By automating and scaling Attack Surface Management Services, Managed Services Providers can drive their business while offering customers actionable security insights into compliance & cybersecurity risks."
      />
      <CardsTitle
        title={{
          category: "Partner Tiers",
          title: "Partner Tiers",
          subtitle:
            " CODA Footprint can be leveraged by a wide range of MSPs. Regardless of how advanced your technology or cybersecurity expertise is, your company can choose between:",
        }}
        cards={[
          {
            icon: <Cog />,
            title: "Tier One",
            content:
              "MSPs with little cybersecurity capabilities, looking to provide security services to their customers.",
          },
          {
            icon: <BrainCog />,
            title: "Tier Two",
            content:
              "MSPs with strong technical knowledge, looking to increase ROI and grow business in the managed security space.",
          },
          {
            icon: <CloudCog />,
            title: "Tier Three",
            content:
              "Large MSPs/CSPs with a strong focus on enabling Tier 1 & 2 partners scale & grow their cloud & cyber practices.",
          },
        ]}
      >
        <DemoButton isLarge />
      </CardsTitle>

      <CardsTitle
        isDarkBlueBackground
        title={{
          title: "Drive more revenue with CODA Footprint",
          subtitle:
            "Besides the three tiers offered to MSPs, we also enable multiple revenue streams for them.",
        }}
        cards={[
          {
            icon: <Briefcase />,
            isSpecial: true,
            title: "Generate new business",
            content: `Become one of our tiered partners and earn up to 40% margins on product sales.

Add your value- added services on top of Footprint.

Get more customers online by using our demo and trial features to acquire new clients.`,
          },
          {
            icon: <Cloud />,
            isSpecial: true,
            title: "Generate Cloud Consumption",
            content: `All cloud consumption will be reported under your name.

Be it AWS, Azure, GCP, Oracle Cloud or any other public or private cloud of your choice.

You can also run it in CODA's Cloud in the US, if you prefer a fully managed instance.`,
          },
          {
            icon: <Truck />,
            isSpecial: true,
            title: "Deliver more services",
            content: `Footprint creates the business case for new customers.

Leverage Footprint to deliver fully managed VRM services to your customers.

Smoothly upgrade your team's cyber skills with CODA as part of your Partner Enablement Program.`,
          },
          {
            icon: <UploadCloud />,
            isSpecial: true,
            title: "Upsell / Cross-Sell Security Products",
            content: `Increased Customer awareness allows you to deliver more Professional and/or Managed services towards them.

Ability to drive onlien sales through our Funnel uniquely positions you towards new potential Customers on your entire service portfolio.`,
          },
        ]}
      >
        <DemoButton isLarge />
      </CardsTitle>
      <CardsTitle
        isNoMargin
        isBlueBackground
        title={{
          category: "Partner Enablement",
          title: "More than a High Performance Threat Intelligence Solution",
          subtitle:
            "CODA can provide our partners with a Customer Success (Enablement) process designed to help you successfully market and sell your white-label VM managed solution and services by using email templates and resources you can use throughout the sales process. We have materials to help you to attract new visitors to your website, convert them into leads, close them into clients, and grow your revenue.",
        }}
        cards={[
          {
            icon: <BarChart2 />,
            title: "Our Partner Enablement Kit covers:",
            content: (
              <ul>
                <li>
                  Platform documentation (installation, maintenance, support)
                </li>
                <li>
                  Positioning and Unique Selling Points (why is CODA Footprint
                  what your customers need, features and benefits)
                </li>
                <li>
                  Marketing and Sales Materials (social media posts,
                  infographics, sales presentations, one pagers etc.).
                </li>
              </ul>
            ),
          },
        ]}
      />
    </>
  );
}
