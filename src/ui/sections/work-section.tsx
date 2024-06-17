"use client";

import { useDataQuery } from "@/hooks/use-data-query";
import { faker } from "@faker-js/faker";
import { className } from "postcss-selector-parser";

import clsx from "clsx";

type WorkCardProps = Readonly<{ label: string; src: string; url: string }>;
function makeMockWork() {
  return {
    label: faker.person.firstName(),
    src: faker.image.urlLoremFlickr({ category: "nature" })
  } as WorkCardProps;
}

const works = faker.helpers.multiple(makeMockWork, { count: 10 });

function WorkCard({ src, label }: WorkCardProps) {
  return (
    <a href={""}>
      <div className={"bg-[#101010] flex flex-col relative aspect-[21/9] overflow-hidden"}>
        <div className={clsx("flex-grow flex flex-col items-center", 'absolute inset-0 bg-black/60')}>
          <div className={'p-1 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] absolute right-0 bottom-0'}>

          <span className={"text-6xl"}>{label}</span>
          </div>
        </div>
        <img alt={label} src={src} className={clsx("object-contain", "flex-grow")} />
        {/*<div className={'flex-grow      flex justify-center justify-items-center bg-red-500 items-stretch'}>*/}
        {/*  </div>*/}
      </div>
    </a>
  );
}

export default function WorkSection() {
  const { data } = useDataQuery();
  console.log("work", data);

  return (
    <section id={"work"} className={"min-h-screen flex flex-col "}>
      <div
        className={clsx(
          "container mx-auto py-8",
          "grid gap-3",
          "grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {works.map((i) => {
          return <WorkCard {...i} />;
        })}
      </div>
    </section>
  );
}
