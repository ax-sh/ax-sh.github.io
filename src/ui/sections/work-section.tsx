"use client";

import { useDataQuery } from "@/hooks/use-data-query";
import { faker } from "@faker-js/faker";

import clsx from "clsx";


type WorkCardProps = Readonly<{ label: string; src: string; url: string }>;
function makeMockWork() {
  return { label: faker.person.firstName(), src: faker.image.urlLoremFlickr({category:"nature"}) } as WorkCardProps;
}

const works = faker.helpers.multiple(makeMockWork, { count: 10 });

function WorkCard({ src, label }: WorkCardProps) {
  return (
    <div className={"bg-gray-900 flex flex-col relative"}>
      <img alt={label} src={src}  className={'object-contain flex-grow'}/>
      <div className={'flex-grow absolute w-full flex justify-center items-end'}>
        <span className={'text-6xl'}>{label}</span></div>
    </div>
  );
}

export default function WorkSection() {
  const { data } = useDataQuery();
  console.log("work", data);

  return (
    <section id={"work"} className={"min-h-screen flex flex-col "}>
      <div
        className={clsx(
          "container mx-auto py-8 grid gap-3 flex-grow",
          "grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 "
        )}
      >
        {works.map((i) => {
          return <WorkCard {...i}/>;
        })}
      </div>
    </section>
  );
}
