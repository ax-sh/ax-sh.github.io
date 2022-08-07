import React from 'react';
import { Form, Submit, Field } from '@ax-sh.github.io/common';

type Data = {
	email: string;
};

export function Contact() {
	function handleSubmit(data: Data) {
		console.log(data);
	}

	return (
		<section id={'contact'} className={'h-screen grid place-items-center'}>
			<Form onSubmit={handleSubmit}>
				<Field.Email />
				<Submit />
			</Form>
		</section>
	);
}
