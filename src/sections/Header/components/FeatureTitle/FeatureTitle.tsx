import { DemoButton } from "@/atoms";
import styles from "./FeatureTitle.module.css";
import Flare from "./Flare.png";
import ScreenshotImage from "./Screenshot.png";
import Video from "./IntroMovie.mp4";
import Thumbnail from "./thumbnail.png";

export function FeatureTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.flare} />
      <div className={styles.text}>
        <h1>Attack Surface Management </h1>
        <div className={styles.subtitle}>
          <h1>for</h1>
          <h1 className={styles.you}>your cyber resilience</h1>
          <Swooshes />
        </div>
        <p>
          No one can fix everything that should be fixed. Most of the time, the
          things that get fixed were not exploitable in the first place. Filter
          out the noise and focus on what really matters. Our leading exploit
          mitigation system helps you keep your services running securely 24/7.
        </p>
      </div>
      <DemoButton isLarge />
      <Screenshot />
    </div>
  );
}

function Screenshot() {
  return (
    <div className={styles.screenshot}>
      <video src={Video} controls poster={Thumbnail} />
      <img src={ScreenshotImage} alt="Screenshot" />
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
