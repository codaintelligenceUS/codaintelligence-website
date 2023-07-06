import { Button as RawButton } from "@/components/ui/button";

type RawButtonProps = Parameters<typeof RawButton>[0];
type ButtonProps = Pick<
  RawButtonProps,
  "variant" | "className" | "onClick" | "children"
>;

export function Button(props: ButtonProps) {
  return <RawButton {...props} />;
}
