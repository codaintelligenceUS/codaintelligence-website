import { DemoButton } from "@/atoms";
import styles from "./FeatureTitle.module.css";
import Flare from "./Flare.png";
import Screenshot from "./Screenshot.png";

export function FeatureTitle() {
  return (
    <div className={styles.container}>
      <img src={Flare} alt="Flare" className={styles.flare} />
      <div className={styles.text}>
        <h1>Attack surface management</h1>
        <div className={styles.subtitle}>
          <h1>designed for</h1>
          <h1 className={styles.you}>you</h1>
          <Swooshes />
        </div>
        <p>
          No one is paying attention all the time. Filter out the noise and
          focus on what really matters. Our leading exploit mitigation system
          helps you keep your services running 24/7.
        </p>
      </div>
      <DemoButton isLarge />
      <img src={Screenshot} alt="Screenshot" className={styles.screenshot} />
    </div>
  );
}

function Swooshes() {
  return (
    <div className={styles.swooshes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="101"
        height="25"
        viewBox="0 0 101 25"
        fill="none"
      >
        <path
          d="M2 6.73424C14.3505 4.39519 50.9996 0.418797 98.7918 3.22566"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M21.1502 12.6579C30.1541 10.9871 56.8725 8.14683 91.7146 10.1517"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M6.9957 22.3328C18.7353 20.1052 53.5716 16.3181 99 18.9913"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
