import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  email: z.string().min(1, { message: "Email is Required" })
  // .email("This is not a valid email.")
  // phone: z.string().min(1, { message: "Phone is Required" }),
  // business: z.string().min(1, { message: "Business is Required" }),
  // budget: z.string().min(1, { message: "Required" }),
  // details: z.string().min(1, { message: "Required" })
  // age: z.number().min(10),
});
export type contactFormFields = z.infer<typeof contactFormSchema>; // string

export function useContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });
  return { register, handleSubmit, errors, isSubmitting };
}
