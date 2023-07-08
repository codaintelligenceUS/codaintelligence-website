import { useState } from "react";
import styles from "./DemoButton.module.css";
import { Modal } from "../Modal/Modal";
import { RequestDemoForm } from "../RequestDemoForm/RequestDemoForm";
/**
 * This is a special button for the Demo modal
 */
export function DemoButton(props: { isLarge?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={`${styles.button} ${props.isLarge ? styles.large : ""}`}
        onClick={() => setIsOpen(true)}
      >
        Get a Demo
      </button>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <RequestDemoForm />
      </Modal>
    </>
  );
}
