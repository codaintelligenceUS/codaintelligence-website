import { MouseEventHandler, useEffect } from "react";
import styles from "./Modal.module.css";
import { XCircle } from "lucide-react";
type ModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
};
export function Modal(props: ModalProps) {
  const { onDismiss: propsOnDismiss } = props;

  useEffect(() => {
    const dismissOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        propsOnDismiss();
      }
    };
    document.addEventListener("keydown", dismissOnEsc);

    return () => {
      document.removeEventListener("keydown", dismissOnEsc);
    };
  }, [propsOnDismiss]);

  if (!props.isOpen) {
    return false;
  }

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    props.onDismiss();
  };

  return (
    <div className={styles.modal} onClick={onClick}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={props.onDismiss}>
          <XCircle />
        </div>
        {props.children}
      </div>
    </div>
  );
}
