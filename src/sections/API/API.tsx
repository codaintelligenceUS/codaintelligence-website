import { Title } from "@/atoms/Title/Title";
import styles from "./API.module.css";

import { Button } from "@/atoms";
import { PAGES } from "@/variables";
import { Link } from "wouter";
import Lock from "./Lock.png";

export function API() {
  return (
    <section className={styles.container}>
      <Title
        isDark
        isLeftAligned
        title="Already struggling with a complex stack and operational fatigue ?"
        subtitle="Footprint provides an extensive REST API and SDKs for the most popular languages, so the possibilities are endless to integrate our data in your existing processes!"
      >
        <Link to={PAGES.technologyPartners}>
          <Button>View available integrations</Button>
        </Link>
      </Title>
      <img src={Lock} alt="lock" />
    </section>
  );
}
