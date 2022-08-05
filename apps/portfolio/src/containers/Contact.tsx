import { Form } from '@ax-sh.github.io/common';

type Data = {};

export function Contact() {
  function handleSubmit(data: Data) {
    console.log(data);
  }

  return (
    <section id={'contact'} className={'h-screen grid place-items-center'}>
      <Form<Data> onSubmit={handleSubmit}></Form>
    </section>
  );
}
