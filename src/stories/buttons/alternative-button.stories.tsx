import type { Meta } from "@storybook/react";
import { AlternativeButton } from "@/components/Molecules/alternative-button";

const meta: Meta<typeof AlternativeButton.Root> = {
  component: AlternativeButton.Root,
  title: "Buttons/AlternativeButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => (
  <AlternativeButton.Root>Lets do it</AlternativeButton.Root>
);

export const Disabled = () => (
  <AlternativeButton.Root disabled={true}>Lets do it</AlternativeButton.Root>
);

export const Small = () => (
  <AlternativeButton.Root size="small">Lets do it</AlternativeButton.Root>
);