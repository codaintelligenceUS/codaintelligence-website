import { Title } from "@/atoms/Title/Title";
import styles from "./SOC.module.css";
import SummaryReport from "./SummaryPDF.png";
import CyberReport from "./CyberRiskReport.png";
import { Bookmark } from "lucide-react";

export function SOC() {
  const reports = [
    {
      icon: <Bookmark />,
      title: "Executive Report",
      text: "A general overview of what current threats are, estimated time to remediations and possible risks in terms of financial or legal exposures.",
    },
    {
      icon: <Bookmark />,
      title: "Technical Report",
      text: "Raw vulnerability information for drilling down into the nitty-gritty details of detection results.",
    },
    {
      icon: <Bookmark />,
      title: "Cyber Risk Summary",
      text: "A birds eye view of your exposure prioritizing and explaining  the top risks you need to take into account",
    },
    {
      icon: <Bookmark />,
      title: "Compliance Report",
      text: "Validate your security controls against Security Standards and make sure you are in control.",
    },
  ];

  return (
    <section className={styles.container}>
      <Title
        title="Empower your security team to do more"
        subtitle="With automated reports ranging from deep technical to high-level overviews, everyone can understand your security posture and evolution."
      />
      <div className={styles.content}>
        <Reports />
        <div className={styles.reportBoxes}>
          {reports.map((report) => (
            <ReportInfoBox {...report} />
          ))}
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

function ReportInfoBox(props: {
  icon: JSX.Element;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.reportInfo}>
      {props.icon}
      <div className={styles.reportInfoText}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
