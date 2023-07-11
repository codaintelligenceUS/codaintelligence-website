import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useHubspotSubmit } from "@/utils/hubspot";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";
import { Control, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "..";
import styles from "./RequestDemoForm.module.css";

const formSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  jobtitle: z.string().min(1),
  where_did_you_hear_about_us_: z.string(),
});

export function RequestDemoForm(props: {
  formType?: "partner" | "demo" | "careers" | "freeTrial" | "getReport";
}) {
  const rawId = useId();
  const id = rawId.replace(":", "").replace(":", "");

  const forms: { [key in NonNullable<typeof props.formType>]: string } =
    useMemo(
      () => ({
        partner: "51e03d49-8121-4577-bf5d-a9d3a6a9333a",
        demo: "44a593b8-9f80-4be4-849e-f2fdb34b5e6b",
        careers: "4a170863-17d6-45c6-b3bb-f1ebdef1d6f2",
        freeTrial: "6402bb1b-0b02-4dfc-8cdd-cf752eb7a5ed",
        getReport: "4a170863-17d6-45c6-b3bb-f1ebdef1d6f2",
      }),
      []
    );

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
      <h1>
        {props.formType === "partner"
          ? "Become a CODA Partner"
          : "Request a Footprint demo"}
      </h1>
      <h2>
        {props.formType === "partner"
          ? "Fill out the form below to become a partner"
          : "Fill out the form below to request a demo"}
      </h2>
      <div id={`hubspotForm${id}`}></div>
    </div>
  );
}
