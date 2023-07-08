import { Button, Logo } from "@/atoms";
import { CardsTitle, Feedback, Footer, Header, HowItWorks } from "@/sections";
import { BarChart, CircleDot, Globe2, ShieldCheck } from "lucide-react";
import SAPLogo from "@/assets/sap.png";
import Silversky from "@/assets/silversky.png";
import SGI from "@/assets/sgi.png";
import HWN from "@/assets/hwn.png";
import IIII from "@/assets/1111.png";
import Blokworkx from "@/assets/blokworkx.png";
import Defensestorm from "@/assets/defensestorm.png";
import Dod from "@/assets/dodsecurity.png";

export function TechnologyPartners() {
  const partners = [
    {
      icon: Silversky,
      partnerName: "Silversky",
      partnerDescription:
        "SilverSky is a provider of cybersecurity solutions. It offers security device management and consulting, email protection, compliance, and other services.",
      websiteUrl: "https://silversky.com",
    },
    {
      icon: SGI,
      partnerName: "Solutions Granted",
      partnerDescription:
        "Solutions Granted is a US-based SOC and team of cybersecurity professionals who are dedicated to protecting businesses and their clients from cyber threats.",
      websiteUrl: "https://solutionsgranted.com/",
    },
    {
      icon: HWN,
      partnerName: "HighWire Networks",
      partnerDescription:
        "High Wire Networks is a telecommunications and IT Services company providing services including network solutions, overwatch managed cybersecurity and infrastructure solutions. ",
      websiteUrl: "https://highwirenetworks.com/",
    },
    {
      icon: IIII,
      partnerName: "11:11 Systems",
      partnerDescription:
        "11:11 Systems is an IT services company that provides managed infrastructure solutions for cloud, network, and security. The company serves various sectors, such as financial services, healthcare, education, telecommunications, and government municipalities",
      websiteUrl: "https://11-11systems.com/",
    },
    {
      icon: Blokworkx,
      partnerName: "Blokworkx",
      partnerDescription:
        "BLOKWORX is an award-winning North American Managed Security Service Provider designed to meet the needs of Small and Medium sized business. Their managed security solutions include edge, cloud, endpoint as well as compliance and VCISO solutions.",
      websiteUrl: "https://blokworkx.com/",
    },
    {
      icon: Dod,
      partnerName: "DoD Security",
      partnerDescription:
        "DoD Security is a company that provides proven and reliable solutions that let their clients focus on their mission rather than on the technology supporting it. They strive to achieve full client satisfaction while maintaining an ethical and professional workplace and security environment.",
      websiteUrl: "https://www.dodsecurity.com/",
    },
    {
      icon: Defensestorm,
      partnerName: "DefenseStorm",
      partnerDescription:
        "DefenseStorm is a company that provides cybersecurity and cyber compliance solutions generally built for banking to achieve and maintain Cyber Safety & Soundness. They provide an integrated platform of cyber risk assessment, governance, security, and fraud solutions that ensure financial institutions achieve and maintain cyber risk readiness",
      websiteUrl: "https://www.defensestorm.com/",
    },
    {
      partnerName: "And many more!",
      partnerDescription:
        "We are currently in talks with several potential partners and are working hard to bring them on board. We believe that these partnerships will help us to better serve our customers and provide them with even more value. We will keep you updated as we make progress and look forward to sharing more information with you soon!",
    },
  ];

  return (
    <>
      <Header
        type="titleWithPhoto"
        category="partners"
        title="Become a CODA partner"
        subtitle={`Our partners can leverage the Footprint Cloud Application Security Platform to help their customers proactively identify and fix critical application risks faster.

If you are a consulting firm, a systems integrator, a technology vendor, a service provider, or VAR/VAD, we welcome the opportunity to discuss a partnering relationship.

Join us as we enable risk-based application and software supply chain security to help organizations deliver secure software faster!`}
        sideChildren={<Logo height={300} type="badge" />}
      >
        <Button>Become a partner</Button>
      </Header>
      <CardsTitle
        fixedHeight
        title={{
          category: "Power of the platform",
          title:
            "The first ASM platform specifically designed for Managed Service Providers",
          subtitle:
            "Built from the ground up as a platform for the Managed Service Providers, there are no loose ends on the needs of our partners. True breed of service scalability.",
        }}
        cards={[
          {
            icon: <BarChart />,
            title: "Show Continuous Value",
            content: (
              <ul>
                <li>Translate technical vulnerabilities into business risk</li>
                <li>
                  Track & show progress (risk, vulnerability, remediations)
                </li>
              </ul>
            ),
          },
          {
            icon: <CircleDot />,
            title: "Reduce security team workload with 100% coverage",
            content: (
              <ul>
                <li>Across all on-premises & cloud workloads</li>
                <li>Internal & external</li>
                <li>Agentless & agent-based</li>
              </ul>
            ),
          },
          {
            icon: <ShieldCheck />,
            title:
              "Eliminate exploitation risk with maximum remediation efficiency using AI",
            content: (
              <ul>
                <li>Embedded Threat Intelligence - EVE, Cortex</li>
                <li>Automated Exploit Validation - CRSS</li>
                <li>Collaborative REmediation</li>
              </ul>
            ),
          },
        ]}
      />
      <HowItWorks />
      <Feedback
        testimonial="One of SAP's new services, RAVEN, which will be launched as a pilot end of 2023, has a component developed with CODA that will allow customers to make decisions with speed and accuracy when it comes to managing risk."
        companyLogo={SAPLogo}
        authorName="Roland Costea"
      />
      <CardsTitle
        fixedHeight
        isDark
        isLargeGrid
        title={{
          subtitle:
            "Join 1,000+ others and boost customer trust with strong actionable security insights",
        }}
        cards={partners.map((partner) => ({
          fixedHeaderPhoto: true,
          headerPhoto: partner.icon ? partner.icon : undefined,
          title: partner.partnerName,
          content: partner.partnerDescription,
          footer: partner.websiteUrl ? (
            <a href={partner.websiteUrl} target="_blank">
              <Button>
                <Globe2 />
                Go to website
              </Button>
            </a>
          ) : undefined,
        }))}
      />
      <Footer />
    </>
  );
}
