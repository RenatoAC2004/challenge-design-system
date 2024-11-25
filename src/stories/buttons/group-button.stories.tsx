import type { Meta, StoryObj } from "@storybook/react";
import { GroupButton } from "@/components/Molecules/group-button";
import { LucideLoaderCircle } from "lucide-react";
import { ActionButton } from "@/components/Molecules/action-button";

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

export const Default = () => (
  <GroupButton.Root
    actionProps={{ children: "Save" }}
    alternativeProps={{ children: "Cancel" }}
  />
);

export const Loading = () => (
  <GroupButton.Root
    actionProps={{
      children: (
        <>
          <ActionButton.Icon icon={<LucideLoaderCircle />} isloading={true} />
          Saving
        </>
      ),
      loading: true,
    }}
    alternativeProps={{
      children: "Cancel",
    }}
  />
);

export const Small = () => (
  <GroupButton.Root
    actionProps={{
      children: "Save",
      size: "small",
    }}
    alternativeProps={{
      children: "Cancel",
      size: "small",
    }}
  />
);

export const SmallLoading = () => (
  <GroupButton.Root
    actionProps={{
      children: (
        <>
          <ActionButton.Icon icon={<LucideLoaderCircle />} isloading={true} />
          Saving
        </>
      ),
      loading: true,
      size: "small",
    }}
    alternativeProps={{
      children: "Cancel",
      size: "small",
    }}
  />
);

export const Disabled = () => (
  <GroupButton.Root
    actionProps={{
      children: "Confirm",
      disabled: true,
    }}
    alternativeProps={{
      children: "Cancel",
      disabled: true,
    }}
  />
);
