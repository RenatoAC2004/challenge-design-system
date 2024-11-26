import type { Meta } from "@storybook/react";
import { DefaultLabel } from "@/components/Molecules/labels/default-label";
import { LucideX } from "lucide-react";

const meta: Meta<typeof DefaultLabel.Root> = {
  component: DefaultLabel.Root,
  title: "Labels/DefaultLabel",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => <DefaultLabel.Root>Label</DefaultLabel.Root>;

export const DefaultWithIcon = () => (
  <DefaultLabel.Root>
    Label
    <DefaultLabel.Icon icon={<LucideX />}></DefaultLabel.Icon>
  </DefaultLabel.Root>
);

export const GreyLabel = () => (
  <DefaultLabel.Root
    backgroundColor="rgba(141, 144, 145, 0.1)"
    textColor="#000"
  >
    Label
  </DefaultLabel.Root>
);

export const GreyWithIcon = () => (
  <DefaultLabel.Root
    backgroundColor="rgba(141, 144, 145, 0.1)"
    textColor="#000"
  >
    Label
    <DefaultLabel.Icon icon={<LucideX />}></DefaultLabel.Icon>
  </DefaultLabel.Root>
);

export const RedLabel = () => (
  <DefaultLabel.Root
    backgroundColor="rgba(197, 41, 42, 0.1)"
    textColor="#C5292A"
  >
    Label
  </DefaultLabel.Root>
);

export const GreenLabel = () => (
  <DefaultLabel.Root
    backgroundColor="rgba(34, 176, 46, 0.1)"
    textColor="#22B02E"
  >
    Label
  </DefaultLabel.Root>
);
