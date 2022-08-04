import React from 'react';
import { Form, Submit, Field } from '@ax-sh.github.io/common';

export function Contact() {
  function handleSubmit(data: any) {
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
