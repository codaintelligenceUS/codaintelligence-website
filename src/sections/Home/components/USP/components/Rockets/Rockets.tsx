import { Rocket } from "lucide-react";
import styles from "./Rockets.module.css";
/**
 * Rockets display container
 */
export function Rockets() {
  return (
    <div className={styles.container}>
      {Array(24)
        .fill(1)
        .map(() => (
          <Rocket
            className={styles.rocket}
            style={{
              left: Math.random() * window.innerWidth,
              marginTop: Math.random() * 200,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
    </div>
  );
}
