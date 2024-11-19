import type { Meta, StoryObj } from "@storybook/react";
import { AlternativeButton } from "@/components/Molecules/alternative-button";


const meta: Meta<typeof AlternativeButton> = {
    component: AlternativeButton.Root,
    title: "Buttons/AlternativeButton",
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
  };
  
  export default meta;
  type Story = StoryObj<typeof AlternativeButton>;

  export const Default: Story = {
    args: {
      label: "Let's do it",
    },
    
  };

  export const Disabled: Story = {
    args: {
      label: "Let's do it",
      disabled: true,
    },
  };