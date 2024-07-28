import { SubmitHandler, useForm } from "react-hook-form";

export type ContactFormProps = {};

type Inputs = {
  email: string;
  exampleRequired: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit
    // watch,
    // formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*/!* register your input into the hook by invoking the "register" function *!/*/}
      {/*<input defaultValue='email' type={'email'} {...register("email")} />*/}

      {/*/!* include validation with required or other standard HTML validation rules *!/*/}
      <input {...register("exampleRequired", { required: true })} />
      {/*/!* errors will return when field validation fails  *!/*/}
      {/*{errors.exampleRequired && <span>This field is required</span>}*/}

      <input type='submit' />
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
