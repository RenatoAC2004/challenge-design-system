import type { Meta, StoryObj } from "@storybook/react";
import { SingleActionButton } from "@/components/Molecules/single-action-button";

const meta: Meta<typeof SingleActionButton.Root> = {
  component: SingleActionButton.Root,
  title: "Buttons/SingleActionButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SingleActionButton.Root>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
  };
