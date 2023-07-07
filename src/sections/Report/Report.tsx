import styles from "./Report.module.css";
import Icon from "./Icon.png";
import { Title } from "@/atoms/Title/Title";
import { Button } from "@/atoms";

export function Report() {
  return (
    <section className={styles.container}>
      <img src={Icon} alt="Report icon" />
      <Title
        isLeftAligned
        category="report"
        title="Take a look on a sample report"
        subtitle="Footprint brings unparalleled automation into reporting"
      >
        <Button>Download the report</Button>
      </Title>
    </section>
  );
}
