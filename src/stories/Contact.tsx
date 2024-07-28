import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export type ContactFormProps = {};

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Required" })
  // age: z.number().min(10),
});
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit:SubmitHandler<typeof contactFormSchema.i> = (data: ContactFormProps) => {
    console.log(d)}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message}</p>}
      <input type="submit" />
    </form>
  );
}

// export default function ContactSection() {
//   const handleSubmit = (data) => {
//     console.log(data, "Contact Form");
//   };
//   return (
//     <section>
//       <ContactForm onSubmit={handleSubmit} />
//     </section>
//   );
// }
