import React from 'react';
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';

export function Form<T>({
  children,
  onSubmit,
  schema,
  ...props
}: React.PropsWithChildren<{
  onSubmit: SubmitHandler<T>;
  schema?: any;
}>) {
  const methods = useForm<T>({
    resolver: schema && zodResolver(schema),
    ...props,
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export function Field({ name }: any) {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <fieldset>
      <label>
        <strong>{name}</strong>
        <input {...register(name)} />
      </label>
      <p>
        <ErrorMessage name={name} />
      </p>
    </fieldset>
  );
}

export function Submit() {
  const {
    formState: { isSubmitting },
  } = useFormContext(); // retrieve all hook methods
  return <input type="submit" disabled={isSubmitting} />;
}
