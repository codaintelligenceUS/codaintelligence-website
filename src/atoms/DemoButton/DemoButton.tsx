import { useState } from "react";
import { Button } from "..";
import { Modal } from "../Modal/Modal";
import { RequestDemoForm } from "../RequestDemoForm/RequestDemoForm";
import styles from "./DemoButton.module.css";
/**
 * This is a special button for the Demo modal
 */
export function DemoButton(props: {
  isLarge?: boolean;
  type?: "partner" | "demo";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const type = props.type ?? "demo";

  return (
    <>
      <button
        className={`${styles.button} ${props.isLarge || type === "partner" ? styles.large : ""
          }`}
        onClick={() => setIsOpen(true)}
      >
        {type === "demo" ? "Get a Demo" : "Become a partner"}
      </button>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <RequestDemoForm isPartner={type === "partner"} />
      </Modal>
    </>
  );
}
