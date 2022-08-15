import React from 'react';
import { useForm, FormProvider, useFormContext, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { z } from 'zod';

export function Form<T>({
	children,
	onSubmit,
	schema,
	...props
}: React.PropsWithChildren<{
	onSubmit: SubmitHandler<T>;
	schema?: z.Schema;
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

type FieldProps = {
	name: string;
	type: string;
	className: string;
};
// | React.ComponentPropsWithoutRef<'input'>
// | React.ComponentPropsWithoutRef<'textarea'>;

export function Field({ name, type, className, ...props }: FieldProps) {
	const { register } = useFormContext(); // retrieve all hook methods
	return (
		<fieldset>
			<label>
				<strong className={'capitalize'}>{name}</strong>
				{type === 'textarea' ? (
					<textarea {...register(name)} className={className} {...props} />
				) : (
					<input {...register(name)} type={type} className={className} {...props} />
				)}
			</label>
			<p className="text-red-400 pt-2">
				<ErrorMessage name={name} />
			</p>
		</fieldset>
	);
}

Field.Email = ({ ...props }: any) => {
	return <Field name={'email'} type={'email'} {...props} />;
};
Field.Name = ({ ...props }: any) => {
	return <Field name={'name'} type={'text'} {...props} />;
};
Field.Message = ({ ...props }: any) => {
	return <Field name={'message'} type={'textarea'} {...props} />;
};

export function Submit({ value, ...props }: any) {
	const {
		formState: { isSubmitting },
	} = useFormContext(); // retrieve all hook methods

	return (
		<input
			type="submit"
			disabled={isSubmitting}
			{...props}
			value={isSubmitting ? 'Submitting' : value}
		/>
	);
}