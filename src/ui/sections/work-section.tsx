"use client";

import { useDataQuery } from "@/hooks/use-data-query";

export default function WorkSection() {
  const { data } = useDataQuery();
  console.log("work", data);
  return <section id={"work"}>{/*work*/}</section>;
}
