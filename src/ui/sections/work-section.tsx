"use client";

import { useDataQuery } from "@/hooks/use-data-query";

import clsx from "clsx";

const works = [false, false, false, false, false, false, false, false, false];

function WorkCard() {
  return <div className={"bg-gray-900  "}> </div>;
}

export default function WorkSection() {
  const { data } = useDataQuery();
  console.log("work", data);

  return (
    <section id={"work"} className={"h-screen flex flex-col "}>
      <div className={clsx("container mx-auto py-8 grid gap-3 flex-grow", "grid-cols-4  ")}>
        {works.map((i) => {
          return <WorkCard />;
        })}
      </div>
    </section>
  );
}
