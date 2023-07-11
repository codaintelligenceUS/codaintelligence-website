import { useState } from "react";
import { Modal } from "../Modal/Modal";
import {
  RequestDemoForm,
  RequestDemoFormProps,
} from "../RequestDemoForm/RequestDemoForm";
import styles from "./DemoButton.module.css";
import { Button } from "..";
/**
 * This is a special button for the Demo modal
 */
export function DemoButton(props: {
  isLarge?: boolean;
  isRegularButton?: boolean;
  buttonText?: string;
  type?: RequestDemoFormProps["formType"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const type = props.type ?? "demo";

  const buttonTexts: {
    [key in NonNullable<RequestDemoFormProps["formType"]>]: string;
  } = {
    demo: "Get a Demo",
    partner: "Become a Partner",
    careers: "Join us",
    freeTrial: "Free Trial",
    getReport: "Get a sample report",
  };

  const className = `${styles.button} ${props.isLarge || type === "partner" ? styles.large : ""
    }`;

  const buttonText = props.buttonText ? props.buttonText : buttonTexts[type];

  return (
    <>
      {props.isRegularButton ? (
        <Button onClick={() => setIsOpen(true)}>{buttonText}</Button>
      ) : (
        <button className={className} onClick={() => setIsOpen(true)}>
          {buttonText}
        </button>
      )}
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <RequestDemoForm formType={type} />
      </Modal>
    </>
  );
}
