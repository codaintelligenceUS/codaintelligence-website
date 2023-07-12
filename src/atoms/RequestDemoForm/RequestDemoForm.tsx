import { useEffect, useId, useMemo } from "react";
import styles from "./RequestDemoForm.module.css";

export type RequestDemoFormProps = {
  formType?: "partner" | "demo" | "careers" | "freeTrial" | "getReport";
};
export function RequestDemoForm(props: RequestDemoFormProps) {
  const rawId = useId();
  const id = rawId.replace(":", "").replace(":", "");
  const type = props.formType ?? "demo";

  const forms: { [key in NonNullable<typeof props.formType>]: string } =
    useMemo(
      () => ({
        partner: "51e03d49-8121-4577-bf5d-a9d3a6a9333a",
        demo: "44a593b8-9f80-4be4-849e-f2fdb34b5e6b",
        careers: "4a170863-17d6-45c6-b3bb-f1ebdef1d6f2",
        freeTrial: "6402bb1b-0b02-4dfc-8cdd-cf752eb7a5ed",
        getReport: "537c1abe-88d1-446c-875b-69f24f14838b",
      }),
      []
    );

  const titles: {
    [key in NonNullable<typeof props.formType>]: {
      title: string;
      subtitle: string;
    };
  } = {
    partner: {
      title: "Become a CODA Partner",
      subtitle: "Fill in the form below",
    },
    demo: { title: "Request a Demo", subtitle: "" },
    careers: {
      title: "Join us",
      subtitle: "Fill in the form below and we'll get in touch shortly",
    },
    freeTrial: {
      title: "Request a free trial",
      subtitle: "Fill in the form below",
    },
    getReport: {
      title: "Get a sample report",
      subtitle: "Fill in the form below",
    },
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.hbspt) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      window.hbspt.forms.create({
        portalId: "8924509",
        formId: forms[props.formType || "demo"],
        target: `#hubspotForm${id}`,
      });
    }
  }, [forms, id, props.formType]);

  return (
    <div className={`${styles.container}`}>
      <h1 className={styles.title}>{titles[type].title}</h1>
      <h2 className={styles.subtitle}>{titles[type].subtitle}</h2>
      <div id={`hubspotForm${id}`}></div>
    </div>
  );
}
