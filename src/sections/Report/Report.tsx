import styles from "./Report.module.css";
import Icon from "./Icon.png";
import { Title } from "@/atoms/Title/Title";
import { Button } from "@/atoms";

export type ReportProps = {
  title?: string;
  subtitle?: string;
  downloadUrl: string;
};

export function Report(props: ReportProps) {
  return (
    <section className={styles.container}>
      <img src={Icon} alt="Report icon" />
      <Title
        isLeftAligned
        category="report"
        title={props.title || "Take a look on a sample report"}
        subtitle={
          props.subtitle ||
          "Footprint brings unparalleled automation into reporting"
        }
      >
        <a href={props.downloadUrl} target="_blank" rel="noreferrer">
          <Button>Download the report</Button>
        </a>
      </Title>
    </section>
  );
}
