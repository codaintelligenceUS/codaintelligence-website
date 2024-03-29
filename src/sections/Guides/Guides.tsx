import styles from "./Guides.module.css";
import { Card } from "@/atoms/Card/Card";
import { Link, LinkProps } from "wouter";
import { PAGES } from "@/variables";
import { Button } from "@/atoms";

export function Guides() {
  const content = [
    {
      title: "Partner Enablement",
      content:
        "Explore what CODA Footprint can do to accelerate your business growth",
      link: PAGES.partnerEnablement,
    },
    {
      title: "Silversky announces CODA partnership",
      content:
        "CODA and Silversky announce a partnership to accelerate the growth of their business",
      link: "https://www.linkedin.com/posts/silversky_codaintelligence-christiansandescu-ceo-activity-7084535345735692289-22JA/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "CyberSecurity Maturity of Credit Unions Panel Discussion with SilverSky",
      link: "https://youtu.be/8G32OYQY6bo",
      content: "Join our CEO Chris and the Silversky team on this interesting talk regarding the security challenges of credit unions"
    },
    {
      link: "https://www.youtube.com/watch?v=_AwGvZLWLjY",
      title: "Chris Sandescu, CODA CEO, on EPIC STARTS Podcast",
      content:
        "Join Chris in a conversation about CODA Footprint, cyber security and the future of the industry",
    },
    {
      link: "https://www.youtube.com/watch?v=UgVKORZ9Ubc",
      title: "CyberSecurity Simplified - High Wire Networks Podcast",
      content:
        "Join Chris, CODA CEO, Susanna, VP of Marketing at HWN and David, CTO of Overwatch in an interesting conversation about how security threats have evolved and what we can do to protect against them.",
    },
    {
      link: "https://vimeo.com/493347343",
      title: "Crayon and CODA Intelligence webinar",
      content:
        "Changing the Paradigm of Vulnerability Management for the MSPs is the name of the webinar we hosted with Crayon on the 18th of December.",
    },
    {
      link: "https://1111systems.com/blog/bolster-protection-with-managed-security-services/",
      title: "Bolster protection with managed security services",
      content:
        "In this article for 11:11 Systems, Brian Knutson writes an overview of managed security systems and their benefits.",
    },
    {
      link: "https://www.youtube.com/watch?v=jjLwNHMLfKk",
      title:
        "MSSPs: Help Your Customers Maintain Compliance with Vulnerability Monitoring and Training",
      content:
        "An online seminar on how MSSPs can help their customers maintain compliance with vulnerability monitoring and training.",
    },
    {
      link: "https://www.youtube.com/watch?v=jjLwNHMLfKk",
      title: "Prioritizing vulneraiblities in an Ever-Changing Landscape",
      content:
        "An online seminar on how MSSPs can help their customers maintain compliance with vulnerability monitoring and training.",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        {content.map((entry) => (
          <Card
            title={entry.title}
            content={entry.content}
            footer={
              <CustomLink to={entry.link}>
                <Button>Learn more</Button>
              </CustomLink>
            }
          />
        ))}
      </div>
    </section>
  );
}

function CustomLink(props: LinkProps) {
  if (props.to?.startsWith("https://")) {
    return (
      <a href={props.to} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }
  return <Link {...props} />;
}
