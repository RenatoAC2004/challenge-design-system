import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "@/components/Molecules/action-button";

const meta: Meta<typeof ActionButton> = {
  component: ActionButton.Root,
  title: "Buttons/ActionButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    label: "Let's do it",
  },
};

export const Loading: Story = {
  args: {
    label: "Saving",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Let's do it",
    disabled: true,
  },
};

export const Saved: Story = {
  args: {
    label: "Saved",
    saved: true,
  },
};

export const Small: Story = {
  args: {
    label: "Let's do it",
    size: "small",
  },
};