import { Logo } from "@/atoms";
import { PAGES } from "@/variables";
import { Mail, Phone, Pin } from "lucide-react";
import { Link } from "wouter";
import styles from "./Footer.module.css";
import { BookDemo } from "..";
import { useState } from "react";
import { Modal } from "@/atoms/Modal/Modal";
import { RequestDemoForm } from "@/atoms/RequestDemoForm/RequestDemoForm";

export function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      {" "}
      <BookDemo />
      <section className={styles.container}>
        <Logo />
        <LinkGroup
          title="Company"
          links={[
            { title: "Resources", href: PAGES.resources },
            { title: "About us", href: PAGES.company },
          ]}
        />
        <LinkGroup
          title="Platform"
          links={[
            {
              title: "Full Attack Surface Visibility",
              href: PAGES.fullAttackSurface,
            },
            {
              title: "Contextual Prioritization",
              href: PAGES.contextualPrioritization,
            },
            {
              title: "Effective Remediation",
              href: PAGES.effectiveRemediation,
            },
          ]}
        />
        <LinkGroup
          title="Partners"
          links={[
            { title: "Technology Partners", href: PAGES.technologyPartners },
            { title: "Service Providers", href: PAGES.mspPartners },
          ]}
        />
        <LinkGroup
          title="Get in touch"
          links={[
            {
              title: "127 Main St, STE 4, Nashua, NH 03060",
              href: "#",
              icon: <Pin />,
            },
            {
              title: "sales@codaintelligence.com",
              icon: <Mail />,
              onClick: () => setIsContactFormOpen(true),
            },
            {
              title: "+1 415 230 0015",
              href: "callto:+1 (617) 963-0147",
              icon: <Phone />,
            },
          ]}
        />
      </section>
      <Modal
        isOpen={isContactFormOpen}
        onDismiss={() => setIsContactFormOpen(false)}
      >
        <RequestDemoForm formType="contact" />
      </Modal>
    </>
  );
}

type Link = ({ onClick: () => void } | { href: string }) & {
  title: string;
  icon?: JSX.Element;
};

type LinkGroupProps = {
  title: string;
  links: Link[];
};

function LinkGroup(props: LinkGroupProps) {
  return (
    <div className={styles.linkGroup}>
      <h1>{props.title}</h1>
      {props.links.map((link) => (
        <Link
          href={"href" in link ? link.href : "#"}
          onClick={"onClick" in link ? link.onClick : undefined}
        >
          {link.icon}
          {link.title}
        </Link>
      ))}
    </div>
  );
}
