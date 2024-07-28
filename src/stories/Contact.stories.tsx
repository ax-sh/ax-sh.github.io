import type { Meta, StoryObj } from "@storybook/react";

import { ContactForm } from "./Contact";

const meta: Meta<typeof ContactForm> = {
  title: "Contact/sds",
  component: ContactForm
};

export default meta;
type Story = StoryObj<typeof ContactForm>;
export const Default: Story = {};
