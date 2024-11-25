import type { Meta } from "@storybook/react";
import { SingleActionButton } from "@/components/Molecules/single-action-button";
import { LucidePlus } from "lucide-react";

const meta: Meta<typeof SingleActionButton.Root> = {
  component: SingleActionButton.Root,
  title: "Buttons/SingleActionButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => (
  <SingleActionButton.Root>
    <SingleActionButton.Icon icon={<LucidePlus />} size="default" />
  </SingleActionButton.Root>
);

export const Small = () => (
  <SingleActionButton.Root size="small">
    <SingleActionButton.Icon icon={<LucidePlus />} size="small" />
  </SingleActionButton.Root>
);

export const Disabled = () => (
  <SingleActionButton.Root disabled={true}>
    <SingleActionButton.Icon icon={<LucidePlus />} />
  </SingleActionButton.Root>
);
