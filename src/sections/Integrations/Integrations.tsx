import { Card } from "@/atoms/Card/Card";
import styles from "./Integrations.module.css";
import { Title } from "@/atoms/Title/Title";

import Acronis from "./assets/Acronis.png";
import AVAST from "./assets/AVAST.svg";
import AVG from "./assets/AVG.png";
import BeyondTrust from "./assets/BeyondTrust.png";
import Bitdefender from "./assets/Bitdefender.png";
import Checkpoint from "./assets/Checkpoint.png";
import CrowdStrike from "./assets/CrowdStrike.png";
import Cylance from "./assets/Cylance.png";
import ESET from "./assets/ESET.png";
import Fortinet from "./assets/Fortinet.png";
import Huntress from "./assets/Huntress.png";
import Infocyte from "./assets/Infocyte.png";
import Malwarebytes from "./assets/Malwarebytes.png";
import Mcafee from "./assets/Mcafee.webp";
import Norton from "./assets/Norton.png";
import Microsoft from "./assets/Microsoft.png";
import Sophos from "./assets/Infocyte.png";
import Symantec from "./assets/Symantec.png";
import Trend from "./assets/Trend Micro.png";
import Cisco from "./assets/Cisco.png";
import VMWare from "./assets/Norton.png";
import Webroot from "./assets/Webroot.svg";
import ZoneAlarm from "./assets/ZoneAlarm.png";
import D3 from "./assets/D3 Security.png";
import Swimlane from "./assets/Swimlane.svg";
import IBM from "./assets/IBM Qradar.png";
import Microsoft365 from "./assets/Microsoft 365.webp";
import Splunk from "./assets/Splunk.png";
import FortiSIEM from "./assets/FortiSIEM.png";
import MicrosoftAzure from "./assets/Microsoft Azure.webp";
import Azure from "./assets/Azure AD.png";
import ActiveDirectory from "./assets/Active Directory.svg";
import MicrosoftSentinel from "./assets/Microsoft Sentinel.png";
import AWS from "./assets/AWS.png";
import GCP from "./assets/GCP.png";
import Oracle from "./assets/Oracle Cloud.png";
import SAP from "./assets/SAP ECS Cloud.png";
import Autotask from "./assets/Autotask.png";
import JIRA from "./assets/JIRA.jpg";
import ConnectWise from "./assets/ConnectWise PSA.png";
import Kaseya from "./assets/Kaseya BMS.png";
import Manage from "./assets/Manage Engine.png";

export function Integrations() {
  const partners = [
    { icon: Acronis, name: "Acronis", type: "Endpoint Security Validation " },
    { icon: AVAST, name: "AVAST", type: "Endpoint Security Validation " },
    { icon: AVG, name: "AVG", type: "Endpoint Security Validation " },
    {
      icon: BeyondTrust,
      name: "BeyondTrust",
      type: "Endpoint Security Validation ",
    },
    {
      icon: Bitdefender,
      name: "Bitdefender",
      type: "Endpoint Security Validation ",
    },
    {
      icon: Checkpoint,
      name: "Checkpoint",
      type: "Endpoint Security Validation ",
    },
    {
      icon: CrowdStrike,
      name: "CrowdStrike",
      type: "Endpoint Security Validation ",
    },
    { icon: Cylance, name: "Cylance", type: "Endpoint Security Validation " },
    { icon: ESET, name: "ESET", type: "Endpoint Security Validation " },
    { icon: Fortinet, name: "Fortinet", type: "Endpoint Security Validation " },
    { icon: Huntress, name: "Huntress", type: "Endpoint Security Validation " },
    { icon: Infocyte, name: "Infocyte", type: "Endpoint Security Validation " },
    {
      icon: Malwarebytes,
      name: "Malwarebytes",
      type: "Endpoint Security Validation ",
    },
    { icon: Mcafee, name: "Mcafee", type: "Endpoint Security Validation " },
    { icon: Norton, name: "Norton", type: "Endpoint Security Validation " },
    {
      icon: Microsoft,
      name: "Microsoft",
      type: "Endpoint Security Validation ",
    },
    { icon: Sophos, name: "Infocyte", type: "Endpoint Security Validation " },
    { icon: Symantec, name: "Symantec", type: "Endpoint Security Validation " },
    { icon: Trend, name: "Trend Micro", type: "Endpoint Security Validation " },
    { icon: Cisco, name: "Cisco", type: "Endpoint Security Validation " },
    { icon: VMWare, name: "Norton", type: "Endpoint Security Validation " },
    { icon: Webroot, name: "Webroot", type: "Endpoint Security Validation " },
    {
      icon: ZoneAlarm,
      name: "ZoneAlarm",
      type: "Endpoint Security Validation ",
    },
    { icon: D3, name: "D3 Security", type: "SOAR" },
    { icon: Swimlane, name: "Swimlane", type: "SOAR " },
    { icon: IBM, name: "IBM QRadar", type: "SIEM " },
    { icon: MicrosoftSentinel, name: "Microsoft Sentinel", type: "SIEM " },
    { icon: Splunk, name: "Splunk", type: "SIEM " },
    { icon: FortiSIEM, name: "FortiSIEM", type: "SIEM " },
    { icon: Microsoft365, name: "Microsoft 365", type: "IDP " },
    { icon: Azure, name: "Azure AD", type: "IDP " },
    { icon: ActiveDirectory, name: "Active Directory", type: "IDP" },
    {
      icon: MicrosoftAzure,
      name: "Microsoft Azure",
      type: "Native Appliance ",
    },
    { icon: AWS, name: "AWS", type: "Native Appliance " },
    { icon: GCP, name: "GCP", type: "Native Appliance " },
    { icon: Oracle, name: "Oracle Cloud", type: "Native Appliance " },
    { icon: SAP, name: "SAP ECS Cloud	", type: "Native Appliance " },
    { icon: Autotask, name: "Autotask", type: "PSA " },
    { icon: JIRA, name: "JIRA", type: "PSA " },
    { icon: ConnectWise, name: "ConnectWise", type: "PSA	PSA " },
    { icon: Kaseya, name: "Kaseya BMS", type: "PSA" },
    { icon: Manage, name: "Manage ENgine", type: "PSA" },
  ];
  return (
    <section className={styles.container}>
      <Title
        isLeftAligned
        title="Available integrations"
        subtitle="Explore current integration options"
      />

      <div className={styles.cardsList}>
        {partners.map((partner) => (
          <Card
            fixedHeaderPhoto
            headerPhoto={partner.icon}
            title={partner.name}
            content={`Integration type: ${partner.type}`}
          />
        ))}
      </div>
    </section>
  );
}
