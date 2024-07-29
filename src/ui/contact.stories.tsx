import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ContactForm } from "./contact";
import { delay } from "@/app/utils";

const meta = {
  title: "AX_SH/CONTACT",
  component: ContactForm,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onSubmit: fn() }
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof ContactForm>;
export const Default: Story = {
  args: {
    onSubmit:async (data: any) => {
      await delay(2000)
      console.log("Form submitted with data:", data);
      // You can add any logic here
    }
  }
};
