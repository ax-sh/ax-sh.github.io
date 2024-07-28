import type { Meta, StoryObj } from "@storybook/react";

import { ContactForm } from "./Contact";

const meta: Meta<typeof ContactForm> = {
  title: "AX_SH/CONTACT ",
  component: ContactForm
};

export default meta;
type Story = StoryObj<typeof ContactForm>;
export const Default: Story = {};
