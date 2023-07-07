import { Title } from "@/atoms/Title/Title";
import styles from "./SOC.module.css";
import SummaryReport from "./SummaryPDF.png";
import CyberReport from "./CyberRiskReport.png";
import { Bookmark } from "lucide-react";
export function SOC() {
  return (
    <section className={styles.container}>
      <Title
        title="Your SOC team just one click away"
        subtitle="With reports ranging from compliance to high-level overviews, your whole team can understand your security posture."
      />
      <div className={styles.content}>
        <Reports />
        <div className={styles.reportBoxes}>
          <ReportInfoBox />
          <ReportInfoBox />
          <ReportInfoBox />
        </div>
      </div>
    </section>
  );
}

function Reports() {
  return (
    <div className={styles.reports}>
      <img src={SummaryReport} alt="Summary Report" />
      <img src={CyberReport} alt="Cyber Risk Report" />
    </div>
  );
}

function ReportInfoBox() {
  return (
    <div className={styles.reportInfo}>
      <Bookmark />
      <div className={styles.reportInfoText}>
        <h1>Lorem Ipsum Dolor Sit</h1>
        <p>
          Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
