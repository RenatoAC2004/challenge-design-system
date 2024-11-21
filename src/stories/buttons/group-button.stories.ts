import type { Meta, StoryObj } from "@storybook/react";
import { GroupButton } from "@/components/Molecules/group-button";

const meta: Meta<typeof GroupButton.Root> = {
  component: GroupButton.Root,
  title: "Buttons/GroupButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupButton.Root>;

export const Default: Story = {
  args: {
    actionProps: {
      label: "Save",
    },
    alternativeProps: {
      label: "Cancel",
    },
  },
};

export const Loading: Story = {
  args: {
    actionProps: {
      label: "Saving",
      loading: true,
    },
    alternativeProps: {
      label: "Cancel",
    },
  },
};

export const Small: Story = {
    args: {
      actionProps: {
        label: "Save",
        size: "small",
      },
      alternativeProps: {
        label: "Cancel",
        size: "small",
      },
    },
  };

export const SmallLoading: Story = {
    args: {
      actionProps: {
        label: "Saving",
        loading: true,
        size: "small",
      },
      alternativeProps: {
        label: "Cancel",
        size: "small",
      },
    },
  };

export const Disabled: Story = {
  args: {
    actionProps: {
      label: "Confirm",
      disabled: true,
    },
    alternativeProps: {
      label: "Cancel",
      disabled: true,
    },
  },
};
