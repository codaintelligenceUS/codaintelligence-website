import styles from "./Guides.module.css";
import { Card } from "@/atoms/Card/Card";
import { Link } from "wouter";
import { PAGES } from "@/variables";
import { Button } from "@/atoms";

export function Guides() {
  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <Card
          title="Partner Enablement"
          content="Explore what CODA Footprint can do to accelerate your business growth"
          footer={
            <Link to={PAGES.partnerEnablement}>
              <Button>Learn more</Button>
            </Link>
          }
        />
      </div>
    </section>
  );
}
