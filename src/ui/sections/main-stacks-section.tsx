import { SiJavascript, SiPython, SiTypescript } from "@icons-pack/react-simple-icons";

export function MainStacksSection() {
  return (
    <section className={'flex gap-2 '}>
      <SiTypescript />
      <SiJavascript />
      <SiPython />
    </section>
  );
}
