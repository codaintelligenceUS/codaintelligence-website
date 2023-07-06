import { Logo } from "@/atoms";
import styles from "./Footer.module.css";
import { Mail, Phone, Pin } from "lucide-react";

export function Footer() {
  return (
    <section className={styles.container}>
      <Logo />
      <LinkGroup
        title="Company"
        links={[
          { title: "About us", href: "#" },
          { title: "Careers", href: "#" },
        ]}
      />
      <LinkGroup
        title="Platform"
        links={[
          { title: "Footprint", href: "#" },
          { title: "How it works", href: "#" },
          { title: "Footprint for Partners", href: "#" },
        ]}
      />
      <LinkGroup
        title="Partners"
        links={[
          { title: "Technology Partners", href: "#" },
          { title: "Managed Service Providers", href: "#" },
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
          { title: "sales@codaintelligence.com", href: "#", icon: <Mail /> },
          { title: "+1 (617) 963-0147", href: "#", icon: <Phone /> },
        ]}
      />
    </section>
  );
}

type LinkGroupProps = {
  title: string;
  links: { title: string; href: string; icon?: JSX.Element }[];
};

function LinkGroup(props: LinkGroupProps) {
  return (
    <div className={styles.linkGroup}>
      <h1>{props.title}</h1>
      {props.links.map((link) => (
        <a href={link.href}>
          {link.icon}
          {link.title}
        </a>
      ))}
    </div>
  );
}
