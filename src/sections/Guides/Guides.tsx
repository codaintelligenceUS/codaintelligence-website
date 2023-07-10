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
  if (props.to.startsWith("https://")) {
    return (
      <a href={props.to} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }
  return <Link {...props} />;
}
