import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// <select Budget >
//   <option>What is your project budget?</option>
//   <option>Maintenance / Ongoing</option>
//   <option>$2,000 - $6,000</option>
//   <option>$6,000 - $18,000</option>
//   <option>$18,000 - $35,000</option>
//   <option>$35,000 - $70,000</option>
//   <option>$70,000 - $100,000</option>
//   <option>$100,000 +</option>
// </select>

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  email: z.string().min(1, { message: "Email is Required" })
  // .email("This is not a valid email.")
  // phone: z.string().min(1, { message: "Phone is Required" }),
  // business: z.string().min(1, { message: "Business is Required" }),
  // budget: z.string().min(1, { message: "Required" }),
  // message: z.string().min(1, { message: "Message is Required" })
  // age: z.number().min(10),
});
export type contactFormFields = z.infer<typeof contactFormSchema>; // string

export function useContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });
  return { control, register, handleSubmit, errors, isSubmitting };
}
