import { SubmitHandler, useForm } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export type ContactFormProps = { onSubmit: SubmitHandler<contactFormForm> };

// Street
// Suite 100
// City, State (ZIP CODE)
//
// Call Us:
// Email:

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
  // phone: z.string().min(1, { message: "Phone is Required" }),
  // business: z.string().min(1, { message: "Business is Required" }),
  // budget: z.string().min(1, { message: "Required" }),
  // details: z.string().min(1, { message: "Required" })
  // age: z.number().min(10),
});
type contactFormForm = z.infer<typeof contactFormSchema>; // string
export function ContactForm(props: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  return (
    <form className={"flex flex-col gap-4"} onSubmit={handleSubmit(props.onSubmit)}>
      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>
        <span>Name</span>
        <input
          {...register("name")}
          className={
            "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          }
        />
      </label>
      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>
        <span>Email</span>
        <input
          {...register("email")}
          className={
            "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          }
        />
      </label>
      {/*{errors.name?.message && <p>{errors.name?.message}</p>}*/}
      {/*<input type="number" {...register("age", { valueAsNumber: true })} />*/}
      {/*{errors.age?.message && <p>{errors.age?.message}</p>}*/}
      <div className='sm:col-span-2'>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Your message
        </label>
        <textarea
          id='message'
          rows='6'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
          placeholder='Leave a comment...'
        ></textarea>
      </div>
      <button
        type='submit'
        className={
          "py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }
      >
        Send
      </button>
      <ErrorMessage errors={errors} name='name' render={({ message, ...p }) => <p>{message}</p>} />
    </form>
  );
}

export default function ContactSection() {
  const handleSubmit: SubmitHandler<contactFormForm> = (data) => {
    console.log("Contact Form", data);
  };
  return (
    <section>
      <ContactForm onSubmit={handleSubmit} />
    </section>
  );
}
