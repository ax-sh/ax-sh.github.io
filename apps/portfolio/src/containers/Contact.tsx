import React from 'react';
import { Form } from '@ax-sh.github.io/common';

export function Contact() {
  function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <section id={'contact'} className={'h-screen grid place-items-center'}>
      <Form onSubmit={handleSubmit}></Form>
    </section>
  );
}
