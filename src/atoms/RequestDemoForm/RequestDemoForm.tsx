import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "..";
import styles from "./RequestDemoForm.module.css";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  jobTitle: z.string().min(1),
  whereDidYouHear: z.string(),
});

export function RequestDemoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={`${styles.container}`}>
      <h1>Request a Footprint demo</h1>
      <h2>Let us show you the power of Footprint</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.fields}>
            <Field fieldName="name" name="Name" control={form.control} />
            <Field fieldName="email" name="E-mail" control={form.control} />
            <Field fieldName="company" name="Company" control={form.control} />
            <Field
              fieldName="jobTitle"
              name="Job Title"
              control={form.control}
            />
          </div>
          <div className={styles.bottomFields}>
            <Field
              fieldName="whereDidYouHear"
              name="Where did you hear about us ?"
              control={form.control}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
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
