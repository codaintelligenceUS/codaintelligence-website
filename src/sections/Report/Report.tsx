import styles from "./Report.module.css";
import Icon from "./Icon.png";
import { Title } from "@/atoms/Title/Title";
import { DemoButton } from "@/atoms";

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
        <DemoButton isRegularButton type="getReport" />
      </Title>
    </section>
  );
}
