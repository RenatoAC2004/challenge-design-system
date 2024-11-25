import type { Meta } from "@storybook/react";
import { ActionButton } from "@/components/Molecules/action-button";
import { LucideCheck, LucideLoaderCircle } from "lucide-react";

const meta: Meta<typeof ActionButton.Root> = {
  component: ActionButton.Root,
  title: "Buttons/ActionButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => <ActionButton.Root>Let's do it</ActionButton.Root>;

export const Loading = () => (
  <ActionButton.Root>
    <>
      <ActionButton.Icon isloading={true} icon={<LucideLoaderCircle />} />
      Loading
    </>
  </ActionButton.Root>
);

export const Disabled = () => (
  <ActionButton.Root disabled={true}>Disabled</ActionButton.Root>
);

export const Saved = () => (
  <ActionButton.Root saved={true}>
    <>
      <ActionButton.Icon isloading={false} icon={<LucideCheck />} />
      Saved
    </>
  </ActionButton.Root>
);

export const Small = () => (
  <ActionButton.Root size="small">Let's do it</ActionButton.Root>
);
