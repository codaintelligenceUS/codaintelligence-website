import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { XCircle } from "lucide-react";
type ModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
};
export function Modal(props: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const onDismiss = () => {
    ref.current?.close();
    props.onDismiss();
  };

  useEffect(() => {
    if (props.isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.isOpen]);

  return (
    <dialog ref={ref} className={styles.modal} onCancel={onDismiss}>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={onDismiss}>
          <XCircle />
        </div>
        {props.children}
      </div>
    </dialog>
  );
}
