import type { SubmitHandler } from "react-hook-form";

import { type contactFormFields, useContactForm } from "@/hooks/use-contact-form";
import Button from "@/ui/button";
import { ErrorMessage } from "@hookform/error-message";
import { StarIcon } from "@storybook/icons";

import clsx from "clsx";

export type ContactFormProps = { onSubmit: SubmitHandler<contactFormFields> };

// Street
// Suite 100
// City, State (ZIP CODE)
//
// Call Us:
// Email:

export function ContactForm(props: ContactFormProps) {
  const { register, handleSubmit, isSubmitting, errors } = useContactForm();

  return (
    <form className={"flex flex-col gap-2"} onSubmit={handleSubmit(props.onSubmit)}>
      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>
        <span>Name</span>
        <input
          {...register("name")}
          className={clsx(
            "mt-1 block w-full rounded-md",
            "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
            "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        />
      </label>
      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>
        <span>Email</span>
        <input
          {...register("email")}
          className={clsx(
            "mt-1 block w-full rounded-md",
            "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
            "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        />
      </label>
      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting ? <StarIcon className='h-4 w-4 text-yellow-400' /> : <StarIcon />}
        <span className='ml-2 leading-5'>{isSubmitting ? "Submitting" : "Send"}</span>
      </Button>

      {/*<div className='sm:col-span-2'>*/}
      {/*  <label*/}
      {/*    htmlFor='message'*/}
      {/*    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'*/}
      {/*  >*/}
      {/*    Your message*/}
      {/*  </label>*/}
      {/*  <textarea*/}
      {/*    id='message'*/}
      {/*    rows='6'*/}
      {/*    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'*/}
      {/*    placeholder='Write a message...'*/}
      {/*  ></textarea>*/}
      {/*</div>*/}
      {Object.keys(errors).map((name) => {
        return (
          <ErrorMessage
            key={name}
            errors={errors}
            name={name}
            render={({ message }) => <p className={"text-red-500"}>{message}</p>}
          />
        );
      })}
    </form>
  );
}

export default function ContactSection() {
  const handleSubmit: SubmitHandler<contactFormFields> = async (data) => {
    console.time("work");
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Contact Form", data);
    console.timeEnd("work");
  };
  return (
    <section>
      <ContactForm onSubmit={handleSubmit} />
    </section>
  );
}
