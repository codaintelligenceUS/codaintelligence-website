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
import { useState } from "react";
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

export function RequestDemoForm(props: { isPartner?: boolean }) {
  const [isFilled, setIsFilled] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { handleSubmit } = useHubspotSubmit({
    formId: "44a593b8-9f80-4be4-849e-f2fdb34b5e6b",
    portalId: "8924509",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsFilled(true);
    await handleSubmit(values);
  }

  return (
    <div className={`${styles.container}`}>
      {isFilled ? (
        <div className={styles.filled}>
          <CheckCircle />
          <h1>Thank you!</h1>
          <h2>We will be in contact shortly.</h2>
        </div>
      ) : (
        <>
          <h1>
            {props.isPartner
              ? "Become a CODA Partner"
              : "Request a Footprint demo"}
          </h1>
          <h2>
            {props.isPartner
              ? "Fill out the form below to become a partner"
              : "Fill out the form below to request a demo"}
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className={styles.fields}>
                <Field
                  fieldName="firstname"
                  name="First Name"
                  control={form.control}
                />
                <Field
                  fieldName="lastname"
                  name="Last Name"
                  control={form.control}
                />
                <Field fieldName="email" name="E-mail" control={form.control} />
                <Field
                  fieldName="company"
                  name="Company"
                  control={form.control}
                />
                <Field
                  fieldName="jobtitle"
                  name="Job Title"
                  control={form.control}
                />
              </div>
              <div className={styles.bottomFields}>
                <Field
                  fieldName="where_did_you_hear_about_us_"
                  name="Where did you hear about us ?"
                  control={form.control}
                />
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}

function Field(props: {
  name: string;
  fieldName: keyof z.infer<typeof formSchema>;
  control: Control<z.infer<typeof formSchema>>;
}) {
  return (
    <FormField
      control={props.control}
      name={props.fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
